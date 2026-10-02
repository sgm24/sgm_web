import type { Metadata } from "next";
import GlandPackingRing from "../../../components/Products/GlandPackingRing";

export const metadata: Metadata = {
  title: "Gland Packing Ring | Carbon Segment Rings",
  description:
    "Precision carbon segment and packing rings for turbines, pumps, compressors and mechanical seals. Wear-resistant carbon and graphite rings for high-temperature industrial equipment.",
  keywords: [
    "gland packing ring",
    "carbon packing ring",
    "carbon segment ring",
    "carbon segment rings",
    "segmented ring",
    "segmented rings",
    "graphite packing ring",
    "carbon gland packing",
    "carbon sealing ring for turbine",
    "carbon packing ring for pump",
    "industrial carbon sealing rings",
    "carbon graphite ring supplier India",
  ],
  alternates: { canonical: "/products/gland-packing-ring" },
  openGraph: {
    title: "Gland Packing Ring | Carbon Segment Rings | SGM Corporations",
    description:
      "Carbon and graphite segment packing rings for reliable sealing in turbines, pumps, compressors and other high-temperature industrial applications.",
    url: "https://www.sgmcorporations.com/products/gland-packing-ring",
    type: "website",
    images: [
      {
        url: "/products/gland_packing/Segment%20ring.png",
        alt: "Carbon segment packing ring for industrial sealing",
      },
    ],
  },
};

export default function GlandPackingRingPage() {
  return <GlandPackingRing />;
}
