import React from "react";
import type { Metadata } from "next";
import { CleanMaintenance } from "@/components/CleanMaintenance";

export const metadata: Metadata = {
  title: "PenineMate | Under Maintenance",
  description: "Website under maintenance...",
};

export default function PenineMateMaintenancePage() {
  return (
    <CleanMaintenance
      brandName="PenineMate"
      logoSrc="/assets/peninemate-logo.png"
      logoAlt="PenineMate Logo"
      logoSize={{ width: 88, height: 88 }}
      statusText="Website under maintenance..."
      subText="PenineMate AI Movie Q&A is temporarily offline. We'll be back shortly."
      fontHeadingClass="font-oswald uppercase tracking-wider"
      fontBodyClass="font-inter"
      bgStyle={{
        backgroundColor: "#463F3A",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(224, 175, 160, 0.2) 0%, transparent 60%), #463F3A",
      }}
      colors={{
        primary: "#E0AFA0",
        glow: "rgba(224, 175, 160, 0.4)",
        text: "#F4F3EE",
        textMuted: "#BCB8B1",
        border: "rgba(224, 175, 160, 0.3)",
      }}
    />
  );
}
