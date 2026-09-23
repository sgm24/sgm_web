import type { Metadata } from "next";
import CarbonBushBearing from "../../components/Products/CarbonBushBearing";

export const metadata: Metadata = {
  title: "Carbon Bush Bearing",
  description: "Self-lubricating carbon graphite bush bearings, carbon seals and custom bearing components for high-temperature chemical, petrochemical, power, fertilizer and process equipment in India and worldwide.",
  keywords: [
    "carbon bush bearing",
    "carbon graphite bearing",
    "carbon bushing",
    "self lubricating bearing",
    "mechanical carbon products",
    "carbon graphite bearing supplier India",
    "carbon bush bearing manufacturer",
    "high temperature carbon bearing",
    "carbon seal components",
    "chemical plant carbon bearing",
    "power plant carbon bearing",
  ],
  alternates: { canonical: "/carbon-bush-bearing" },
  openGraph: {
    title: "Carbon Graphite Bush Bearings & Seals | SGM Corporations",
    description: "Self-lubricating carbon graphite bearings and custom carbon components for high-temperature industrial applications.",
    url: "https://www.sgmcorporations.com/carbon-bush-bearing",
    type: "website",
  },
};

export default function CarbonBushBearingPage() {
  return <CarbonBushBearing />;
}