import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VisionMission from "../../components/VisionMission/VisionMission";

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