import React from "react";
import Image from "next/image";

export interface CleanMaintenanceProps {
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  logoSize?: { width: number; height: number };
  statusText?: string;
  subText?: string;
  fontHeadingClass: string;
  fontBodyClass: string;
  bgStyle: {
    backgroundColor: string;
    backgroundImage?: string;
  };
  colors: {
    primary: string;
    glow: string;
    text: string;
    textMuted: string;
    border: string;
  };
}

export function CleanMaintenance({
  brandName,
  logoSrc,
  logoAlt,
  logoSize = { width: 90, height: 90 },
  statusText = "Website under maintenance...",
  subText = "We'll be back shortly.",
  fontHeadingClass,
  fontBodyClass,
  bgStyle,
  colors,
}: CleanMaintenanceProps) {
  return (
    <main
      className={`relative min-h-screen w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden ${fontBodyClass}`}
      style={{
        backgroundColor: bgStyle.backgroundColor,
        backgroundImage: bgStyle.backgroundImage,
        color: colors.text,
      }}
    >
      {/* Subtle ambient light glow */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          backgroundColor: colors.primary,
          boxShadow: `0 0 160px ${colors.glow}`,
        }}
      />

      {/* Main minimal container */}
      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
        {/* Logo with subtle float animation */}
        <div
          className="mb-8 p-4 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-105"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderColor: colors.border,
            boxShadow: `0 20px 40px -15px ${colors.glow}`,
          }}
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoSize.width}
            height={logoSize.height}
            className="object-contain"
            priority
          />
        </div>

        {/* Brand name */}
        <h2
          className={`text-sm sm:text-base font-medium tracking-widest uppercase mb-3 opacity-80 ${fontHeadingClass}`}
          style={{ color: colors.textMuted }}
        >
          {brandName}
        </h2>

        {/* Maintenance text */}
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight ${fontHeadingClass}`}
          style={{ color: colors.text }}
        >
          {statusText}
        </h1>

        {/* Subtext */}
        <p
          className="text-sm sm:text-base max-w-md font-normal leading-relaxed opacity-70"
          style={{ color: colors.textMuted }}
        >
          {subText}
        </p>

        {/* Elegant glowing status pulse */}
        <div className="mt-10 flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-md"
          style={{
            borderColor: colors.border,
            backgroundColor: "rgba(255, 255, 255, 0.02)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: colors.primary }}
          />
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: colors.primary }}
          >
            Offline for Maintenance
          </span>
        </div>
      </div>
    </main>
  );
}
