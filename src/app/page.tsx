import Image from "next/image";

const asset = (name: string) => `/sgm_ref/Industrial Valves & Carbon Graphite Products_files/${name}`;

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

export default function Home() {
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
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="#top" aria-label="SGM Corporations home"><Image src={asset("headerLogo_4tYq.png")} alt="SGM Corporations" width={168} height={66} priority /></a>
        <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#top">Home</a><a href="#about">About us</a><a href="#products">Products</a><a href="#industries">Industries</a><a href="#contact">Contact</a></nav>
      </div></header>
        <a className="header-call" href="tel:+meow"><span aria-hidden="true">↗</span> Call us</a>
        {/* <a className="header-call" href="tel:+919850339010"><span aria-hidden="true">↗</span> Call us</a> */}
      <main id="top">
        <section className="hero" aria-labelledby="hero-title"><Image className="hero-image" src={asset("Coal_Ind_4tYq.jpg")} alt="Industrial energy and process facility at dusk" fill priority sizes="100vw" /><div className="hero-overlay" /><div className="container hero-content"><p className="eyebrow">Engineering supply partner · Since 1990</p><h1 id="hero-title">Assuring you<br /><em>the best.</em></h1><p className="hero-copy">Industrial valves, carbon products and engineered supply for the systems that keep industry moving.</p><div className="hero-actions"><a className="button button-primary" href="#products">Explore our products <span>→</span></a><a className="text-link" href="#contact">Talk to an engineer <span>↗</span></a></div></div><div className="hero-meta"><span>01</span><span className="hero-line" /><span>03</span><span className="hero-meta-label">Industrial solutions</span></div></section>
        <section className="intro section" id="about" aria-labelledby="intro-title"><div className="container intro-grid"><div><p className="eyebrow dark-eyebrow">What we do</p><h2 id="intro-title">The right component<br /><em>for every process.</em></h2></div><div className="intro-text"><p>SGM Corporations is a trusted industrial supply partner for process, power, marine, mining and infrastructure projects.</p><p>Our qualified professionals combine technical understanding with responsive service, helping teams specify and source the products their operations depend on.</p><a className="underlined-link" href="#contact">Meet SGM Corporations <span>↗</span></a></div></div></section>
        <section className="services section" id="products" aria-labelledby="products-title"><div className="container"><div className="section-heading"><div><p className="eyebrow dark-eyebrow">Our capabilities</p><h2 id="products-title">Built around<br /><em>your requirements.</em></h2></div><p>From standard supply to specialized requirements, we help you keep procurement clear and projects on schedule.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image"><Image src={asset(service.image)} alt={`${service.title} in an industrial setting`} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="service-content"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a></div></article>)}</div></div></section>
        <section className="industries section" id="industries" aria-labelledby="industries-title"><div className="container industry-grid"><div className="industry-image"><Image src={asset("Marine-home_4tYq.png")} alt="Offshore marine platform and support vessels" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="industry-copy"><p className="eyebrow dark-eyebrow">Where we work</p><h2 id="industries-title">Ready for the<br /><em>real world.</em></h2><p>Our products support the environments where precision, reliability and continuity matter most.</p><ul><li>Process &amp; chemical plants</li><li>Power generation</li><li>Oil &amp; gas and marine</li><li>Steel, mining &amp; infrastructure</li></ul><a className="button button-dark" href="#contact">Discuss your project <span>→</span></a></div></div></section>
        <section className="clients section" aria-labelledby="clients-title"><div className="container"><div className="clients-heading"><p className="eyebrow dark-eyebrow">Trusted by industry</p><h2 id="clients-title">Our clients</h2><p>Long-term relationships built on dependable supply and straight answers.</p></div><div className="client-grid">{clients.map(([image, name]) => <div className="client-logo" key={name}><Image src={asset(image)} alt={name} width={190} height={88} /></div>)}</div></div></section>
        {/* <section className="contact" id="contact" aria-labelledby="contact-title"><div className="container contact-inner"><div><p className="eyebrow">Start a conversation</p><h2 id="contact-title">Need a reliable<br /><em>industrial partner?</em></h2></div><div className="contact-details"><p>Tell us what you are working on. We will help you find the right way forward.</p><a href="mailto:info@sgmcorporations.com">info@sgmcorporations.com <span>↗</span></a><a href="tel:+919850339010">+91 98503 39010 <span>↗</span></a></div></div></section> */}
        <section className="contact" id="contact" aria-labelledby="contact-title"><div className="container contact-inner"><div><p className="eyebrow">Start a conversation</p><h2 id="contact-title">Need a reliable<br /><em>industrial partner?</em></h2></div><div className="contact-details"><p>Tell us what you are working on. We will help you find the right way forward.</p><a href="mailto:info@sgmcorporations.com">info@sgmcorporations.com <span>↗</span></a><a href="tel:+meow">+91 98503 39010 <span>↗</span></a></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><Image src={asset("headerLogo_4tYq.png")} alt="SGM Corporations" width={136} height={54} /><p>Industrial supply, made dependable.</p><p>© {new Date().getFullYear()} SGM Corporations</p></div></footer>
    </>
  );
}
