import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const tractionImages = [
  ["image-1789746923941.png", "Traction carbon brush holder assembly"],
  ["image-1789746928114.png", "Locomotive holder with twin brush positions"],
  ["image-1789746932679.png", "Traction holder with roller contact assembly"],
  ["image-1789746936845.png", "Compact locomotive carbon brush holder"],
];

const applications = ["ALCO locomotives", "DMW locomotives", "Traction motors", "Locomotive electrical equipment", "Replacement and maintenance applications", "Made-to-specification supply"];

const features = ["Proper carbon brush positioning", "Reliable current collection", "Robust construction for locomotive service", "Application-matched dimensions and fit", "Designed for dependable maintenance replacement", "Prompt supply as per required specification"];

export default function ComponentsForTractionApplication() {
  return <>
    <Header />
    <main className="product-page holder-page traction-page">
      <section className="product-hero holder-hero traction-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow">03 / Electrical carbon products</p>
            <h1>Traction<br /><em>components.</em></h1>
            <p className="product-lead">Carbon brush holders for ALCO and DMW locomotives.</p>
            <p className="product-hero-note">Robust holders designed for proper carbon brush positioning and reliable current collection in demanding locomotive applications.</p>
          </div>
          <div className="product-hero-image holder-hero-image traction-hero-image">
            <Image src="/products/traction/image-1789746923941.png" alt="Carbon brush holder for locomotive traction applications" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="product-intro section">
        <div className="container product-intro-grid">
          <div><p className="eyebrow dark-eyebrow">Reliable locomotive supply</p><h2>Built to keep<br /><em>traction moving.</em></h2></div>
          <p>We supply carbon brush holders for ALCO and DMW locomotive applications. These assemblies support accurate brush alignment, steady contact and dependable current collection across traction motor service and maintenance requirements.</p>
        </div>
      </section>

      <section className="holder-features section" aria-labelledby="traction-features-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Application-focused construction</p><h2 id="traction-features-title">The right holder<br /><em>for the route.</em></h2></div>
          <div className="holder-feature-grid">{features.map((feature, index) => <article className="holder-feature" key={feature}><span className="grade-number">0{index + 1}</span><p>{feature}</p></article>)}</div>
        </div>
      </section>

      <section className="holder-gallery section traction-gallery" aria-labelledby="traction-gallery-title">
        <div className="container">
          <div className="product-section-heading"><p className="eyebrow dark-eyebrow">Traction application range</p><h2 id="traction-gallery-title">Specified for<br /><em>working service.</em></h2></div>
          <div className="holder-gallery-grid">{tractionImages.map(([src, alt], index) => <figure className={`holder-gallery-item traction-gallery-item traction-gallery-item-${index + 1}`} key={src}><Image src={`/products/traction/${src}`} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{alt}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="product-applications section" aria-labelledby="traction-applications-title">
        <div className="container product-applications-grid">
          <div><p className="eyebrow">Quality products | Reliable supply | Prompt service</p><h2 id="traction-applications-title">Ready for<br /><em>traction service.</em></h2></div>
          <div><p className="product-applications-copy">Share your locomotive model, existing holder details or required dimensions with us. We can supply a suitable carbon brush holder for the application and specification.</p><ul className="application-list">{applications.map((application) => <li key={application}>{application}</li>)}</ul><Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link></div>
        </div>
      </section>
    </main>
    <Footer asset={(name) => `/photos/${name}`} />
  </>;
}