import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";
import ProductImageViewer from "./ProductImageViewer";

const features = [
  "Copper-impregnated carbon graphite construction",
  "Self-lubricating material for applications where oil or grease is unsuitable",
  "Designed for the heat and load conditions found in boiler equipment",
  "Wear-resistant bearing surface for dependable grate movement",
  "Available for OEM and replacement requirements",
  "Ex-stock availability can be confirmed for your requirement",
];

const applications = [
  "Travelling grate boilers",
  "Waste heat recovery boilers",
  "Chain-grate stokers and boiler grates",
  "Sugar mill and process-industry boilers",
  "Power generation equipment",
  "High-temperature mechanical assemblies",
];

const faqs = [
  {
    question: "What is a carbon stoker bush used for?",
    answer: "A carbon stoker bush is a bearing used in boiler stoker and travelling-grate mechanisms. Its carbon-graphite material is suited to applications where heat or operating conditions make conventional oil- or grease-lubricated bushes unsuitable.",
  },
  {
    question: "What type of stoker bush does SGM supply?",
    answer: "SGM supplies copper-impregnated carbon-graphite stoker bushes for boiler applications, including travelling-grate and waste-heat-recovery boilers. The appropriate grade depends on the equipment and operating conditions.",
  },
  {
    question: "Can I order a stoker bush as an OEM or replacement part?",
    answer: "SGM supports OEM and replacement requirements. Share the existing bush dimensions, boiler or grate details, operating conditions and required quantity so the fit and material grade can be reviewed.",
  },
  {
    question: "What information helps identify the right carbon stoker bush?",
    answer: "Provide the bush dimensions or drawing, equipment model, temperature and load conditions, mating-part details and any lubrication constraints. These details help confirm suitability; contact SGM before ordering if specifications are incomplete.",
  },
];

export default function CarbonStokerBush() {
  const siteUrl = "https://www.sgmcorporations.com";
  const pageUrl = `${siteUrl}/products/carbon-stoker-bush`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Carbon Graphite Stoker Bush",
        description: "Copper-impregnated carbon graphite stoker bush for travelling grate, chain-grate and waste heat recovery boiler applications.",
        image: [
          `${siteUrl}/products/stoker_bush/image-1789747829098.png`,
          `${siteUrl}/products/stoker_bush/image-1789747834093.png`,
        ],
        material: "Copper-impregnated carbon graphite",
        category: "Boiler stoker bush bearing",
        brand: { "@type": "Brand", name: "SGM Corporations" },
        manufacturer: {
          "@type": "Organization",
          name: "SGM Corporations",
          url: siteUrl,
        },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/#products` },
          { "@type": "ListItem", position: 3, name: "Carbon Stoker Bush", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <Header />
    <main className="product-page stoker-page">
      <section className="product-hero stoker-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow">03 / Mechanical carbon products</p>
            <h1>Carbon graphite<br /><em>stoker bush.</em></h1>
            <p className="product-lead">Copper-impregnated carbon graphite for dependable boiler operation under demanding heat and load conditions.</p>
            <p className="product-hero-note">For travelling-grate and waste-heat-recovery boilers, where conventional oil or grease lubrication may not suit the operating environment.</p>
          </div>
          <div className="product-hero-image stoker-hero-image">
            <Image src="/products/stoker_bush/image-1789747829098.png" alt="Carbon graphite stoker bush supplied by SGM Corporations" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="product-intro section">
        <div className="container product-intro-grid">
          <div><p className="eyebrow dark-eyebrow">Mechanical carbon performance</p><h2>Built for the<br /><em>heat and load.</em></h2></div>
          <p>Our carbon graphite stoker bush is a copper-impregnated carbon bush bearing for travelling-grate boilers, chain-grate stokers and waste-heat-recovery boilers. Carbon graphite is used for its self-lubricating, dry-running properties when high temperatures or process conditions make oil and grease lubrication difficult. The bush supports movement in boiler grate mechanisms; confirm the material grade against the actual temperature, load, fit and operating environment.</p>
        </div>
      </section>

      <section className="stoker-features section" aria-labelledby="stoker-features-title">
        <div className="container">
          {/* <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Why specify SGM</p><h2 id="stoker-features-title">A bush made for<br /><em>continuous duty.</em></h2></div> */}
          <div className="holder-feature-grid">{features.map((feature, index) => <article className="holder-feature" key={feature}><span className="grade-number">0{index + 1}</span><p>{feature}</p></article>)}</div>
        </div>
      </section>

      <section className="stoker-gallery section" aria-labelledby="stoker-gallery-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Product view</p><h2 id="stoker-gallery-title">Ready for the<br /><em>working environment.</em></h2></div>
          <div className="stoker-gallery-grid">
            <figure className="stoker-gallery-item stoker-gallery-item-large"><ProductImageViewer src="/products/stoker_bush/image-1789747829098.png" alt="Finished carbon graphite stoker bush" sizes="(max-width: 800px) 100vw, 58vw" /><figcaption>Carbon graphite stoker bush</figcaption></figure>
            <figure className="stoker-gallery-item"><ProductImageViewer src="/products/stoker_bush/image-1789747834093.png" alt="Copper impregnated carbon bush components" sizes="(max-width: 800px) 100vw, 42vw" /><figcaption>Available for OEM and replacement requirements</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="stoker-faq section" aria-labelledby="stoker-faq-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Stoker bush questions</p><h2 id="stoker-faq-title">Choosing a carbon<br /><em>stoker bush.</em></h2></div>
          <div className="stoker-faq-grid">
            {faqs.map(({ question, answer }) => (
              <article className="stoker-faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-applications section" aria-labelledby="stoker-applications-title">
        <div className="container product-applications-grid">
          <div><p className="eyebrow">Application support</p><h2 id="stoker-applications-title">Keep your boiler<br /><em>moving reliably.</em></h2></div>
          <div><p className="product-applications-copy">From planned maintenance to replacement requirements, SGM Corporations supplies copper-impregnated carbon graphite stoker bushes for boiler and mechanical-carbon applications. Contact us with your dimensions and service conditions to discuss fit, grade and availability.</p><ul className="application-list">{applications.map((application) => <li key={application}>{application}</li>)}</ul><Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link></div>
        </div>
      </section>
    </main>
    <Footer asset={(name) => `/photos/${name}`} />
  </>;
}