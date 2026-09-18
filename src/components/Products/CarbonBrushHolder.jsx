import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const holderImages = [
  ["2(12.5)x32 mm.jpg", "IEC DC motor, size 2 tandem holder"],
  ["BHEL-16x32x50.jpg", "BHEL HT, AC motor and traction motor holder"],
  ["images.jpg", "Compact industrial brush holder"],
  ["IMG-20190717-WA0005.jpg", "Tandem holder for CGL DC motor"],
  ["IMG-20190717-WA0007.jpg", "Tandem holder detail"],
  ["IMG-20190717-WA0008.jpg", "Kirloskar AC motor frame holder"],
];

const industries = ["Sugar industries", "Steel processing", "Mining industries", "Power generation", "Traction applications", "General industrial equipment"];

const features = ["Finest quality brass, sheet or solid", "Constant pressure spring assemblies", "Height-adjustable configurations", "Brush wear devices and quick disconnect terminals", "Low-friction coating options", "Engineered to reduce maintenance downtime"];

export default function CarbonBrushHolder() {
  return <>
    <Header />
    <main className="product-page holder-page">
      <section className="product-hero holder-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow">02 / Electrical carbon products</p>
            <h1>Carbon brush<br /><em>holders.</em></h1>
            <p className="product-lead">Constant pressure. Longer brush life. Dependable current collection.</p>
            <p className="product-hero-note">Robust brush holders engineered for motors, generators and traction equipment across demanding industrial applications.</p>
          </div>
          <div className="product-hero-image holder-hero-image">
            <Image src="/products/brush_holder/2(12.5)x32 mm.jpg" alt="IEC DC motor carbon brush holder" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="product-intro section">
        <div className="container product-intro-grid">
          <div><p className="eyebrow dark-eyebrow">Engineered contact</p><h2>Keep the brush<br /><em>working true.</em></h2></div>
          <p>Our comprehensive range of carbon brush holders is designed to support reliable performance in motors and generators. Each holder is made from high-quality brass, in sheet or solid construction, with constant pressure spring assemblies matched to the application.</p>
        </div>
      </section>

      <section className="holder-features section" aria-labelledby="holder-features-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Built for the application</p><h2 id="holder-features-title">A better fit for<br /><em>every machine.</em></h2></div>
          <div className="holder-feature-grid">{features.map((feature, index) => <article className="holder-feature" key={feature}><span className="grade-number">0{index + 1}</span><p>{feature}</p></article>)}</div>
        </div>
      </section>

      <section className="holder-gallery section" aria-labelledby="holder-gallery-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Selected configurations</p><h2 id="holder-gallery-title">Made for real<br /><em>working conditions.</em></h2></div>
          <div className="holder-gallery-grid">{holderImages.map(([src, alt], index) => <figure className={`holder-gallery-item holder-gallery-item-${index + 1}`} key={src}><Image src={`/products/brush_holder/${src}`} alt={alt} fill sizes="(max-width: 800px) 100vw, 33vw" /><figcaption>{alt}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="product-applications section" aria-labelledby="holder-applications-title">
        <div className="container product-applications-grid">
          <div><p className="eyebrow">Support across industries</p><h2 id="holder-applications-title">One holder for<br /><em>many applications.</em></h2></div>
          <div><p className="product-applications-copy">The correct constant-force spring helps maintain consistent contact, reduce brush wear and contact-surface wear, limit carbon dust, and lower the overall maintenance cost of the unit.</p><ul className="application-list">{industries.map((industry) => <li key={industry}>{industry}</li>)}</ul><Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link></div>
        </div>
      </section>

      {/* <section className="holder-closing section"><div className="container holder-closing-inner"><p className="eyebrow dark-eyebrow">Engineered supply</p><h2>Tell us what your<br /><em>machine needs.</em></h2><p>We will work closely with you to offer an engineered solution from our extensive product portfolio, for current and future motor and generator requirements.</p><Link className="button button-primary" href="/contact">Contact SGM Corporations <span>→</span></Link></div></section> */}
    </main>
    <Footer asset={(name) => `/photos/${name}`} />
  </>;
}