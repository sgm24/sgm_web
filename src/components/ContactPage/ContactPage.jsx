import Footer from "../Footer";
import Header from "../Header";

const asset = (name) => `/photos/${name}`;
const officeAddress = "GQ7H+85 Pune, Maharashtra";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-page-hero" aria-labelledby="contact-page-title">
          <div className="container contact-page-hero-inner">
            <p className="eyebrow">Start a conversation</p>
            <h1 id="contact-page-title">Let&apos;s build something <em>dependable.</em></h1>
            <p className="contact-page-intro">
              Reach out to the SGM Corporations team for product information, project support, or a conversation about your next requirement.
            </p>
          </div>
        </section>

        <section className="contact-page-details section" aria-labelledby="contact-details-title">
          <div className="container contact-page-grid">
            <div className="contact-page-links">
              <p className="eyebrow dark-eyebrow">Contact details</p>
              <h2 id="contact-details-title">Find the right way <em>forward.</em></h2>
              <div className="contact-link-list">
                <a href="mailto:YOUR-FIRST-EMAIL@example.com">
                  <span className="contact-link-label">Email one</span>
                  YOUR-FIRST-EMAIL@example.com
                </a>
                <a href="mailto:YOUR-SECOND-EMAIL@example.com">
                  <span className="contact-link-label">Email two</span>
                  YOUR-SECOND-EMAIL@example.com
                </a>
                <a href="tel:+0000000000">
                  <span className="contact-link-label">Phone one</span>
                  +00 00000 00000
                </a>
                <a href="tel:+0000000000">
                  <span className="contact-link-label">Phone two</span>
                  +00 00000 00000
                </a>
                <a href="https://www.linkedin.com/company/YOUR-LINKEDIN-PAGE" target="_blank" rel="noreferrer">
                  <span className="contact-link-label">LinkedIn</span>
                  SGM Corporations on LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="contact-map-wrap">
              <div className="contact-address">
                <p className="eyebrow dark-eyebrow">Visit our office</p>
                <h3>SGM Corporations</h3>
              </div>
              <iframe
                className="contact-map"
                title="SGM Corporations office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed&z=12`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer asset={asset} />
    </>
  );
}