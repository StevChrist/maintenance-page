import React from "react";
import type { Metadata } from "next";
import { CleanMaintenance } from "@/components/CleanMaintenance";

export const metadata: Metadata = {
  title: "Steven Immanuel C. Girsang | Under Maintenance",
  description: "Website under maintenance...",
};

export default function StevChristMaintenancePage() {
  return (
    <CleanMaintenance
      brandName="Steven Immanuel C. Girsang"
      logoSrc="/assets/stevchrist-logo.png"
      logoAlt="Steven Girsang Logo"
      logoSize={{ width: 84, height: 84 }}
      statusText="Website under maintenance..."
      subText="The server is offline for scheduled maintenance. We'll be back shortly."
      fontHeadingClass="font-roboto tracking-tight"
      fontBodyClass="font-roboto"
      bgStyle={{
        backgroundColor: "#05040a",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(64, 138, 113, 0.18) 0%, transparent 60%), #05040a",
      }}
      colors={{
        primary: "#408A71",
        glow: "rgba(64, 138, 113, 0.4)",
        text: "#ffffff",
        textMuted: "#94a3b8",
        border: "rgba(100, 181, 155, 0.25)",
      }}
    />
  );
}
