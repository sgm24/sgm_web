import type { Metadata } from "next";
import GlobeValve from "../../../components/Products/GlobeValve";

const description =
  "Industrial Globe Valves for precise flow regulation, throttling and shut-off. Suitable for steam, power, sugar, steel, cement, chemical and process industries.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Globe Valves | Industrial Globe Valve Supplier in India | SGM Corporations",
  },
  description,
  keywords: [
    "Globe Valve",
    "Industrial Globe Valve",
    "Globe Valve Supplier India",
    "Globe Valves India",
    "Steam Globe Valve",
    "Industrial Flow Control Valve",
    "Globe Valve for Power Plant",
    "Globe Valve for Sugar Industry",
  ],
  alternates: { canonical: "/products/globe-valve" },
  openGraph: {
    title:
      "Globe Valves | Industrial Globe Valve Supplier in India | SGM Corporations",
    description,
    url: "https://www.sgmcorporations.com/products/globe-valve",
    type: "website",
    images: [
      {
        url: "/products/globe_valve/globe-valve-2.webp",
        alt: "Industrial globe valve supplied by SGM Corporations",
      },
    ],
  },
};

export default function GlobeValvePage() {
  return <GlobeValve />;
}
