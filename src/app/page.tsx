import type { Metadata } from "next";
import MainPage from "../components/MainPage";

export const metadata: Metadata = {
  title: "Carbon Products & Industrial Valves Supplier in India",
  description: "SGM Corporations supplies electrical and mechanical carbon products, carbon brushes, brush holders, carbon graphite bearings, stoker bushes and industrial valves from India to customers globally.",
  keywords: [
    "carbon products supplier India",
    "industrial carbon products",
    "carbon brushes supplier",
    "carbon brush holders India",
    "carbon graphite bearings",
    "carbon stoker bushes",
    "industrial valves supplier India",
    "sugar industry carbon products",
    "power plant carbon products",
    "steel cement mining industries",
    "global industrial supply",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Carbon Products & Industrial Valves Supplier in India | SGM Corporations",
    description: "Electrical and mechanical carbon products and industrial valves for sugar, power, steel, cement, mining and process industries in India and worldwide.",
    url: "https://www.sgmcorporations.com/",
    type: "website",
  },
};

export default function Home() {
  return <MainPage />;
}