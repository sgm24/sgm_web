import type { Metadata } from "next";
import AboutMain from "../../components/About_Section/AboutMain";

export const metadata: Metadata = {
  title: "About SGM Corporations",
  description: "Learn about SGM Corporations, a supplier of carbon products and industrial solutions for customers in India and worldwide.",
  keywords: [
    "SGM Corporations",
    "industrial products supplier",
    "industrial solutions India",
    "industrial valves supplier",
    "electrical industrial products",
    "mechanical industrial products",
    "carbon products supplier",
    "carbon brush holder supplier",
    "industrial valves India",
    "sugar industry products",
    "power industry products",
    "steel industry products",
    "cement industry products",
    "process industry products",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SGM Corporations",
    description: "Learn about SGM Corporations Pune and its industrial carbon products and supply capabilities to Sugar, Power, Steel, Cement and other Process Industries",
    url: "https://www.sgmcorporations.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutMain />;
}