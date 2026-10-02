import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const applications = [
  "Steam Turbines",
  "Rotary Equipment",
  "Paper Machines",
  "Textile Machinery",
  "Industrial Steam Systems",
];

const benefits = [
  "Reliable steam transfer in rotating equipment",
  "Low-friction carbon and graphite sealing",
  "Excellent wear resistance",
  "Dependable operation under demanding temperature and pressure conditions",
];

export default function RotarySteamJoint() {
  return (
    <>
      <Header />
      <main className="product-page rotary-steam-joint-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Mechanical / Carbon products</p>
              <h1>Rotary steam<br /><em>joint.</em></h1>
              <p className="product-lead">
                High-performance carbon rotary steam joints designed for
                reliable steam transfer in rotating equipment.
              </p>
              <p className="product-hero-note">
                Manufactured with quality carbon and graphite sealing
                components for low friction, excellent wear resistance and
                dependable operation under demanding temperature and pressure
                conditions.
              </p>
            </div>
            <div className="product-hero-image rotary-steam-hero-image">
              <Image
                src="/products/rotary_steam_joint/Rotary%20Steam%20Joint%20-1.png"
                alt="Carbon seal ring used in a rotary steam joint"
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
              <p className="eyebrow dark-eyebrow">Mechanical sealing solutions</p>
              <h2>Dependable steam transfer for<br /><em>rotating equipment.</em></h2>
            </div>
            <p>
              Carbon rotary steam joints support reliable steam transfer in
              rotating machinery. Their carbon and graphite sealing components
              combine low friction and excellent wear resistance to deliver
              dependable operation under demanding temperature and pressure
              conditions.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section" aria-labelledby="rotary-joint-benefits-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Carbon sealing performance</p>
              <h2 id="rotary-joint-benefits-title">Made for dependable<br /><em>steam service.</em></h2>
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

        <section className="product-applications section" aria-labelledby="rotary-joint-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 id="rotary-joint-applications-title">For a range of<br /><em>industrial systems.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Carbon rotary steam joints are used wherever steam must be
                transferred to rotating machinery. Their carbon and graphite
                sealing components are suited to demanding operating
                conditions across a range of industrial applications.
              </p>
              <ul className="application-list">
                {applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bearing-gallery section" aria-labelledby="rotary-joint-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product range</p>
              <h2 id="rotary-joint-gallery-title">Carbon sealing components for<br /><em>steam service.</em></h2>
            </div>
            <div className="bearing-gallery-grid">
              <figure className="bearing-gallery-item rotary-steam-gallery-item">
                <Image
                  src="/products/rotary_steam_joint/Rotary%20Steam%20Joint%20-2.png"
                  alt="Carbon and graphite rings for rotary steam joint assemblies"
                  fill
                  sizes="(max-width: 800px) 100vw, 1000px"
                />
                <figcaption>Carbon and graphite sealing rings for rotary steam joint assemblies</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="rotary-joint-contact-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Talk to our team</p>
              <h2 id="rotary-joint-contact-title">Discuss your<br /><em>requirement.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Get in touch with your rotary steam joint application details
                and operating requirements.
              </p>
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