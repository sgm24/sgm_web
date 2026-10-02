import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const features = [
  "Compact and lightweight design",
  "Quick quarter-turn operation",
  "Reliable shut-off and flow control",
  "Low maintenance requirements",
  "Available in different sizes, pressure classes and materials",
  "Suitable for a wide range of industrial applications",
];

const specifications = [
  ["Size", "1½”–42” (40 NB–1050 NB)"],
  ["Type", "Wafer, lugged and flanged"],
  ["MOC", "CI / DI / CS / SS / DSS"],
  ["Face to face", "API 609 / BS 5155 / DIN 3202 / IS 13095"],
  ["Flange", "DIN / BS / ANSI / IS"],
  ["Mounting flange", "ISO 5211"],
  ["Pressure rating", "PN 2.5–25"],
  ["Actuation", "Hand lever / gear box"],
  [
    "Application",
    "Pneumatic / electrical actuator, HVAC, water supply and sewage, food and beverage, chemical, petrochemical, processing, power and utilities, paper and pulp, shipbuilding and steam",
  ],
  ["Specialty", "Double offset / triple offset"],
];

const gallery = [
  {
    src: "/products/butterfly/Butterfly-Valve.jpg",
    alt: "Wafer-style butterfly valves with lever actuation",
    caption: "Wafer-style butterfly valves",
    className: "butterfly-gallery-item butterfly-gallery-item-product",
  },
  {
    src: "/products/butterfly/Butterfly-Valves-The-Ultimate-Guide-4.jpg",
    alt: "Blue flanged butterfly valve with gear-box actuation",
    caption: "Flanged butterfly valve with gear-box actuation",
    className: "butterfly-gallery-item butterfly-gallery-item-detail",
  },
];

export default function ButterflyValve() {
  return (
    <>
      <Header />
      <main className="product-page butterfly-valve-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Industrial valves</p>
              <h1>Butterfly<br /><em>valves.</em></h1>
              <p className="product-lead">
                Compact, reliable flow control for demanding industrial service.
              </p>
              <p className="product-hero-note">
                Available in a range of sizes, pressure ratings and material
                configurations to suit your application.
              </p>
            </div>
            <div className="product-hero-image butterfly-hero-image">
              <Image
                src="/products/butterfly/B8.jpg"
                alt="A range of blue industrial butterfly valves"
                fill
                priority
                quality={90}
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        <section className="product-intro section">
          <div className="container product-intro-grid">
            <div>
              <p className="eyebrow dark-eyebrow">Flow control solutions</p>
              <h2>Simple operation.<br /><em>Dependable control.</em></h2>
            </div>
            <p>
              Butterfly Valves are compact, lightweight and reliable
              flow-control valves designed for efficient isolation and
              regulation of liquids, gases and various industrial media. Their
              simple quarter-turn operation provides quick and easy opening and
              closing with low maintenance requirements.
              <br /><br />
              We supply industrial Butterfly Valves in various sizes, pressure
              ratings and material configurations to suit demanding
              applications across Sugar, Power, Steel, Cement, Chemical, Water
              Treatment and Process Industries.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section butterfly-features" aria-labelledby="butterfly-features-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Designed for industrial service</p>
              <h2 id="butterfly-features-title">Key <em>features.</em></h2>
            </div>
            <div className="holder-feature-grid butterfly-feature-grid">
              {features.map((feature, index) => (
                <article className="holder-feature" key={feature}>
                  <span className="grade-number">0{index + 1}</span>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="butterfly-specifications section" aria-labelledby="butterfly-specifications-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product range</p>
              <h2 id="butterfly-specifications-title">Specifications.</h2>
            </div>
            <div className="butterfly-specifications-scroll" role="region" aria-label="Butterfly valve specifications" tabIndex={0}>
              <table className="butterfly-specifications-table">
                <caption>Butterfly valve specifications</caption>
                <tbody>
                  {specifications.map(([name, value]) => (
                    <tr key={name}>
                      <th scope="row">{name}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="butterfly-specifications-note">
              Available configurations can be selected to suit application and
              operating requirements.
            </p>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="butterfly-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 id="butterfly-applications-title">For a range of<br /><em>industrial systems.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Butterfly Valves are widely used for water, air, steam,
                chemicals and process fluids, including applications in
                pipelines, cooling systems, water treatment plants, process
                industries and industrial utility systems.
                <br /><br />
                SGM Corporations offers Butterfly Valves selected according to
                application requirements, ensuring dependable operation and
                suitable performance for industrial service.
              </p>
            </div>
          </div>
        </section>

        <section className="bearing-gallery section butterfly-gallery" aria-labelledby="butterfly-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Butterfly valve range</p>
              <h2 id="butterfly-gallery-title">Built for reliable<br /><em>flow control.</em></h2>
            </div>
            <div className="bearing-gallery-grid butterfly-gallery-grid">
              {gallery.map((image) => (
                <figure className={image.className} key={image.src}>
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

        <section className="product-applications section" aria-labelledby="butterfly-contact-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Talk to our team</p>
              <h2 id="butterfly-contact-title">Discuss your<br /><em>requirement.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Share your process conditions and operating requirements to
                discuss a suitable Butterfly Valve configuration.
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
