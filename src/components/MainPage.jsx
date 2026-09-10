import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Industries from "./Industries";
import Intro from "./Intro";
import Services from "./Services";

const asset = (name) => `/photos/${name}`;
const clientAsset = (name) => `/clients/${name}`;

const services = [
	{ number: "01", title: "Industrial valves", text: "Reliable flow-control solutions for demanding process, power, oil and gas applications.", image: "pexels-sonny-vermeer-505472791-17728782.jpg" },
	{ number: "02", title: "Flanges & fasteners", text: "A dependable supply of essential connection hardware for critical infrastructure.", image: "Power generation 2.jpg" },
	{ number: "03", title: "Carbon products", text: "Engineered carbon components selected for performance, durability and service life.", image: "cement_plant_121115.jpg" },
];

const clients = [
	["aarloha.jpg", "Aarloha"], ["essarlogo.jpg", "AMNS India"],
	["Bhushan steel.png", "Bhushan Power & Steel"], ["Bilt.png", "Bilt"], ["Dalmiya Cement.jpg", "Dalmia Cement"],
	["Daund Sugar.jpg", "Daund Sugar"], ["EID Parry.jpg", "E.I.D. Parry"], ["Geetai Steel.png", "Geetai Steel"],
	["Hindalco.jpg", "Hindalco"], ["JSW.png", "JSW Steel"], ["Khatu SHyam.jpg", "Khatu Shyam"],
	["KPR Sugar.png", "KPR Sugar"], ["Mahagenco.webp", "MAHAGENCO"], ["OMSai Ram.png", "Om Sai Ram"],
	["POsco.png", "POSCO"], ["Rajuri Steel.png", "Rajuri Steel"], ["RCCPL.png", "RCCPL"],
	["Rev Power.png", "Rev Power"], ["Rushas.jpg", "Rushas Engineering"], ["SRJ Steel.png", "SRJ Steel"],
	["TDPS.png", "TDPS"], ["Thermax.png", "Thermax"], ["ultratech-main-logo.jpeg", "UltraTech"],
];

export default function MainPage() {
	const jsonLd = {
		"@context": "https://schema.org", "@type": "Organization", name: "SGM Corporations",
		url: "https://www.sgmcorporations.com/", logo: asset("400dpiLogoCropped.png"),
		email: "sales@sgmcorporations.com", telephone: "+91 98503 39010",
		description: "SGM Corporations supplies industrial valves, flanges, fasteners and carbon products for process industries.",
		sameAs: ["https://www.linkedin.com/in/sgm-corporations-a84b93187/"],
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
			<Header />
			<main id="top">
				<Hero asset={asset} />
				<Intro />
				<Services asset={asset} services={services} />
				<Industries asset={asset} />
				<Clients asset={clientAsset} clients={clients} />
				<Contact />
			</main>
			<Footer asset={asset} />
		</>
	);
}