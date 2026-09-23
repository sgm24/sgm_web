import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sgmcorporations.com"),
  title: { default: "SGM Corporations | Industrial Valves & Carbon Products", template: "%s | SGM Corporations" },
  description: "SGM Corporations supplies carbon brushes, brush holders, carbon graphite bearings, stoker bushes, industrial valves and other carbon products from India to customers worldwide across sugar, power, steel, cement, mining and process industries.",
  keywords: ["SGM Corporations", "carbon products India", "carbon products supplier", "carbon brushes", "carbon brush holders", "carbon graphite bearings", "carbon stoker bushes", "industrial valves", "sugar industry", "power generation", "steel industry", "mining industry", "global industrial supplier", "carbon brush pune"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SGM Corporations | Industrial Supply, Made Dependable",
    description: "Carbon products and industrial valves supplied from India to sugar, power, steel, cement, mining and process industries worldwide.",
    url: "https://www.sgmcorporations.com/", siteName: "SGM Corporations", type: "website",
    images: [{ url: "/photos/BE_MastSm_Navy_Marine_Offshore.jpg", width: 1200, height: 800, alt: "Industrial process facility" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}