import type { Metadata } from "next";
import GateValve from "../../../components/Products/GateValve";

const description =
  "SGM Corporations supplies industrial Gate Valves including wedge, parallel slide, rising stem and non-rising stem designs for power, sugar, steel, cement, oil & gas and process industries.";

export const metadata: Metadata = {
  title: {
    absolute: "Gate Valves | Industrial Gate Valve Supplier | SGM Corporations",
  },
  description,
  keywords: [
    "industrial gate valves",
    "gate valve supplier",
    "wedge gate valves",
    "parallel slide gate valves",
    "rising stem gate valves",
    "pressure seal gate valves",
    "industrial valve supplier",
  ],
  alternates: { canonical: "/products/gate-valve" },
  openGraph: {
    title: "Gate Valves | Industrial Gate Valve Supplier | SGM Corporations",
    description,
    url: "https://www.sgmcorporations.com/products/gate-valve",
    type: "website",
    images: [
      {
        url: "/products/gate_valve/Through-Conduit-Gate-Valve-3.jpg",
        alt: "Industrial through-conduit gate valve supplied by SGM Corporations",
      },
    ],
  },
};

export default function GateValvePage() {
  return <GateValve />;
}
