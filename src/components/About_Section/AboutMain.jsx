import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

const asset = (name) => `/photos/${name}`;

const productList = [
  "Gate Valve",
  "Globe & Check Valves (High Pressure & Pressure Seal Type)",
  "Ball Valves (Metal to Metal Seated & Soft Seated)",
  "Double Block & Bleed Ball Valves",
  "Butterfly Valves (Metal to Metal Seat & Triple Offset Design)",
  "Dual Plate & Single Plate Check Valves",
  "Diaphragm, Sluice & Safety valves as per client-specific requirements",
];

export default function AboutMain() {
  return (
    <>
      <Header asset={asset} />
      <main className="about-page">
        <section className="about-hero">
          <div className="container about-hero-inner">
            <p className="eyebrow">About SGM Corporations</p>
            <h1>
              About <span>Us</span>
            </h1>
            <div className="about-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>|</span>
              <span>About Us</span>
            </div>
          </div>
        </section>

        <section className="section about-intro">
          <div className="container about-intro-card">
            <div className="about-intro-header">
              <p className="dark-eyebrow text-2xl font-bold">SGM Corporations</p>
              <h3>is an industrial solutions and supply partner serving process industries with a range of Electrical &amp; Mechanical products</h3>
            </div>

            <div className="about-copy">
              <p>
                We work closely with customers and leading manufacturers to provide reliable products, technical solutions and responsive supply support for demanding industrial applications.
              </p>
              <p>
                SGM Corporations represents selected leading manufacturers and process-industry solution providers, helping customers access quality products, dependable technical support and efficient supply-chain solutions.
              </p>
              <p>
                Our solutions cater to industries such as Sugar Industries, Power Industries, Steel Industries, Cement Industries and other Process Industries, where product reliability and timely availability are critical
              </p>
              <p>
                With strong industry knowledge, sourcing capabilities and logistics expertise, we are committed to delivering the right product, at the right time, with consistent service and support.
              </p>
              <p>
                Our strength lies in understanding industrial requirements and providing dependable solutions from product selection to delivery.
              </p>
            </div>

            <div className="about-product-list">
              <p className="mini-heading">Our wide range of products comprises of</p>
              <ul className="product-list">
                {productList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="container about-cta-inner">
            <span className="about-badge">Trusted by industry leaders</span>
            <h3>Flow-control solutions, engineered for reliability.</h3>
            <a className="button button-primary" href="tel:+919850339010">
              Talk to our team
            </a>
          </div>
        </section>
      </main>
      <Footer asset={asset} />
    </>
  );
}
