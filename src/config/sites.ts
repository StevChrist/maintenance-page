export interface SiteTheme {
  name: string;
  badge: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  logoSize?: { width: number; height: number };
  systemLabel: string;
  fontClass: {
    heading: string;
    body: string;
  };
  colors: {
    bg: string;
    bgGradient: string;
    cardBg: string;
    cardBorder: string;
    primary: string;
    primaryHover: string;
    primaryGlow: string;
    text: string;
    textMuted: string;
    accentBadgeBg: string;
    accentBadgeText: string;
    progressFill: string;
  };
  message: {
    title: string;
    description: string;
    estimatedDowntime: string;
  };
}

export const SITES: Record<string, SiteTheme> = {
  stevchrist: {
    name: "Steven Immanuel C. Girsang",
    badge: "Portfolio & Machine Learning Lab",
    tagline: "Official personal portfolio and data engineering platform.",
    logo: "/assets/stevchrist-logo.png",
    logoAlt: "Steven Girsang Logo",
    logoSize: { width: 44, height: 44 },
    systemLabel: "Host Origin: stevchrist.site",
    fontClass: {
      heading: "font-roboto tracking-tight font-bold",
      body: "font-roboto",
    },
    colors: {
      bg: "#05040a",
      bgGradient:
        "radial-gradient(circle at 20% 15%, rgba(64, 138, 113, 0.22) 0%, transparent 45%), radial-gradient(circle at 80% 30%, rgba(100, 181, 155, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(10, 20, 16, 0.9) 0%, transparent 60%)",
      cardBg: "rgba(14, 28, 22, 0.75)",
      cardBorder: "rgba(100, 181, 155, 0.3)",
      primary: "#408A71",
      primaryHover: "#64b59b",
      primaryGlow: "rgba(64, 138, 113, 0.4)",
      text: "#ffffff",
      textMuted: "#94a3b8",
      accentBadgeBg: "rgba(64, 138, 113, 0.2)",
      accentBadgeText: "#64b59b",
      progressFill: "linear-gradient(90deg, #2d6351 0%, #408A71 50%, #64b59b 100%)",
    },
    message: {
      title: "Server Offline for Scheduled Maintenance",
      description:
        "Home Lab VPS sedang dalam masa pemeliharaan terencana (~24 jam offline). Seluruh sistem, model ML, dan layanan portfolio akan aktif kembali segera setelah transit selesai.",
      estimatedDowntime: "24 Jam",
    },
  },

  peninemate: {
    name: "PenineMate",
    badge: "AI Movie Q&A & Cinema Intelligence",
    tagline: "Ask anything about movies powered by AI.",
    logo: "/assets/peninemate-logo.png",
    logoAlt: "PenineMate Logo",
    logoSize: { width: 48, height: 48 },
    systemLabel: "Host Origin: peninemate.stevchrist.site",
    fontClass: {
      heading: "font-oswald uppercase tracking-wider font-semibold",
      body: "font-inter",
    },
    colors: {
      bg: "#2b2623",
      bgGradient:
        "radial-gradient(circle at 15% 15%, rgba(224, 175, 160, 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(188, 184, 177, 0.12) 0%, transparent 50%), #2b2623",
      cardBg: "rgba(70, 63, 58, 0.85)",
      cardBorder: "rgba(224, 175, 160, 0.35)",
      primary: "#E0AFA0",
      primaryHover: "#f0c6ba",
      primaryGlow: "rgba(224, 175, 160, 0.35)",
      text: "#F4F3EE",
      textMuted: "#BCB8B1",
      accentBadgeBg: "rgba(224, 175, 160, 0.18)",
      accentBadgeText: "#E0AFA0",
      progressFill: "linear-gradient(90deg, #463F3A 0%, #BCB8B1 50%, #E0AFA0 100%)",
    },
    message: {
      title: "PenineMate AI Sedang Istirahat",
      description:
        "Server komputasi AI dan database movie backend saat ini sedang offline untuk pemeliharaan berkala selama 24 jam. Kami akan segera kembali online!",
      estimatedDowntime: "24 Jam",
    },
  },

  "tbh-price": {
    name: "TBH Price Tracker",
    badge: "Task Bar Hero Market Engine",
    tagline: "Live Steam Market inventory price tracker and history.",
    logo: "/assets/tbh-logo.png",
    logoAlt: "TBH Price Logo",
    logoSize: { width: 44, height: 44 },
    systemLabel: "Host Origin: tbh-price.stevchrist.site",
    fontClass: {
      heading: "font-oswald tracking-wide font-bold uppercase",
      body: "font-inter",
    },
    colors: {
      bg: "#09090b",
      bgGradient:
        "radial-gradient(circle at 20% 20%, rgba(37, 126, 140, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184, 80, 66, 0.18) 0%, transparent 50%), #09090b",
      cardBg: "rgba(24, 24, 27, 0.85)",
      cardBorder: "rgba(37, 126, 140, 0.4)",
      primary: "#257e8c",
      primaryHover: "#319aa9",
      primaryGlow: "rgba(37, 126, 140, 0.45)",
      text: "#fafafa",
      textMuted: "#a1a1aa",
      accentBadgeBg: "rgba(37, 126, 140, 0.2)",
      accentBadgeText: "#4ecdc4",
      progressFill: "linear-gradient(90deg, #b85042 0%, #257e8c 100%)",
    },
    message: {
      title: "Steam Price Polling Diistirahatkan",
      description:
        "Server crawler harga Steam Market dan background worker diistirahatkan sementara karena pemadaman berkala VPS (24 jam offline). Data inventory Anda tetap aman.",
      estimatedDowntime: "24 Jam",
    },
  },

  "social-sentiment": {
    name: "SocialSentiment",
    badge: "NLP Analytics & Sentiment Intelligence",
    tagline: "Analyze and visualize real-time social media sentiment.",
    logo: "/assets/social-sentiment-logo.png",
    logoAlt: "Social Sentiment Logo",
    logoSize: { width: 44, height: 44 },
    systemLabel: "Host Origin: social-sentiment.stevchrist.site",
    fontClass: {
      heading: "font-oswald tracking-wide font-bold",
      body: "font-inter",
    },
    colors: {
      bg: "#0B1628",
      bgGradient:
        "radial-gradient(1200px 600px at 20% -10%, rgba(8, 42, 78, 0.7), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(4, 116, 196, 0.35), transparent 55%), #0B1628",
      cardBg: "rgba(17, 34, 64, 0.85)",
      cardBorder: "rgba(72, 149, 239, 0.35)",
      primary: "#0474C4",
      primaryHover: "#4895EF",
      primaryGlow: "rgba(72, 149, 239, 0.4)",
      text: "#F5F5F5",
      textMuted: "#94a3b8",
      accentBadgeBg: "rgba(4, 116, 196, 0.25)",
      accentBadgeText: "#4895EF",
      progressFill: "linear-gradient(135deg, #0474C4 0%, #4895EF 50%, #7209B7 100%)",
    },
    message: {
      title: "Sentiment Model & Pipeline Offline",
      description:
        "Pipeline pengumpulan data sentimen dan model klasifikasi NLP sedang dalam masa offline berkala VPS (~24 jam). Dashboard analitik akan segera aktif kembali.",
      estimatedDowntime: "24 Jam",
    },
  },

  "pen-server": {
    name: "Pen Platform",
    badge: "Carbon Studio — Homelab Telemetry",
    tagline: "Personal server observability, bot manager & monitoring.",
    logo: "/assets/pen-platform-logo.png",
    logoAlt: "Pen Platform Logo",
    logoSize: { width: 42, height: 42 },
    systemLabel: "Host Origin: pen-server.stevchrist.site",
    fontClass: {
      heading: "font-outfit tracking-tight font-bold",
      body: "font-inter",
    },
    colors: {
      bg: "#020617",
      bgGradient:
        "radial-gradient(circle at 15% 15%, rgba(6, 182, 212, 0.2) 0%, transparent 45%), radial-gradient(circle at 85% 35%, rgba(244, 63, 94, 0.12) 0%, transparent 45%), #020617",
      cardBg: "rgba(15, 23, 42, 0.85)",
      cardBorder: "rgba(6, 182, 212, 0.35)",
      primary: "#06b6d4",
      primaryHover: "#22d3ee",
      primaryGlow: "rgba(6, 182, 212, 0.45)",
      text: "#f1f5f9",
      textMuted: "#94a3b8",
      accentBadgeBg: "rgba(6, 182, 212, 0.15)",
      accentBadgeText: "#22d3ee",
      progressFill: "linear-gradient(135deg, #06b6d4 0%, #0891b2 70%, #f43f5e 100%)",
    },
    message: {
      title: "Physical Server Nodes Offline",
      description:
        "Server fisik (Ubuntu 24.04, pen-server) dimatikan sementara selama perjalanan penerbangan (24 jam). Monitoring agent dan bot Telegram akan otomatis resume saat boot.",
      estimatedDowntime: "24 Jam",
    },
  },

  default: {
    name: "StevChrist Network",
    badge: "Homelab Infrastructure",
    tagline: "High-performance self-hosted service cluster.",
    logo: "/assets/stevchrist-logo.png",
    logoAlt: "StevChrist Logo",
    logoSize: { width: 44, height: 44 },
    systemLabel: "Host Origin: *.stevchrist.site",
    fontClass: {
      heading: "font-inter font-bold",
      body: "font-inter",
    },
    colors: {
      bg: "#090d16",
      bgGradient:
        "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), #090d16",
      cardBg: "rgba(15, 23, 42, 0.8)",
      cardBorder: "rgba(59, 130, 246, 0.3)",
      primary: "#3b82f6",
      primaryHover: "#60a5fa",
      primaryGlow: "rgba(59, 130, 246, 0.4)",
      text: "#f8fafc",
      textMuted: "#94a3b8",
      accentBadgeBg: "rgba(59, 130, 246, 0.2)",
      accentBadgeText: "#60a5fa",
      progressFill: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
    },
    message: {
      title: "Website Under Scheduled Maintenance",
      description:
        "Layanan ini sedang tidak dapat diakses untuk sementara waktu karena pemeliharaan server fisik (estimasi 24 jam). Kami akan segera kembali!",
      estimatedDowntime: "24 Jam",
    },
  },
};

export function resolveSite(hostnameOrKey?: string | null): { key: string; site: SiteTheme } {
  if (!hostnameOrKey) {
    return { key: "stevchrist", site: SITES.stevchrist };
  }

  const clean = hostnameOrKey.toLowerCase().trim().replace(/:\d+$/, "");

  // Match by key directly (for query preview, e.g. ?preview=peninemate)
  if (SITES[clean]) {
    return { key: clean, site: SITES[clean] };
  }

  // Match by domain hostname
  if (clean === "stevchrist.site" || clean === "www.stevchrist.site") {
    return { key: "stevchrist", site: SITES.stevchrist };
  }
  if (clean.includes("peninemate")) {
    return { key: "peninemate", site: SITES.peninemate };
  }
  if (clean.includes("tbh-price") || clean.includes("api-tbh-price")) {
    return { key: "tbh-price", site: SITES["tbh-price"] };
  }
  if (clean.includes("social-sentiment")) {
    return { key: "social-sentiment", site: SITES["social-sentiment"] };
  }
  if (clean.includes("pen-server")) {
    return { key: "pen-server", site: SITES["pen-server"] };
  }

  return { key: "default", site: SITES.default };
}
