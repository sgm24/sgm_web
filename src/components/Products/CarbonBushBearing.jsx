import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const bearingImages = [
  ["1.jpg", "Carbon graphite bearing rings"],
  ["IMG_20201012_174153.jpg", "Custom carbon graphite bush bearing"],
  ["3.jpg", "Carbon graphite thrust bearing"],
  ["Water Pump Seal 1.jpg", "Carbon bearing seal component"],
  ["Water Pump Seal 2.jpg", "Machined carbon bearing component"],
  ["carbon-raschig-rings-tower-packing-carbon-1000x1000.webp", "Carbon graphite rings"],
  ["Carbon seal1.png", "Carbon seal and bearing rings"],
];

const advantages = [
  "Low friction and smooth operation",
  "High-temperature resistance without loss of strength",
  "Resistance to chemicals, corrosion and oxidation",
  "Good thermal conductivity for heat exchange",
  "Low density and low thermal expansion",
  "Excellent thermal shock and mechanical strength",
];

const industries = [
  "Thermal power stations",
  "Chemical plants",
  "Petrochemical units",
  "Textile machinery",
  "Fertilizer plants",
  "High-temperature equipment",
];

export default function CarbonBushBearing() {
  return <>
    <Header />
    <main className="product-page bearing-page">
      <section className="product-hero bearing-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow">04 / Mechanical carbon products</p>
            <h1>Carbon bush<br /><em>bearing.</em></h1>
            <p className="product-lead">Self-lubricating carbon graphite bearings for demanding industrial environments.</p>
            <p className="product-hero-note">Available in a wide selection of grades and sizes, with custom parts manufactured quickly for your application.</p>
          </div>
          <div className="product-hero-image bearing-hero-image">
            <Image src="/products/carbon_bush_bearing/IMG_20201012_174153.jpg" alt="Carbon graphite bush bearing supplied by SGM Corporations" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="product-intro section">
        <div className="container product-intro-grid">
          <div><p className="eyebrow dark-eyebrow">Mechanical carbon performance</p><h2>Reliable where<br /><em>lubricants cannot.</em></h2></div>
          <p>Carbon graphite bearing bushes are self-lubricating and ideal for applications where conventional lubricants cannot be used. Even high-temperature applications are no problem for carbon graphite, making these bearings a dependable choice across power, process and manufacturing equipment.</p>
        </div>
      </section>

      <section className="bearing-advantages section" aria-labelledby="bearing-advantages-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Why specify carbon graphite</p><h2 id="bearing-advantages-title">Made to keep<br /><em>performing.</em></h2></div>
          <div className="holder-feature-grid">{advantages.map((advantage, index) => <article className="holder-feature" key={advantage}><span className="grade-number">0{index + 1}</span><p>{advantage}</p></article>)}</div>
        </div>
      </section>

      <section className="bearing-gallery section" aria-labelledby="bearing-gallery-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Product range</p><h2 id="bearing-gallery-title">Configured for<br /><em>your application.</em></h2></div>
          <div className="bearing-gallery-grid">{bearingImages.map(([src, alt], index) => <figure className={`bearing-gallery-item bearing-gallery-item-${index + 1}`} key={src}><Image src={`/products/carbon_bush_bearing/${src}`} alt={alt} fill sizes="(max-width: 800px) 100vw, 33vw" /><figcaption>{alt}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="product-applications section" aria-labelledby="bearing-applications-title">
        <div className="container product-applications-grid">
          <div><p className="eyebrow">Industry applications</p><h2 id="bearing-applications-title">Built for<br /><em>hard conditions.</em></h2></div>
          <div><p className="product-applications-copy">We keep a wide selection of grades and sizes in stock and can manufacture custom carbon graphite bush bearings quickly to match your operating conditions and dimensions.</p><ul className="application-list">{industries.map((industry) => <li key={industry}>{industry}</li>)}</ul><Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link></div>
        </div>
      </section>
    </main>
    <Footer asset={(name) => `/photos/${name}`} />
  </>;
}