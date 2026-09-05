import React from "react";
import type { Metadata } from "next";
import { CleanMaintenance } from "@/components/CleanMaintenance";

export const metadata: Metadata = {
  title: "TBH Price Tracker | Under Maintenance",
  description: "Website under maintenance...",
};

export default function TbhPriceMaintenancePage() {
  return (
    <CleanMaintenance
      brandName="TBH Price Tracker"
      logoSrc="/assets/tbh-logo.png"
      logoAlt="TBH Price Tracker Logo"
      logoSize={{ width: 88, height: 88 }}
      statusText="Website under maintenance..."
      subText="Steam Market price tracking engine is temporarily offline. We'll be back shortly."
      fontHeadingClass="font-oswald uppercase tracking-wider"
      fontBodyClass="font-inter"
      bgStyle={{
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(37, 126, 140, 0.22) 0%, transparent 60%), #09090b",
      }}
      colors={{
        primary: "#257e8c",
        glow: "rgba(37, 126, 140, 0.45)",
        text: "#fafafa",
        textMuted: "#a1a1aa",
        border: "rgba(37, 126, 140, 0.35)",
      }}
    />
  );
}
