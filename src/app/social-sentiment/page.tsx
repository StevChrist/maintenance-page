import React from "react";
import type { Metadata } from "next";
import { CleanMaintenance } from "@/components/CleanMaintenance";

export const metadata: Metadata = {
  title: "SocialSentiment | Under Maintenance",
  description: "Website under maintenance...",
};

export default function SocialSentimentMaintenancePage() {
  return (
    <CleanMaintenance
      brandName="SocialSentiment"
      logoSrc="/assets/social-sentiment-logo.png"
      logoAlt="SocialSentiment Logo"
      logoSize={{ width: 88, height: 88 }}
      statusText="Website under maintenance..."
      subText="Social media sentiment analytics platform is temporarily offline. We'll be back shortly."
      fontHeadingClass="font-oswald tracking-wide font-bold"
      fontBodyClass="font-inter"
      bgStyle={{
        backgroundColor: "#0B1628",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(4, 116, 196, 0.25) 0%, transparent 60%), #0B1628",
      }}
      colors={{
        primary: "#0474C4",
        glow: "rgba(72, 149, 239, 0.5)",
        text: "#F5F5F5",
        textMuted: "#94a3b8",
        border: "rgba(72, 149, 239, 0.35)",
      }}
    />
  );
}
