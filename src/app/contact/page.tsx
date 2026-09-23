import type { Metadata } from "next";
import ContactPage from "../../components/ContactPage/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SGM Corporations for industrial valves, carbon products and engineered supply.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SGM Corporations",
    description: "Contact SGM Corporations for industrial valves, carbon products and engineered supply.",
    url: "https://www.sgmcorporations.com/contact",
    type: "website",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
