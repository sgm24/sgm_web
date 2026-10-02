import type { Metadata } from "next";
import DoubleBlockBleedBall from "../../../components/Products/DoubleBlockBleedBall";

const description =
  "Double Block and Bleed Valves (DBB) for reliable process isolation, pressure relief and safe maintenance. Suitable for oil & gas, chemical, power and process industries.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Double Block & Bleed Ball Valve Supplier India | DBB Valves | SGM Corporations",
  },
  description,
  keywords: [
    "Double Block and Bleed Valves",
    "DBB Valve",
    "Double Block & Bleed Valve",
    "DBB Valves Supplier",
    "Industrial DBB Valve",
    "Process Isolation Valve",
    "Double Isolation Valve",
    "DBB Valve Supplier India",
  ],
  alternates: { canonical: "/products/double-block-bleed-valve" },
  openGraph: {
    title:
      "Double Block & Bleed Ball Valve Supplier India | DBB Valves | SGM Corporations",
    description,
    url: "https://www.sgmcorporations.com/products/double-block-bleed-valve",
    type: "website",
    images: [
      {
        url: "/products/block_bleed_valve/DBB%20Valve.png",
        alt: "Double block and bleed ball valve for safe process isolation",
      },
    ],
  },
};

export default function DoubleBlockBleedBallPage() {
  return <DoubleBlockBleedBall />;
}
