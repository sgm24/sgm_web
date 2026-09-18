import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const features = [
  "Copper impregnated carbon graphite",
  "High-temperature and heavy-load performance",
  "Excellent wear resistance and long service life",
  "Smooth, dependable operation under load",
  "Suitable for OEM and replacement requirements",
  "Prompt service with ex-stock availability",
];

const applications = [
  "Travelling grate boilers",
  "Waste heat recovery boilers",
  "Sugar and process industries",
  "Power generation equipment",
  "High-temperature mechanical assemblies",
  "Heavy-duty replacement applications",
];

export default function CarbonStokerBush() {
  return <>
    <Header />
    <main className="product-page stoker-page">
      <section className="product-hero stoker-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow">03 / Mechanical carbon products</p>
            <h1>Carbon graphite<br /><em>stoker bush.</em></h1>
            <p className="product-lead">Copper impregnated carbon graphite for reliable boiler operation under high load and high temperature.</p>
            <p className="product-hero-note">Designed for travelling grate boilers and waste heat recovery boilers, with the wear resistance and smooth operation demanding applications require.</p>
          </div>
          <div className="product-hero-image stoker-hero-image">
            <Image src="/products/stoker_bush/image-1789747829098.png" alt="Carbon graphite stoker bush supplied by SGM Corporations" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="product-intro section">
        <div className="container product-intro-grid">
          <div><p className="eyebrow dark-eyebrow">Mechanical carbon performance</p><h2>Built for the<br /><em>heat and load.</em></h2></div>
          <p>Our carbon graphite stoker bush is a copper impregnated carbon bush bearing designed for dependable service in demanding boiler environments. It supports smooth movement, resists wear and helps extend maintenance intervals in travelling grate boiler and waste heat recovery boiler applications.</p>
        </div>
      </section>

      <section className="stoker-features section" aria-labelledby="stoker-features-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Why specify SGM</p><h2 id="stoker-features-title">A bush made for<br /><em>continuous duty.</em></h2></div>
          <div className="holder-feature-grid">{features.map((feature, index) => <article className="holder-feature" key={feature}><span className="grade-number">0{index + 1}</span><p>{feature}</p></article>)}</div>
        </div>
      </section>

      <section className="stoker-gallery section" aria-labelledby="stoker-gallery-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Product view</p><h2 id="stoker-gallery-title">Ready for the<br /><em>working environment.</em></h2></div>
          <div className="stoker-gallery-grid">
            <figure className="stoker-gallery-item stoker-gallery-item-large"><Image src="/products/stoker_bush/image-1789747829098.png" alt="Finished carbon graphite stoker bush" fill sizes="(max-width: 800px) 100vw, 58vw" /><figcaption>Carbon graphite stoker bush</figcaption></figure>
            <figure className="stoker-gallery-item"><Image src="/products/stoker_bush/image-1789747834093.png" alt="Copper impregnated carbon bush components" fill sizes="(max-width: 800px) 100vw, 42vw" /><figcaption>Available for OEM and replacement requirements</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="product-applications section" aria-labelledby="stoker-applications-title">
        <div className="container product-applications-grid">
          <div><p className="eyebrow">Application support</p><h2 id="stoker-applications-title">Keep your boiler<br /><em>moving reliably.</em></h2></div>
          <div><p className="product-applications-copy">From planned maintenance to urgent replacement requirements, SGM Corporations supplies Morganite bush and copper impregnated carbon graphite stoker bush solutions for demanding mechanical carbon applications.</p><ul className="application-list">{applications.map((application) => <li key={application}>{application}</li>)}</ul><Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link></div>
        </div>
      </section>
    </main>
    <Footer asset={(name) => `/photos/${name}`} />
  </>;
}