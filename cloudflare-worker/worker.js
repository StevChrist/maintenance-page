/**
 * Cloudflare Worker Auto-Failover Script for Homelab
 * 
 * Target: *.stevchrist.site/*
 * Behavior:
 * 1. Probes the Origin Server (Cloudflare Tunnel)
 * 2. If Origin is healthy, passes through directly.
 * 3. If Origin is down (521, 522, 523, 530, 1033 or timeout):
 *    Fetches the dedicated minimal maintenance page from Vercel:
 *    - stevchrist.site          -> /stevchrist
 *    - peninemate.stevchrist.site -> /peninemate
 *    - tbh-price.stevchrist.site  -> /tbh-price
 *    - social-sentiment.stevchrist.site -> /social-sentiment
 *    - pen-server.stevchrist.site -> /pen-server
 */

const VERCEL_FALLBACK_ORIGIN = "https://homelab-maintenance.vercel.app";
const ORIGIN_DOWN_STATUS_CODES = new Set([521, 522, 523, 530, 1033]);

// Mapping hostname to dedicated clean page path
function getMaintenancePath(hostname) {
  const host = hostname.toLowerCase();
  if (host.includes("peninemate")) return "/peninemate";
  if (host.includes("tbh-price") || host.includes("api-tbh-price")) return "/tbh-price";
  if (host.includes("social-sentiment")) return "/social-sentiment";
  if (host.includes("pen-server")) return "/pen-server";
  return "/stevchrist";
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const originalHost = url.hostname;

    // 1. Coba fetch ke Origin VPS (Cloudflare Tunnel)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const originResponse = await fetch(request, {
        signal: controller.signal,
        cf: {
          cacheTtlByStatus: { "500-599": 0 },
        },
      });

      clearTimeout(timeoutId);

      if (!ORIGIN_DOWN_STATUS_CODES.has(originResponse.status)) {
        return originResponse;
      }
    } catch (err) {
      console.log(`[Failover] Origin down for ${originalHost}, serving Vercel maintenance...`, err);
    }

    // 2. Origin down -> Ambil halaman maintenance minimal sesuai domain
    try {
      const targetPath = getMaintenancePath(originalHost);
      const fallbackOrigin = env?.VERCEL_ORIGIN || VERCEL_FALLBACK_ORIGIN;
      const vercelTargetUrl = new URL(targetPath, fallbackOrigin);

      const modifiedHeaders = new Headers(request.headers);
      modifiedHeaders.set("X-Forwarded-Host", originalHost);

      const vercelResponse = await fetch(vercelTargetUrl.toString(), {
        method: "GET",
        headers: modifiedHeaders,
      });

      const responseHeaders = new Headers(vercelResponse.headers);
      responseHeaders.set("Retry-After", "86400"); // 24 Jam
      responseHeaders.set("X-Served-By", "Cloudflare-Worker-Failover");
      responseHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate");

      return new Response(vercelResponse.body, {
        status: 503,
        statusText: "Service Unavailable - Scheduled Maintenance",
        headers: responseHeaders,
      });
    } catch (fallbackError) {
      return new Response(
        `<!DOCTYPE html><html><body style="background:#05040a;color:#fff;text-align:center;padding:100px 20px;font-family:sans-serif;"><h1>Website under maintenance...</h1></body></html>`,
        {
          status: 503,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }
  },
};
