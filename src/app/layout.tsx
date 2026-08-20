import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "SGM Corporations supplies industrial valves, flanges, fasteners and carbon products for process, power, marine, mining and infrastructure projects.",
  keywords: ["industrial valves", "carbon products", "flanges and fasteners", "process industry", "SGM Corporations"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SGM Corporations | Industrial Supply, Made Dependable",
    description: "Industrial valves, carbon products and engineered supply for the systems that keep industry moving.",
    url: "https://www.sgmcorporations.com/", siteName: "SGM Corporations", type: "website",
    images: [{ url: "/sgm_ref/Industrial%20Valves%20%26%20Carbon%20Graphite%20Products_files/Coal_Ind_4tYq.jpg", width: 1200, height: 800, alt: "Industrial process facility" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
