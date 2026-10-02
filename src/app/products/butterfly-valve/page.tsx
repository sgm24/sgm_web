import type { Metadata } from "next";
import ButterflyValve from "../../../components/Products/ButterflyValve";

export const metadata: Metadata = {
  title: "Industrial Butterfly Valves",
  description:
    "Compact, reliable industrial butterfly valves for isolation and flow control across water treatment, power, steel, chemical and process industries.",
  keywords: [
    "industrial butterfly valve",
    "butterfly valves",
    "wafer butterfly valve",
    "lugged butterfly valve",
    "flanged butterfly valve",
    "industrial valve supplier",
  ],
  alternates: { canonical: "/products/butterfly-valve" },
  openGraph: {
    title: "Industrial Butterfly Valves | SGM Corporations",
    description:
      "Industrial butterfly valves in a range of sizes, pressure ratings and materials for dependable flow control.",
    url: "https://www.sgmcorporations.com/products/butterfly-valve",
    type: "website",
    images: [
      {
        url: "/products/butterfly/B8.jpg",
        alt: "Industrial butterfly valves supplied by SGM Corporations",
      },
    ],
  },
};

export default function ButterflyValvePage() {
  return <ButterflyValve />;
}
