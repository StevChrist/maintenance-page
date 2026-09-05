import type { Metadata, Viewport } from "next";
import { Roboto, Oswald, Inter, Outfit } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website Under Scheduled Maintenance | Homelab Service",
  description: "Server is temporarily offline for scheduled 24-hour maintenance. Service will resume shortly.",
  robots: "noindex, nofollow",
  icons: {
    icon: "/assets/stevchrist-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#05040a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${roboto.variable} ${oswald.variable} ${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
