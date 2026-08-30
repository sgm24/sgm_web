import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

const asset = (name) => `/sgm_ref_main/Industrial Valves & Carbon Graphite Products_files/${name}`;

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
            <p className="eyebrow">About SGM</p>
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
              <p className="dark-eyebrow">We are into</p>
              <h2>Sales &amp; Distributors of various product and services.</h2>
            </div>

            <div className="about-copy">
              <p>
                We are in to Sales &amp; Distributors of various products and services to your
                esteemed organization. We are an authorized distributor of Novel Valve India Pvt.
                Ltd. and supply a wide range of high-quality industrial valves throughout India and
                globally.
              </p>
              <p>
                Trusted by the industry for over two decades, Novel Valve offers innovative
                products and solutions that enhance safety, reliability and performance in
                flow-control systems across the globe.
              </p>
              <p>
                Our facilities, cutting-edge technology and unmatched skill come together to create
                state-of-the-art flow-control solutions. International safety, health and
                environment standards govern every phase of the manufacturing process.
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
