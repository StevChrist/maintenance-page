import React from "react";
import { headers } from "next/headers";
import Link from "next/link";
import StevChristMaintenancePage from "./stevchrist/page";
import PenineMateMaintenancePage from "./peninemate/page";
import TbhPriceMaintenancePage from "./tbh-price/page";
import SocialSentimentMaintenancePage from "./social-sentiment/page";
import PenServerMaintenancePage from "./pen-server/page";

interface RootPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RootPage({ searchParams }: RootPageProps) {
  const headerList = await headers();
  const resolvedParams = await searchParams;

  const host = (headerList.get("x-forwarded-host") || headerList.get("host") || "").toLowerCase();
  const preview = typeof resolvedParams.preview === "string" ? resolvedParams.preview.toLowerCase() : "";

  // 1. Check for explicit domain or preview
  if (host.includes("peninemate") || preview === "peninemate") {
    return <PenineMateMaintenancePage />;
  }
  if (host.includes("tbh-price") || host.includes("api-tbh-price") || preview === "tbh-price") {
    return <TbhPriceMaintenancePage />;
  }
  if (host.includes("social-sentiment") || preview === "social-sentiment") {
    return <SocialSentimentMaintenancePage />;
  }
  if (host.includes("pen-server") || preview === "pen-server") {
    return <PenServerMaintenancePage />;
  }
  if (host.includes("stevchrist.site") || preview === "stevchrist") {
    return <StevChristMaintenancePage />;
  }

  // 2. If accessed directly on localhost root (dev mode navigation)
  return (
    <main className="min-h-screen bg-[#05040a] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
        <h1 className="text-xl font-bold mb-2">Homelab Maintenance Pages</h1>
        <p className="text-xs text-slate-400 mb-6">
          Setiap website memiliki 1 halaman maintenance khusus dengan desain masing-masing. Silakan klik untuk melihat:
        </p>

        <div className="flex flex-col gap-3 text-sm">
          <Link
            href="/stevchrist"
            className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-all font-medium flex items-center justify-between"
          >
            <span>1. stevchrist.site</span>
            <span className="text-xs opacity-75">Dark Emerald &rarr;</span>
          </Link>

          <Link
            href="/peninemate"
            className="p-3.5 rounded-xl bg-[#E0AFA0]/15 border border-[#E0AFA0]/30 text-[#E0AFA0] hover:bg-[#E0AFA0]/25 transition-all font-medium flex items-center justify-between"
          >
            <span>2. peninemate.stevchrist.site</span>
            <span className="text-xs opacity-75">Warm Taupe &rarr;</span>
          </Link>

          <Link
            href="/tbh-price"
            className="p-3.5 rounded-xl bg-[#257e8c]/15 border border-[#257e8c]/30 text-cyan-300 hover:bg-[#257e8c]/25 transition-all font-medium flex items-center justify-between"
          >
            <span>3. tbh-price.stevchrist.site</span>
            <span className="text-xs opacity-75">Dark Slate Cyan &rarr;</span>
          </Link>

          <Link
            href="/social-sentiment"
            className="p-3.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-300 hover:bg-blue-500/25 transition-all font-medium flex items-center justify-between"
          >
            <span>4. social-sentiment.stevchrist.site</span>
            <span className="text-xs opacity-75">Neon Navy Blue &rarr;</span>
          </Link>

          <Link
            href="/pen-server"
            className="p-3.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/25 transition-all font-medium flex items-center justify-between"
          >
            <span>5. pen-server.stevchrist.site</span>
            <span className="text-xs opacity-75">Carbon Studio &rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
