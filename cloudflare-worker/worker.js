/**
 * Cloudflare Worker Auto-Failover Script for Homelab
 * Target: stevchrist.site & *.stevchrist.site
 */

const VERCEL_FALLBACK_ORIGIN = "https://maintenance-page-two-gamma.vercel.app";
const ORIGIN_DOWN_STATUS_CODES = new Set([521, 522, 523, 530, 1033]);

// Mapping hostname ke rute halaman yang tepat
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
    const pathname = url.pathname;

    // Cek apakah request adalah aset statis (CSS, JS, Gambar, Font)
    const isStaticAsset =
      pathname.startsWith("/_next") ||
      pathname.startsWith("/assets") ||
      Boolean(pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|css|js|woff|woff2|ttf)$/i));

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

      // Jika server VPS masih hidup, teruskan langsung
      if (!ORIGIN_DOWN_STATUS_CODES.has(originResponse.status)) {
        return originResponse;
      }
    } catch (err) {
      // Tunnel VPS down / timeout
    }

    // 2. Server VPS down -> Ambil aset / halaman dari Vercel
    try {
      const fallbackOrigin = env?.VERCEL_ORIGIN || VERCEL_FALLBACK_ORIGIN;

      // Jika request adalah aset statis (CSS/JS/Gambar), ambil path aslinya dari Vercel
      // Jika request adalah halaman HTML, ambil halaman khusus sesuai domain (/stevchrist, /peninemate, dll)
      const targetPath = isStaticAsset ? pathname : getMaintenancePath(originalHost);
      const vercelTargetUrl = new URL(targetPath, fallbackOrigin);
      vercelTargetUrl.search = url.search;

      const modifiedHeaders = new Headers(request.headers);
      modifiedHeaders.set("Host", new URL(fallbackOrigin).hostname);
      modifiedHeaders.set("X-Forwarded-Host", originalHost);

      const vercelResponse = await fetch(vercelTargetUrl.toString(), {
        method: request.method,
        headers: modifiedHeaders,
      });

      // Jika ini adalah aset statis (CSS, gambar, font), kembalikan langsung dengan status 200
      if (isStaticAsset) {
        return vercelResponse;
      }

      // Untuk halaman HTML utama, kembalikan dengan status 503
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
