import type { Metadata } from "next";
import CarbonBrushHolder from "../../../components/Products/CarbonBrushHolder";

export const metadata: Metadata = {
  title: "Carbon Brush Holders",
  description: "Brass carbon brush holders with constant pressure spring assemblies for motors, generators and industrial applications.",
};

export default function CarbonBrushHolderPage() {
  return <CarbonBrushHolder />;
}