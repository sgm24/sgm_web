import type { Metadata } from "next";
import CarbonBrushHolder from "../../../components/Products/CarbonBrushHolder";

export const metadata: Metadata = {
  title: "Carbon Brush Holders",
  description: "Brass and sheet carbon brush holders with constant pressure spring assemblies for motors, generators, traction equipment and industries including sugar, steel, mining and power generation in India and worldwide.",
  keywords: ["carbon brush holders India", "industrial carbon brush holder", "brass carbon brush holder", "constant pressure brush holder", "motor brush holder", "generator brush holder", "sugar mill brush holder", "traction motor brush holder", "carbon brush holder supplier"],
  alternates: { canonical: "/products/carbon-brush-holder" },
  openGraph: {
    title: "Industrial Carbon Brush Holders | SGM Corporations",
    description: "Application-matched brass carbon brush holders for motors, generators and traction equipment across demanding industries.",
    url: "https://www.sgmcorporations.com/products/carbon-brush-holder",
    type: "website",
  },
};

export default function CarbonBrushHolderPage() {
  return <CarbonBrushHolder />;
}