import Footer from "../Footer";
import Header from "../Header";
import ContactForm from "./ContactForm";

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
              {/* <h2 id="contact-details-title">Find the right way <em>forward.</em></h2> */}
              <div className="contact-link-list">
                <a href="mailto:info@sgmcorporations.com">
                  <span className="contact-link-label">Email one</span>
                  info@sgmcorporations.com
                </a>
                <a href="mailto:sales@sgmcorporations.com">
                  <span className="contact-link-label">Email two</span>
                  sales@sgmcorporations.com
                </a>
                <a href="https://wa.me/919850339010?text=Hello%20SGM%20Corporations%2C%20I%20would%20like%20to%20know%20more." target="_blank">
                  <span className="contact-link-label">Phone one</span>
                  +91 98503 39010
                </a>
                <a href="https://wa.me/919823869010?text=Hello%20SGM%20Corporations%2C%20I%20would%20like%20to%20know%20more." target="_blank">
                  <span className="contact-link-label">Phone two</span>
                  +91 98238 69010
                </a>
                <a href="https://www.linkedin.com/in/sgm-corporations-a84b93187/" target="_blank" rel="noreferrer">
                  <span className="contact-link-label">LinkedIn</span>
                  SGM Corporations on LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
              <ContactForm />
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