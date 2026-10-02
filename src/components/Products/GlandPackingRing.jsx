import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const features = [
  "High-quality carbon and graphite construction",
  "Excellent wear resistance and low friction",
  "Suitable for high-temperature applications",
  "Precision-machined for accurate fit and sealing",
  "Reliable performance in continuous-duty equipment",
  "Available in customized sizes and configurations",
];

const applications = [
  "Steam and industrial turbines",
  "Pumps",
  "Mechanical seals",
  "Compressors",
  "Rotating machinery",
  "Industrial sealing applications",
];

const productImages = [
  {
    src: "/products/gland_packing/Segment%20ring.png",
    alt: "Carbon segment packing ring for industrial sealing",
    caption: "Precision carbon segment ring for industrial sealing applications",
  },
  {
    src: "/products/gland_packing/Segment%20ring2.png",
    alt: "Carbon packing ring with segmented construction",
    caption: "Carbon packing ring manufactured for dependable rotating equipment service",
  },
];

export default function GlandPackingRing() {
  return (
    <>
      <Header />
      <main className="product-page gland-packing-ring-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Mechanical / Carbon products</p>
              <h1>Gland packing<br /><em>ring.</em></h1>
              <p className="product-lead">
                Precision carbon segment rings for reliable sealing in
                industrial rotating equipment.
              </p>
              <p className="product-hero-note">
                Gland packing rings are also known as segmented rings or
                carbon packing rings. These carbon and graphite components
                offer low friction, wear resistance and stable performance
                in demanding, high-temperature service.
              </p>
            </div>
            <div className="product-hero-image gland-packing-hero-image">
              <Image
                src={productImages[0].src}
                alt={productImages[0].alt}
                fill
                priority
                quality={90}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="product-intro section">
          <div className="container product-intro-grid">
            <div>
              <p className="eyebrow dark-eyebrow">Segmented ring / carbon packing ring</p>
              <h2>Reliable sealing for<br /><em>industrial equipment.</em></h2>
            </div>
            <p>
              Carbon Segment Rings are precision-engineered carbon and
              graphite components designed for reliable sealing, wear
              resistance and smooth operation in industrial rotating
              equipment. They are commonly used in steam turbines, pumps,
              mechanical seals, compressors and other high-temperature
              applications.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section" aria-labelledby="gland-packing-features-title">
          <div className="container">
            <div className="product-section-heading gland-packing-feature-heading">
              <div>
                <p className="eyebrow dark-eyebrow">Carbon and graphite construction</p>
                <h2 id="gland-packing-features-title">Precision-made for<br /><em>dependable service.</em></h2>
              </div>
              <p className="gland-packing-feature-copy">
                Manufactured from carefully selected carbon and graphite
                grades, our segment rings offer excellent dimensional
                stability, low friction, good thermal resistance and
                dependable performance under demanding operating conditions.
              </p>
            </div>
            <div className="holder-feature-grid">
              {features.map((feature, index) => (
                <article className="holder-feature" key={feature}>
                  <span className="grade-number">0{index + 1}</span>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gland-packing-gallery section" aria-labelledby="gland-packing-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product range</p>
              <h2 id="gland-packing-gallery-title">Carbon packing rings for<br /><em>industrial requirements.</em></h2>
            </div>
            <div className="bearing-gallery-grid">
              {productImages.map((image, index) => (
                <figure className={`bearing-gallery-item gland-packing-gallery-item bearing-gallery-item-${index + 1}`} key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="gland-packing-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Talk to our team</p>
              <h2 id="gland-packing-applications-title">Discuss your<br /><em>requirement.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Carbon segment rings support sealing and smooth operation
                across high-temperature industrial equipment and continuous-duty
                applications. SGM Corporations supplies Carbon Segment Rings
                in various sizes and specifications to suit OEM and industrial
                requirements.
              </p>
              <ul className="application-list">
                {applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
              <Link className="button button-primary" href="/contact">
                Discuss your requirement <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer asset={(name) => `/photos/${name}`} />
    </>
  );
}
