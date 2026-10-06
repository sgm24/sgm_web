import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";
import ProductImageViewer from "./ProductImageViewer";

const features = [
  "Double isolation with integrated bleed function",
  "Compact and space-saving construction",
  "Reduced number of potential leakage points",
  "Reliable shut-off for critical process applications",
  "Bleed connection for pressure release and isolation verification",
  "Suitable for high-pressure and demanding process services",
  "Available in different materials, sizes and end connections",
  "Suitable for instrument and process isolation applications",
  "Configurations available as per application and customer requirements",
];

const applications = [
  "Oil & Gas Pipelines",
  "Refineries and Petrochemical Plants",
  "Chemical Processing Plants",
  "Power Generation Plants",
  "Process Industries",
  "Metering and Custody Transfer Systems",
  "Chemical Injection Systems",
  "Sampling and Drain Systems",
  "Instrumentation Hook-ups",
  "Pipeline and Equipment Isolation",
];

const specifications = [
  ["Type", "Double Block & Bleed Ball Valve"],
  ["Design", "Double isolation with integrated vent / bleed connection"],
  ["Primary purpose", "Critical process isolation and safe maintenance"],
  ["Pressure service", "High-pressure and demanding industrial applications"],
  ["Materials", "Carbon steel, stainless steel, alloy steel and other customer-specified materials"],
  ["Size range", "Designed as per application and process requirements"],
  ["End connections", "Flanged, threaded or other customer-specified connections"],
  ["Service suitability", "Oil & gas, petrochemical, chemical, power, refinery and process industries"],
  ["Isolation feature", "Two independent seats with intermediate bleed / vent"],
  ["Verification", "Bleed connection allows pressure release and isolation confirmation"],
  ["Operation", "Manual or actuator-assisted as per specification"],
  ["Selection", "Configured according to pressure class, temperature, material and process conditions"],
];

const gallery = [
  {
    src: "/products/block_bleed_valve/DBB%20Valve.png",
    alt: "Double block and bleed ball valve assembly with integrated bleed connection",
    caption: "Double block and bleed valve configuration",
    className: "butterfly-gallery-item butterfly-gallery-item-product",
  },
  {
    src: "/products/block_bleed_valve/DBB.jpg",
    alt: "Industrial DBB ball valves arranged for process service",
    caption: "Industrial DBB valve arrangement",
    className: "butterfly-gallery-item butterfly-gallery-item-detail",
  },
  {
    src: "/products/block_bleed_valve/Double%20Block%20%26%20Bleed%20Ball%20Valve.jpg",
    alt: "Double block and bleed ball valve detail view",
    caption: "DBB ball valve detail view",
    className: "butterfly-gallery-item butterfly-gallery-item-detail",
  },
];

export default function DoubleBlockBleedBall() {
  return (
    <>
      <Header />
      <main className="product-page double-block-bleed-page">
        <section className="product-hero">
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Industrial valves</p>
              <h1>Double Block &amp; Bleed<br /><em>Ball Valves.</em></h1>
              <p className="product-lead">
                Reliable process isolation with integrated bleed for safe maintenance.
              </p>
              <p className="product-hero-note">
                Designed for critical service applications where positive shut-off, pressure isolation and safe venting are essential.
              </p>
            </div>
            <div className="product-hero-image butterfly-hero-image">
              <Image
                src="/products/block_bleed_valve/DBB%20Valve.png"
                alt="Double block and bleed ball valve with bleed connection and flanged ends"
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
              <p className="eyebrow dark-eyebrow">Critical isolation</p>
              <h2>Double isolation.<br /><em>Safe and efficient maintenance.</em></h2>
            </div>
            <p>
              Double Block and Bleed (DBB) Valves are designed for critical process isolation applications where reliable shut-off, pressure isolation and safe maintenance are required. These valves integrate two independent isolation barriers with an intermediate bleed or vent connection, providing a compact and efficient alternative to conventional multiple-valve arrangements.
              <br /><br />
              DBB Valves are widely used in oil &amp; gas, petrochemical, chemical, power generation, refineries, process industries and instrumentation systems where positive and verifiable isolation is important.
              <br /><br />
              SGM Corporations supplies Double Block and Bleed Valves for industrial applications with configurations selected according to the required size, pressure class, temperature, material, connection and process conditions.
            </p>
          </div>
        </section>

        <section className="bearing-advantages section" aria-labelledby="dbb-features-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Key advantages</p>
              <h2 id="dbb-features-title">Key <em>features.</em></h2>
            </div>
            <div className="holder-feature-grid butterfly-feature-grid">
              {features.map((feature, index) => (
                <article className="holder-feature" key={feature}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="butterfly-specifications section" aria-labelledby="dbb-specifications-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product information</p>
              <h2 id="dbb-specifications-title">Specifications.</h2>
            </div>
            <div className="butterfly-specifications-scroll" role="region" aria-label="Double block and bleed valve specifications" tabIndex={0}>
              <table className="butterfly-specifications-table">
                <caption>Double block and bleed valve specifications</caption>
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
              Final configuration depends on the application, service conditions and technical specification requirements.
            </p>
          </div>
        </section>

        <section className="product-applications section" aria-labelledby="dbb-applications-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 id="dbb-applications-title">For critical<br /><em>industrial systems.</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Double Block and Bleed Valves are commonly used for critical isolation points in oil &amp; gas systems, refineries, chemical processing plants, power generation facilities, instrumentation hook-ups and process applications where safe shutdown and leak-tight isolation are required.
                <br /><br />
                SGM Corporations supplies DBB Valves selected according to required size, pressure class, temperature, material, connection and process conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="bearing-advantages section" aria-labelledby="dbb-applications-list-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Common service areas</p>
              <h2 id="dbb-applications-list-title">Typical <em>applications.</em></h2>
            </div>
            <div className="holder-feature-grid dbb-applications-grid">
              {applications.map((application, index) => (
                <article className="holder-feature" key={application}>
                  <span className="grade-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{application}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bearing-gallery section butterfly-gallery" aria-labelledby="dbb-gallery-title">
          <div className="container">
            <div className="product-section-heading">
              <p className="eyebrow dark-eyebrow">Product gallery</p>
              <h2 id="dbb-gallery-title">Built for reliable<br /><em>process isolation.</em></h2>
            </div>
            <div className="bearing-gallery-grid butterfly-gallery-grid">
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

        <section className="product-applications section" aria-labelledby="dbb-contact-title">
          <div className="container product-applications-grid">
            <div>
              <p className="eyebrow">Speak with our team</p>
              <h2 id="dbb-contact-title">Need a quote or<br /><em>technical guidance?</em></h2>
            </div>
            <div>
              <p className="product-applications-copy">
                Contact us for technical specifications, product selection and quotation support for your required double block and bleed valve configuration.
                <br /><br />
                <Link href="/contact" className="button">Contact SGM</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
