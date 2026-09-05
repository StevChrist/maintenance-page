"use client";

import React, { useState } from "react";
import { RefreshCw, Server, ShieldCheck, Zap } from "lucide-react";

interface StatusCardProps {
  systemLabel: string;
  primaryColor: string;
  primaryHover: string;
  primaryGlow: string;
  cardBg: string;
  cardBorder: string;
  textColor: string;
  textMuted: string;
}

export function StatusCard({
  systemLabel,
  primaryColor,
  primaryHover,
  primaryGlow,
  cardBg,
  cardBorder,
  textColor,
  textMuted,
}: StatusCardProps) {
  const [checking, setChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<string | null>(null);

  const handleCheckStatus = async () => {
    setChecking(true);
    setCheckResult(null);

    // Simulate probing the origin server with a timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      // Attempt to ping current location
      await fetch(window.location.href, {
        method: "HEAD",
        cache: "no-cache",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      // If we are still reaching the maintenance page, origin is still offline
      setCheckResult("Server fisik masih dalam pemeliharaan (Offline). Coba lagi nanti.");
    } catch {
      setCheckResult("Server origin belum merespons. Pemeliharaan masih berlangsung.");
    } finally {
      setChecking(false);
    }
  };

  return (
    <div
      className="p-6 rounded-2xl glass-panel border shadow-xl flex flex-col gap-5"
      style={{
        backgroundColor: cardBg,
        borderColor: cardBorder,
      }}
    >
      {/* Node status list */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          className="p-3.5 rounded-xl border flex items-center gap-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderColor: cardBorder,
          }}
        >
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-radar" />
            <span className="absolute w-2 h-2 rounded-full bg-red-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold" style={{ color: textColor }}>
              Home Lab VPS
            </span>
            <span className="text-[11px]" style={{ color: textMuted }}>
              Offline (24 Jam)
            </span>
          </div>
        </div>

        <div
          className="p-3.5 rounded-xl border flex items-center gap-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderColor: cardBorder,
          }}
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold" style={{ color: textColor }}>
              Cloudflare Edge
            </span>
            <span className="text-[11px]" style={{ color: textMuted }}>
              Auto Failover Aktif
            </span>
          </div>
        </div>

        <div
          className="p-3.5 rounded-xl border flex items-center gap-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderColor: cardBorder,
          }}
        >
          <Zap className="w-4 h-4 text-emerald-400" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold" style={{ color: textColor }}>
              Vercel Fallback
            </span>
            <span className="text-[11px]" style={{ color: textMuted }}>
              Serving Maintenance
            </span>
          </div>
        </div>
      </div>

      {/* Origin identifier */}
      <div
        className="flex items-center justify-between text-xs px-3.5 py-2 rounded-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          color: textMuted,
        }}
      >
        <span className="font-mono flex items-center gap-2">
          <Server className="w-3.5 h-3.5" />
          {systemLabel}
        </span>
        <span className="text-[11px] opacity-75">SSL 256-Bit Encrypted</span>
      </div>

      {/* Check status button */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleCheckStatus}
          disabled={checking}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 disabled:opacity-50"
          style={{
            backgroundColor: primaryColor,
            color: "#ffffff",
            boxShadow: `0 4px 15px -2px ${primaryGlow}`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = primaryHover;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = primaryColor;
          }}
        >
          <RefreshCw className={`w-4 h-4 ${checking ? "animate-spin" : ""}`} />
          {checking ? "Mengecek Server..." : "Cek Ulang Status Server"}
        </button>

        <button
          onClick={() => window.location.reload()}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors hover:bg-white/5 cursor-pointer"
          style={{
            borderColor: cardBorder,
            color: textColor,
          }}
        >
          Refresh Halaman
        </button>
      </div>

      {checkResult && (
        <div
          className="text-xs p-3 rounded-lg border text-center transition-all animate-fadeIn"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderColor: "rgba(239, 68, 68, 0.3)",
            color: "#fca5a5",
          }}
        >
          {checkResult}
        </div>
      )}
    </div>
  );
}
