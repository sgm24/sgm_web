import type { Metadata } from "next";
import AboutMain from "../../components/About_Section/AboutMain";

export const metadata: Metadata = {
  title: "About SGM Corporations",
  description: "Learn about SGM Corporations, a supplier of carbon products and industrial solutions for customers in India and worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SGM Corporations",
    description: "Learn about SGM Corporations Pune and its industrial carbon products and supply capabilities.",
    url: "https://www.sgmcorporations.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutMain />;
}