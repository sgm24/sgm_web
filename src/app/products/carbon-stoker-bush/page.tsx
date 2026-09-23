import type { Metadata } from "next";
import CarbonStokerBush from "../../../components/Products/CarbonStokerBush";

export const metadata: Metadata = {
  title: "Carbon Graphite Stoker Bush",
  description: "Copper impregnated carbon graphite stoker bush for travelling grate boilers, waste heat recovery boilers and demanding high-temperature applications.",
  keywords: [
    "stoker bush",
    "carbon stoker bush",
    "carbon graphite stoker bush",
    "copper impregnated stoker bush",
    "copper impregnated carbon bush",
    "travelling grate boiler stoker bush",
    "boiler stoker bush",
    "carbon bush bearing",
    "copper impregnated carbon graphite stoker bush",
    "Morganite bush",
    "carbon stoker bush supplier India",
    "sugar mill boiler stoker bush",
    "power plant stoker bush",
    "boiler carbon bush bearing",
  ],
  alternates: { canonical: "/products/carbon-stoker-bush" },
  openGraph: {
    title: "Carbon Graphite Stoker Bush for Boilers | SGM Corporations",
    description: "Copper impregnated carbon graphite stoker bushes for travelling grate and waste heat recovery boilers in sugar, power and process industries.",
    url: "https://www.sgmcorporations.com/products/carbon-stoker-bush",
    type: "website",
  },
};

export default function CarbonStokerBushPage() {
  return <CarbonStokerBush />;
}