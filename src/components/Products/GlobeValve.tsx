import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";
import ProductImageViewer from "./ProductImageViewer";

const features = [
  "Precise flow regulation and throttling",
  "Reliable shut-off performance",
  "Robust industrial construction",
  "Suitable for high-pressure and high-temperature services",
  "Available in different body and trim materials",
  "Multiple pressure classes and size options",
  "Flanged, screwed or welded end connections as required",
  "Manual, gear-operated or actuated configurations",
  "Suitable for steam and process applications",
];

const types = [
  "Straight Pattern Globe Valve",
  "Angle Globe Valve",
  "Y-Pattern Globe Valve",
  "Forged Steel Globe Valve",
  "Bellows Seal Globe Valve",
  "Pressure Seal Globe Valve",
  "IBR & Non-IBR Globe Valves",
  "Manual and Actuated Globe Valves",
];

const applications = [
  "Sugar Industries",
  "Power Plants",
  "Steam & Boiler Systems",
  "Steel Industries",
  "Cement Plants",
  "Chemical & Process Industries",
  "Oil & Gas Applications",
  "Water & Utility Systems",
  "General Industrial Piping",
];

const specifications = [
  ["Size", '1/2"-20" (15 NB-500 NB)'],
  ["Pressure class", "150-2500"],
  ["Body materials", "CS / CI / SS / Alloys / Monel / Hastelloys"],
  ["Plug", "Parabolic, regulating, throttle and guide type"],
  ["Patterns", 'Straight "T", "Y" and angle type'],
  ["End connections", "Butt weld / flanged end / RTJ / screwed as required"],
  ["Butt-weld ends", "ASME B16.25"],
  ["Design", "ASME B16.34 / BS 1873"],
  ["Face-to-face", "ASME B16.10 / DIN"],
  ["Testing", "API 598 / BS 6755"],
  ["Seating", "Metal-to-metal / metal-to-soft seat"],
  ["Special options", "Bellows sealed / cryogenic / high temperature / bypass"],
  ["Actuation", "Manual / gear box / pneumatic / electrical actuator"],
];

const gallery = [
  {
    src: "/products/globe_valve/globe-valve-2.webp",
    alt: "Flanged industrial globe valve with handwheel",
    caption: "Flanged globe valve",
  },
  {
    src: "/products/globe_valve/IMG-20190723-WA0002.jpg",
    alt: "Two industrial globe valves in different configurations",
    caption: "Industrial globe valve configurations",
  },
  {
    src: "/products/globe_valve/Pressure%20Seal%20Globe%20valve%20.jpg",
    alt: "Pressure seal globe valve",
    caption: "Pressure seal globe valve",
  },
  {
    src: "/products/globe_valve/ksb-forged-globe-valves.jpg",
    alt: "Forged steel globe valve with handwheel",
    caption: "Forged steel globe valve",
  },
  {
    src: "/products/globe_valve/Globe%20valve-1.jpg",
    alt: "Globe valve with a cutaway view of the internal plug",
    caption: "Globe valve cutaway",
  },
];

