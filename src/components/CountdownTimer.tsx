"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  primaryColor: string;
  primaryGlow: string;
  cardBg: string;
  cardBorder: string;
  textColor: string;
  textMuted: string;
}

export function CountdownTimer({
  primaryColor,
  primaryGlow,
  cardBg,
  cardBorder,
  textColor,
  textMuted,
}: CountdownTimerProps) {
  // Default to 24 hours countdown
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Use fixed 24h target from first visit or current session
    const STORAGE_KEY = "maintenance_target_epoch";
    let target = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!target || parseInt(target, 10) < now) {
      const newTarget = now + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, newTarget.toString());
      target = newTarget.toString();
    }

    const targetTime = parseInt(target, 10);

    const updateTimer = () => {
      const diff = Math.max(0, targetTime - Date.now());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (!mounted) {
    return (
      <div
        className="p-6 rounded-2xl glass-panel border animate-pulse flex items-center justify-center min-h-[140px]"
        style={{ backgroundColor: cardBg, borderColor: cardBorder }}
      >
        <span style={{ color: textMuted }} className="text-sm font-medium">
          Menghitung estimasi waktu online...
        </span>
      </div>
    );
  }

  return (
    <div
      className="p-6 rounded-2xl glass-panel border shadow-2xl transition-all duration-300"
      style={{
        backgroundColor: cardBg,
        borderColor: cardBorder,
        boxShadow: `0 10px 30px -10px ${primaryGlow}`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <Clock className="w-4 h-4" style={{ color: primaryColor }} />
          <span style={{ color: textMuted }}>Perkiraan Kembali Online</span>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full font-semibold"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.15)",
            color: "#f87171",
            border: "1px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          Offline Window: 24 Jam
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div
          className="rounded-xl p-3 border flex flex-col items-center justify-center transition-transform hover:scale-105"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            borderColor: cardBorder,
          }}
        >
          <span
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: textColor }}
          >
            {pad(timeLeft.hours)}
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-widest mt-1"
            style={{ color: textMuted }}
          >
            Jam
          </span>
        </div>

        <div
          className="rounded-xl p-3 border flex flex-col items-center justify-center transition-transform hover:scale-105"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            borderColor: cardBorder,
          }}
        >
          <span
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: textColor }}
          >
            {pad(timeLeft.minutes)}
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-widest mt-1"
            style={{ color: textMuted }}
          >
            Menit
          </span>
        </div>

        <div
          className="rounded-xl p-3 border flex flex-col items-center justify-center transition-transform hover:scale-105"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            borderColor: cardBorder,
          }}
        >
          <span
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono"
            style={{ color: primaryColor }}
          >
            {pad(timeLeft.seconds)}
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-widest mt-1"
            style={{ color: textMuted }}
          >
            Detik
          </span>
        </div>
      </div>
    </div>
  );
}
