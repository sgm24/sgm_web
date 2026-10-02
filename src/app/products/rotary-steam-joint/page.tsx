import type { Metadata } from "next";
import RotarySteamJoint from "../../../components/Products/RotarySteamJoint";

export const metadata: Metadata = {
  title: "Carbon Rotary Steam Joint",
  description:
    "High-performance carbon rotary steam joints with carbon and graphite sealing components for reliable steam transfer, low friction and dependable operation in demanding conditions.",
  keywords: [
    "Carbon Seal Ring",
    "Carbon Seal Rings",
    "Graphite Seal Ring",
    "Carbon Mechanical Seal Ring",
    "Carbon Ring for Pump",
    "Carbon Ring for Turbine",
    "Carbon Seal for Mechanical Seal",
  ],
  alternates: { canonical: "/products/rotary-steam-joint" },
  openGraph: {
    title: "Carbon Rotary Steam Joint | SGM Corporations",
    description:
      "Reliable carbon rotary steam joints for rotating equipment, paper machines, textile machinery and industrial steam systems.",
    url: "https://www.sgmcorporations.com/products/rotary-steam-joint",
    type: "website",
  },
};

export default function RotarySteamJointPage() {
  return <RotarySteamJoint />;
}
