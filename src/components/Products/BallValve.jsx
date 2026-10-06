import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";
import ProductImageViewer from "./ProductImageViewer";

const range = [
  "1-Piece Ball Valves",
  "2-Piece Ball Valves",
  "3-Piece Ball Valves",
  "Flanged End Ball Valves",
  "Screwed / Threaded End Ball Valves",
  "Floating Ball Valves",
  "Trunnion-Mounted Ball Valves",
  "3-Way Ball Valves",
  "Full-Port and Reduced-Port Ball Valves",
  "Pneumatic Actuated Ball Valves",
  "Electric Actuated Ball Valves",
  "Jacketed Ball Valves",
  "High-Pressure Ball Valves",
];

const features = [
  "Quick 90° quarter-turn operation",
  "Reliable shut-off performance",
  "Compact and robust construction",
  "Suitable for a wide range of industrial applications",
  "Available in different body and trim materials",
  "Various pressure classes and sizes",
  "Flanged, threaded and welded end connections",
  "Manual or actuator-operated options",
  "Suitable for liquid and gaseous media, subject to material and service compatibility",
];

const applications = [
  "Chemical & Petrochemical Industries",
  "Sugar Industries",
  "Power Plants",
  "Steel & Cement Industries",
  "Oil & Gas",
  "Water & Wastewater Treatment",
  "Pharmaceutical Industries",
  "Food & Beverage Processing",
  "Process Industries",
  "Compressed Air Systems",
  "Steam and Utility Lines",
  "General Industrial Piping",
];

const specifications = [
  ["Size", '2"–36" (50 NB–900 NB)'],
  ["Pressure class", "150–2500"],
  ["Construction", "Single / Two / Three Pieces"],
  ["Body and trim materials", "CS / SS / Alloy / DSS / MOS"],
  ["Ball configuration", "Trunnion / Floating / Full and Reduced Bore"],
  ["Seat design", "Soft seated / Metal-to-metal seated"],
  ["Design standards", "API 6D / ASME B16.34 / BS 5351 / BS 17292"],
  ["Face-to-face", "ASME B16.10 / API 6D"],
  ["End connections", "Butt-weld / Flanged"],
  ["End-to-flange", "ASME B16.5 / DIN / BS / IS"],
  ["Butt-weld ends", "ASME B16.25"],
  ["Testing", "API 598 / BS 6755 / ISO 12266"],
  ["Fire-safe design", "API 607 / API 6FA"],
  ["Special service", "Anti-static device / Blow-out-proof stem / NACE MR-01-75 / 0103"],
  ["Actuation", "Hand lever / Gear box / Pneumatic / Electric / Hydraulic"],
];

const gallery = [
  {
    src: "/products/ball_valve/ball-valve-industry.jpg",
    alt: "Cutaway view of an industrial trunnion-mounted ball valve",
    caption: "Industrial ball valve construction",
    className: "ball-valve-gallery-item ball-valve-gallery-item-cutaway",
  },
  {
    src: "/products/ball_valve/Ball%20Valve.jpg",
    alt: "Flanged industrial ball valve with handwheel",
    caption: "Flanged ball valve with handwheel actuation",
    className: "ball-valve-gallery-item ball-valve-gallery-item-product",
  },
];

export default function BallValve() {
  return (
    <>
      <Header />
      <main className="product-page ball-valve-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Industrial valves</p>
              <h1>Ball<br /><em>valves.</em></h1>
              <p className="product-lead">
                Soft seated &amp; metal-to-metal seated.
              </p>
              <p className="product-hero-note">
                Industrial Ball Valves for reliable flow control across
                demanding process applications.
              </p>
            </div>
            <div className="product-hero-image ball-valve-hero-image">
              <Image
                src="/products/ball_valve/ball-valve-industry.jpg"
                alt="Cutaway view showing the ball and flow passage inside an industrial valve"
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
              <p className="eyebrow dark-eyebrow">Reliable flow control</p>
              <h2>Fast operation.<br /><em>Dependable shut-off.</em></h2>
            </div>
            <p>
              Ball Valves are quarter-turn valves designed for reliable and
              efficient isolation and flow control of liquids, gases and other
              compatible process media. With a rotating ball and
              precision-machined flow passage, ball valves provide quick
              operation, compact construction and dependable shut-off
              performance.
              <br /><br />
              SGM Corporations supplies industrial Ball Valves in various
              configurations, sizes, materials, pressure ratings and end
              connections to meet the requirements of process industries and
              industrial piping systems.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section ball-valve-range" aria-labelledby="ball-valve-range-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Configurations for your application</p>
              <h2 id="ball-valve-range-title">Ball valve <em>range.</em></h2>
            </div>
            <div className="holder-feature-grid ball-valve-range-grid">
              {range.map((item, index) => (
                <article className="holder-feature ball-valve-range-item" key={item}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
            <p className="butterfly-specifications-note">
              Availability and configuration depend on the application and
              technical specification.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section ball-valve-features" aria-labelledby="ball-valve-features-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Designed for industrial service</p>
              <h2 id="ball-valve-features-title">Key <em>features.</em></h2>
            </div>
            <div className="holder-feature-grid ball-valve-feature-grid">
              {features.map((feature, index) => (
                <article className="holder-feature" key={feature}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="butterfly-specifications section ball-valve-specifications" aria-labelledby="ball-valve-specifications-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product details</p>
              <h2 id="ball-valve-specifications-title">Specifications.</h2>
            </div>
            <div className="butterfly-specifications-scroll" role="region" aria-label="Ball valve specifications" tabIndex={0}>
              <table className="butterfly-specifications-table">
                <caption>Ball valve specifications</caption>
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
              Confirm the applicable standards, materials and ratings against
              the required service and technical specification.
            </p>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="ball-valve-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 id="ball-valve-applications-title">For a range of<br /><em>industrial systems.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Industrial Ball Valves are widely used for isolation and flow
                control in:
              </p>
              <ul className="application-list">
                {applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
              <p className="product-applications-copy">
                The correct ball valve construction, material, pressure rating
                and seat design should be selected according to the operating
                pressure, temperature and process medium.
              </p>
            </div>
          </div>
        </section>

        <section className="bearing-gallery section ball-valve-gallery" aria-labelledby="ball-valve-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Ball valve range</p>
              <h2 id="ball-valve-gallery-title">Built for reliable<br /><em>flow control.</em></h2>
            </div>
            <div className="bearing-gallery-grid ball-valve-gallery-grid">
              {gallery.map((image) => (
                <figure className={image.className} key={image.src}>
                  <ProductImageViewer
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="ball-valve-contact-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Talk to our team</p>
              <h2 id="ball-valve-contact-title">Discuss your<br /><em>requirement.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Share your process conditions and operating requirements to
                discuss a suitable Ball Valve configuration.
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
