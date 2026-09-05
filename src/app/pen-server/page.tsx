import React from "react";
import type { Metadata } from "next";
import { CleanMaintenance } from "@/components/CleanMaintenance";

export const metadata: Metadata = {
  title: "Pen Platform | Under Maintenance",
  description: "Website under maintenance...",
};

export default function PenServerMaintenancePage() {
  return (
    <CleanMaintenance
      brandName="Pen Platform"
      logoSrc="/assets/pen-platform-logo.png"
      logoAlt="Pen Platform Logo"
      logoSize={{ width: 84, height: 84 }}
      statusText="Website under maintenance..."
      subText="Homelab cluster and observability platform is temporarily offline. We'll be back shortly."
      fontHeadingClass="font-outfit tracking-tight font-bold"
      fontBodyClass="font-inter"
      bgStyle={{
        backgroundColor: "#020617",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(6, 182, 212, 0.22) 0%, transparent 60%), #020617",
      }}
      colors={{
        primary: "#06b6d4",
        glow: "rgba(6, 182, 212, 0.5)",
        text: "#f1f5f9",
        textMuted: "#94a3b8",
        border: "rgba(6, 182, 212, 0.35)",
      }}
    />
  );
}
