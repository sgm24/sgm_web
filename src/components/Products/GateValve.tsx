import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";
import ProductImageViewer from "./ProductImageViewer";

const types = [
  "Wedge Gate Valves",
  "Solid Wedge Gate Valves",
  "Flexible Wedge Gate Valves",
  "Split Wedge / Double Disc Gate Valves",
  "Parallel Slide Gate Valves",
  "Slab Gate Valves",
  "Through-Conduit Gate Valves",
  "Rising Stem Gate Valves",
  "Non-Rising Stem Gate Valves",
  "Pressure Seal Gate Valves",
  "Forged Gate Valves",
  "Cast Steel Gate Valves",
];

const features = [
  "Reliable shut-off and isolation",
  "Straight-through flow path when fully open",
  "Low pressure drop in the fully open position",
  "Available in rising and non-rising stem designs",
  "Multiple body and trim material options",
  "Suitable for a wide range of industrial applications",
  "Handwheel, gearbox or actuated operation as required",
  "Available in different pressure classes and end connections",
];

const applications = [
  "Sugar Industries",
  "Power Plants",
  "Steel Industries",
  "Cement Plants",
  "Oil & Gas",
  "Petrochemical Industries",
  "Chemical Industries",
  "Water & Wastewater",
  "Boiler & Steam Systems",
  "General Process Industries",
];

const specifications = [
  ["Size", '1/2"-36" (15 NB-900 NB)'],
  ["Pressure class", "150-2500"],
  ["Body materials", "CS / CI / SS / Alloys / Monel / Hastelloy / fabricated MOC"],
  ["Wedge / disc", "Solid / flexible wedge / parallel / double disc"],
  ["Design standards", "ASME B16.34 / BS 5352 / API 600 / API 603 / API 602 / IS 14346"],
  ["Face-to-face", "ASME B16.10 / DIN"],
  ["End connections", "Socket weld / butt weld / flanged / RTJ"],
  ["Butt-weld ends", "ASME B16.25"],
  ["Testing", "API 598"],
  ["Seating", "Metal-to-metal / metal-to-soft seat"],
  ["Actuation", "Manual / gear box / pneumatic / electrical actuator"],
  ["Special options", "Bellows sealed / cryogenic / high temperature / NACE MR-01-75"],
  ["End flange", "ASME B16.5 / B16.47 / DIN / BS / IS / JIS"],
];

const gallery = [
  {
    src: "/products/gate_valve/gate-valves-125x125.jpg",
    alt: "Industrial flanged gate valve with handwheel",
    caption: "Flanged gate valve with handwheel",
  },
  {
    src: "/products/gate_valve/Kinfe%20Edge%20Gate%20Valve.jpg",
    alt: "Blue knife-edge gate valve for pipeline isolation",
    caption: "Knife-edge gate valve",
  },
  {
    src: "/products/gate_valve/Through-Conduit-Gate-Valve-3.jpg",
    alt: "Through-conduit gate valve with flanged ends and gearbox",
    caption: "Through-conduit gate valve",
  },
];

export default function GateValve() {
  return (
    <>
      <Header />
      <main className="product-page gate-valve-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Industrial valves</p>
              <h1>Gate<br /><em>valves.</em></h1>
              <p className="product-lead">
                Reliable industrial gate valves for flow isolation.
              </p>
              <p className="product-hero-note">
                Designed for dependable on/off service in process and pipeline
                applications.
              </p>
            </div>
            <div className="product-hero-image gate-valve-hero-image">
              <Image
                src="/products/gate_valve/Through-Conduit-Gate-Valve-3.jpg"
                alt="Industrial through-conduit gate valve"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        <section className="product-intro section">
          <div className="container product-intro-grid">
            <div>
              <p className="eyebrow dark-eyebrow">Reliable flow isolation</p>
              <h2>Reliable isolation.<br /><em>Industrial service.</em></h2>
            </div>
            <p>
              SGM Corporations supplies industrial Gate Valves designed for
              reliable and efficient on/off flow isolation in process and
              pipeline applications. Gate valves are suitable where the valve
              is generally required to operate in a fully open or fully closed
              position, with configurations available to suit application and
              operating requirements.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section gate-valve-principle" aria-labelledby="gate-valve-principle-title">
          <div className="container product-intro-grid">
            <div>
              <p className="eyebrow dark-eyebrow">How it works</p>
              <h2 id="gate-valve-principle-title">Gate valve<br /><em>working principle.</em></h2>
            </div>
            <div className="gate-valve-principle-copy">
              <p>
                A gate valve operates by moving a gate vertically into or out
                of the fluid flow path. When fully open, the gate is lifted
                clear of the flow passage, providing a substantially
                unobstructed path and low pressure loss. When closed, the gate
                moves against the seats to isolate the pipeline.
              </p>
              <p>
                Gate valves are primarily intended for isolation service rather
                than continuous throttling or flow regulation.
              </p>
            </div>
          </div>
        </section>

        <section className="bearing-advantages section gate-valve-types" aria-labelledby="gate-valve-types-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Configurations for your application</p>
              <h2 id="gate-valve-types-title">Types of gate <em>valves.</em></h2>
            </div>
            <div className="holder-feature-grid gate-valve-type-grid">
              {types.map((type, index) => (
                <article className="holder-feature" key={type}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{type}</p>
                </article>
              ))}
            </div>
            <p className="butterfly-specifications-note">
              The appropriate configuration depends on pressure, temperature,
              fluid characteristics, installation conditions and operating
              requirements.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section gate-valve-features" aria-labelledby="gate-valve-features-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Designed for industrial service</p>
              <h2 id="gate-valve-features-title">Key <em>features.</em></h2>
            </div>
            <div className="holder-feature-grid gate-valve-feature-grid">
              {features.map((feature, index) => (
                <article className="holder-feature" key={feature}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="butterfly-specifications section gate-valve-specifications" aria-labelledby="gate-valve-specifications-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product details</p>
              <h2 id="gate-valve-specifications-title">Specifications.</h2>
            </div>
            <div className="butterfly-specifications-scroll" role="region" aria-label="Gate valve specifications" tabIndex={0}>
              <table className="butterfly-specifications-table">
                <caption>Gate valve specifications</caption>
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
              Confirm applicable standards, materials, ratings and options
              against the required service and technical specification.
            </p>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="gate-valve-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 id="gate-valve-applications-title">For industrial<br /><em>flow isolation.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Gate valves are widely used for pipeline and process isolation
                across industries such as:
              </p>
              <ul className="application-list">
                {applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bearing-gallery section gate-valve-gallery" aria-labelledby="gate-valve-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Gate valve range</p>
              <h2 id="gate-valve-gallery-title">Isolation for<br /><em>demanding systems.</em></h2>
            </div>
            <div className="bearing-gallery-grid gate-valve-gallery-grid">
              {gallery.map((image) => (
                <figure className="bearing-gallery-item gate-valve-gallery-item" key={image.src}>
                  <ProductImageViewer
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="gate-valve-contact-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Talk to our team</p>
              <h2 id="gate-valve-contact-title">Discuss your<br /><em>requirement.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Contact us for Gate Valve enquiries, technical specifications
                and quotations. Share your service and operating requirements
                to discuss a suitable configuration.
              </p>
              <Link className="button button-primary" href="/contact">
                Discuss your requirement <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer asset={(name: string) => `/photos/${name}`} />
    </>
  );
}