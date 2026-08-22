import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Industries from "./Industries";
import Intro from "./Intro";
import Services from "./Services";

const asset = (name) => `/sgm_ref/Industrial Valves & Carbon Graphite Products_files/${name}`;

const services = [
	{ number: "01", title: "Industrial valves", text: "Reliable flow-control solutions for demanding process, power, oil and gas applications.", image: "processpiping_4tYq.jpg" },
	{ number: "02", title: "Flanges & fasteners", text: "A dependable supply of essential connection hardware for critical infrastructure.", image: "power-generation_4tYq.jpg" },
	{ number: "03", title: "Carbon products", text: "Engineered carbon components selected for performance, durability and service life.", image: "Coal_Ind_4tYq.jpg" },
];

const clients = [
	["JSPL_4tYq.png", "Jindal Steel & Power"], ["TechnipFMC-logo-1_4tYq.jpg", "TechnipFMC"],
	["download-1-2_4tYq.png", "RM Cutter Process Solutions"], ["download-3_4tYq.jpg", "INDCON Projects"],
	["download-4_4tYq.png", "Kilburn Engineering"], ["viswa-1_4tYq.png", "Viswa Scrubbers"],
];

export default function MainPage() {
	const jsonLd = {
		"@context": "https://schema.org", "@type": "Organization", name: "SGM Corporations",
		url: "https://www.sgmcorporations.com/", logo: asset("headerLogo_4tYq.png"),
		email: "sales@sgmcorporations.com", telephone: "+91 98503 39010",
		description: "SGM Corporations supplies industrial valves, flanges, fasteners and carbon products for process industries.",
		sameAs: ["https://www.linkedin.com/in/sgm-corporations-a84b93187/"],
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
			<Header asset={asset} />
			<main id="top">
				<Hero asset={asset} />
				<Intro />
				<Services asset={asset} services={services} />
				<Industries asset={asset} />
				<Clients asset={asset} clients={clients} />
				<Contact />
			</main>
			<Footer asset={asset} />
		</>
	);
}