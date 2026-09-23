import type { Metadata } from "next";
import CarbonBushBearing from "../../components/Products/CarbonBushBearing";

export const metadata: Metadata = {
  title: "Carbon Bush Bearing",
  description: "Self-lubricating carbon graphite bush bearings for high-temperature, chemical and demanding industrial applications.",
  keywords: [
    "carbon bush bearing",
    "carbon graphite bearing",
    "carbon bushing",
    "self lubricating bearing",
    "mechanical carbon products",
  ],
};

export default function CarbonBushBearingPage() {
  return <CarbonBushBearing />;
}