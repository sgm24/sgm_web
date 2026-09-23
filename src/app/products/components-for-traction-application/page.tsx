import type { Metadata } from "next";
import ComponentsForTractionApplication from "../../../components/Products/ComponentsForTractionApplication";

export const metadata: Metadata = {
  title: "ALCO & DMW Locomotive Carbon Brush Holders",
  description: "Carbon brush holders for ALCO and DMW locomotives, designed for proper brush positioning and reliable current collection in traction motors and locomotive electrical equipment in India and global rail applications.",
  keywords: ["ALCO locomotive carbon brush holder", "DMW locomotive carbon brush holder", "locomotive carbon brush holder", "traction motor brush holder", "railway carbon brush holder India", "locomotive carbon products supplier", "ALCO DMW replacement brush holder"],
  alternates: { canonical: "/products/components-for-traction-application" },
  openGraph: {
    title: "ALCO & DMW Locomotive Carbon Brush Holders | SGM Corporations",
    description: "Application-matched carbon brush holders for ALCO and DMW locomotives, traction motors and railway maintenance requirements.",
    url: "https://www.sgmcorporations.com/products/components-for-traction-application",
    type: "website",
  },
};

export default function ComponentsForTractionApplicationPage() {
  return <ComponentsForTractionApplication />;
}