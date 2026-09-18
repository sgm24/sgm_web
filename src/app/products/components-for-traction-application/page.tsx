import type { Metadata } from "next";
import ComponentsForTractionApplication from "../../../components/Products/ComponentsForTractionApplication";

export const metadata: Metadata = {
  title: "ALCO & DMW Locomotive Carbon Brush Holders",
  description: "Carbon brush holders for ALCO and DMW locomotives, designed for proper brush positioning, reliable current collection and dependable traction applications.",
  keywords: ["ALCO locomotive carbon brush holder", "DMW locomotive carbon brush holder", "locomotive carbon brush holder"],
};

export default function ComponentsForTractionApplicationPage() {
  return <ComponentsForTractionApplication />;
}