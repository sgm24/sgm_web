import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";
import ProductImageViewer from "./ProductImageViewer";

const benefits = [
  "Low friction for efficient sealing in rotating equipment",
  "High wear resistance and extended service life",
  "Excellent thermal and chemical stability under demanding conditions",
  "Reliable sealing performance for pumps, turbines and mechanical seals",
  "Self-lubricating operation to help reduce maintenance downtime",
  "Customisable dimensions and grades to suit specific industrial requirements",
];

const applications = [
  "Pumps",
  "Turbines",
  "Mechanical Seals",
  "Rotating Equipment",
  "Industrial Machinery",
];

const gallery = [
  ["image-1790864572920.png", "Carbon seal ring for industrial sealing applications"],
  ["image-1790864600351.png", "Graphite carbon seal ring configuration"],
  ["image-1790864605638.png", "Carbon seal rings used in rotating equipment"],
];

export default function CarbonSeal() {
  return (
    <>
      <Header />
      <main className="product-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">05 / Mechanical carbon products</p>
              <h1>Carbon seal<br /><em>ring.</em></h1>
              <p className="product-lead">High-quality carbon seal rings for pumps, turbines, mechanical seals and industrial rotating equipment.</p>
              <p className="product-hero-note">Manufactured from selected carbon and graphite materials for reliable sealing, low friction, wear resistance and dependable performance in demanding operating conditions.</p>
            </div>
            <div className="product-hero-image">
              <Image src="/products/carbon-seal/image-1790864572920.png" alt="Carbon seal ring product image" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section className="product-intro section">
          <div className="container product-intro-grid">
            <div>
              <p className="eyebrow dark-eyebrow">Mechanical sealing solutions</p>
              <h2>Reliable sealing for<br /><em>high-demand systems.</em></h2>
            </div>
            <p>Our carbon seal rings are designed to provide stable sealing performance in rotating and high-wear environments where conventional materials may not offer the required life, heat resistance or low-friction operation. They are suitable for both standard and custom industrial applications.</p>
          </div>
        </section>

        <section className="bearing-advantages section" aria-labelledby="seal-benefits-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Why choose carbon seal rings</p>
              <h2 id="seal-benefits-title">Built for long,<br /><em>stable performance.</em></h2>
            </div>
            <div className="holder-feature-grid">
              {benefits.map((benefit, index) => (
                <article className="holder-feature" key={benefit}>
                  <span className="grade-number">0{index + 1}</span>
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bearing-gallery section" aria-labelledby="seal-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product range</p>
              <h2 id="seal-gallery-title">Precision rings for<br /><em>critical sealing duty.</em></h2>
            </div>
            <div className="bearing-gallery-grid">
              {gallery.map(([src, alt], index) => (
                <figure className={`bearing-gallery-item bearing-gallery-item-${index + 1}`} key={src}>
                  <ProductImageViewer src={`/products/carbon-seal/${src}`} alt={alt} sizes="(max-width: 800px) 100vw, 33vw" />
                  <figcaption>{alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="seal-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 id="seal-applications-title">Used where<br /><em>reliability matters.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">Carbon seal rings are supplied for industrial sealing systems where contamination control, friction reduction and service life are essential for efficient machine operation.</p>
              <ul className="application-list">
                {applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
              <Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer asset={(name) => `/photos/${name}`} />
    </>
  );
}
