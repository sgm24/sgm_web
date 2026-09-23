import type { Metadata } from "next";
import CarbonBrush from "../../../components/Products/CarbonBrush";

export const metadata: Metadata = {
  title: "Industrial Carbon Brushes for Motors & Generators",
  description: "Industrial carbon brushes in natural graphite, electrographite, metal-graphite, silver-graphite and resin-bonded grades for AC/DC motors, generators and rotating equipment in India and worldwide.",
  keywords: ["industrial carbon brushes", "carbon brush supplier India", "motor carbon brushes", "generator carbon brushes", "AC DC motor brushes", "electrographite carbon brushes", "metal graphite brushes", "sugar mill carbon brushes", "steel cement mining carbon brushes"],
  alternates: { canonical: "/products/carbon-brush" },
  openGraph: {
    title: "Industrial Carbon Brushes for Motors & Generators | SGM Corporations",
    description: "Carbon brush grades for reliable current collection in motors, generators and rotating electrical equipment across industrial applications.",
    url: "https://www.sgmcorporations.com/products/carbon-brush",
    type: "website",
  },
};

export default function CarbonBrushPage() {
  return <CarbonBrush />;
}