export default function GlobeValve() {
  return (
    <>
      <Header />
      <main className="product-page globe-valve-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Industrial valves</p>
              <h1>Globe<br /><em>valves.</em></h1>
              <p className="product-lead">
                Precision flow control and reliable industrial shut-off.
              </p>
              <p className="product-hero-note">
                Built for controlled adjustment of flow across demanding
                process and utility applications.
              </p>
            </div>
            <div className="product-hero-image globe-valve-hero-image">
              <Image
                src="/products/globe_valve/globe-valve-2.webp"
                alt="Industrial flanged globe valve with handwheel"
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
              <p className="eyebrow dark-eyebrow">Precision flow control</p>
              <h2>Accurate regulation.<br /><em>Reliable shut-off.</em></h2>
            </div>
            <p>
              Globe Valves are industrial flow control valves designed for
              precise throttling, flow regulation and reliable shut-off in
              piping systems. Their linear-motion design allows controlled
              adjustment of fluid flow, making them suitable for applications
              where accurate flow regulation is required.
              <br /><br />
              SGM Corporations supplies industrial Globe Valves for demanding
              applications across process industries, including sugar, power,
              steel, cement, chemical and general industrial plants.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section globe-valve-service">
          <div className="container product-intro-grid">
            <div>
              <p className="eyebrow dark-eyebrow">Industrial service</p>
              <h2>Designed to<br /><em>throttle and regulate.</em></h2>
            </div>
            <div className="globe-valve-service-copy">
              <p>
                Globe valves are particularly suitable where flow needs to be
                regulated or throttled rather than simply switched fully ON or
                OFF. They are commonly used for steam, water, air, gas, oil and
                process fluids, depending on the valve material, trim and
                operating conditions.
              </p>
              <p>
                Construction and configuration can be selected according to
                the required pressure, temperature, media, size and service
                conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="bearing-advantages section globe-valve-features" aria-labelledby="globe-valve-features-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Designed for industrial service</p>
              <h2 id="globe-valve-features-title">Key <em>features.</em></h2>
            </div>
            <div className="holder-feature-grid globe-valve-feature-grid">
              {features.map((feature, index) => (
                <article className="holder-feature" key={feature}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bearing-advantages section globe-valve-types" aria-labelledby="globe-valve-types-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Configurations for your application</p>
              <h2 id="globe-valve-types-title">Globe valve <em>types.</em></h2>
            </div>
            <div className="holder-feature-grid globe-valve-type-grid">
              {types.map((type, index) => (
                <article className="holder-feature" key={type}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{type}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="butterfly-specifications section globe-valve-specifications" aria-labelledby="globe-valve-specifications-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product details</p>
              <h2 id="globe-valve-specifications-title">Typical <em>specifications.</em></h2>
            </div>
            <div className="butterfly-specifications-scroll" role="region" aria-label="Globe valve specifications" tabIndex={0}>
              <table className="butterfly-specifications-table">
                <caption>Globe valve and pressure seal globe valve specifications</caption>
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
              Options and standards depend on valve type, size, rating and
              service. Confirm the final specification against operating
              requirements.
            </p>
          </div>
        </section>

        <section className="bearing-gallery section globe-valve-gallery" aria-labelledby="globe-valve-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Globe valve range</p>
              <h2 id="globe-valve-gallery-title">Built for precise<br /><em>flow regulation.</em></h2>
            </div>
            <div className="bearing-gallery-grid globe-valve-gallery-grid">
              {gallery.map((image, index) => (
                <figure
                  className={`bearing-gallery-item bearing-gallery-item-${index + 1}`}
                  key={image.src}
                >
                  <ProductImageViewer
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="product-applications section globe-valve-closing" aria-labelledby="globe-valve-applications-title">
          <div className="container globe-valve-closing-inner">
            <div className="product-applications-grid">
              <div>
                <p className="eyebrow">Applications</p>
                <h2 id="globe-valve-applications-title">Precise control<br /><em>across industries.</em></h2>
              </div>
              <div>
                <p className="product-applications-copy">
                  Globe Valves are widely used in:
                </p>
                <ul className="application-list">
                  {applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="product-applications-grid globe-valve-closing-cta" aria-labelledby="globe-valve-contact-title">
              <div>
                <p className="eyebrow">Talk to our team</p>
                <h2 id="globe-valve-contact-title">Discuss your<br /><em>requirement.</em></h2>
              </div>
              <div>
                <p className="product-applications-copy">
                  Contact us for Globe Valve enquiries, technical specifications
                  and quotations. Share your media, pressure, temperature and
                  operating requirements to discuss a suitable configuration.
                </p>
                <Link className="button button-primary" href="/contact">
                  Discuss your requirement <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer asset={(name: string) => `/photos/${name}`} />
    </>
  );
}
