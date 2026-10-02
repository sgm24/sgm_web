import type { Metadata } from "next";
import BallValve from "../../../components/Products/BallValve";

const description =
  "SGM Corporations supplies industrial Ball Valves for reliable flow isolation and control. 1-piece, 2-piece, 3-piece, flanged, threaded, floating and actuated Ball Valves for process industries.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Ball Valve Supplier in India | Ball Valves | SGM Corporations",
  },
  description,
  keywords: [
    "Industrial Ball Valve",
    "Ball Valve Supplier",
    "Ball Valve India",
    "Industrial Ball Valves",
    "Flanged Ball Valve",
    "3 Piece Ball Valve",
    "Floating Ball Valve",
    "Trunnion Ball Valve",
    "Actuated Ball Valve",
    "High Pressure Ball Valve",
  ],
  alternates: { canonical: "/products/ball-valve" },
  openGraph: {
    title:
      "Industrial Ball Valve Supplier in India | Ball Valves | SGM Corporations",
    description,
    url: "https://www.sgmcorporations.com/products/ball-valve",
    type: "website",
    images: [
      {
        url: "/products/ball_valve/ball-valve-industry.jpg",
        alt: "Industrial ball valve construction",
      },
    ],
  },
};

export default function BallValvePage() {
  return <BallValve />;
}
