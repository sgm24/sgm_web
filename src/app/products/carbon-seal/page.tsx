import type { Metadata } from "next";
import CarbonSeal from "../../../components/Products/CarbonSeal";

export const metadata: Metadata = {
  title: "Carbon Seal Ring | Graphite Seal Ring for Pumps & Turbines",
  description: "High-quality carbon seal rings for pumps, turbines, mechanical seals and industrial rotating equipment in India and globally. Reliable sealing, low friction and wear resistance.",
  keywords: [
    "Carbon Seal Ring",
    "Carbon Seal Rings",
    "Graphite Seal Ring",
    "Carbon Mechanical Seal Ring",
    "Carbon Ring for Pump",
    "Carbon Ring for Turbine",
    "Carbon Seal for Mechanical Seal",
    "carbon seal ring supplier India",
    "graphite seal ring manufacturer",
    "mechanical carbon seal ring",
    "carbon seal rings globally",
    "carbon seal ring India",
  ],
  alternates: { canonical: "/products/carbon-seal" },
  openGraph: {
    title: "Carbon Seal Ring | SGM Corporations",
    description: "Carbon seal rings for pumps, turbines, mechanical seals and industrial rotating equipment across India and global markets.",
    url: "https://www.sgmcorporations.com/products/carbon-seal",
    type: "website",
  },
};

export default function CarbonSealPage() {
  return <CarbonSeal />;
}
