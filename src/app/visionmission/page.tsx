import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VisionMission from "../../components/VisionMission/VisionMission";

export const metadata: Metadata = {
  title: "Vision and Mission",
  description: "Discover the vision and mission guiding SGM Corporations in supplying dependable carbon products and industrial solutions.",
  alternates: { canonical: "/visionmission" },
  openGraph: {
    title: "Vision and Mission | SGM Corporations",
    description: "The vision and mission guiding SGM Corporations and its industrial supply services.",
    url: "https://www.sgmcorporations.com/visionmission",
    type: "website",
  },
};

const asset = (name: string) => `/photos/${name}`;

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <VisionMission />
      <Footer asset={asset} />
    </>
  );
}