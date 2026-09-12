import Link from "next/link";

export default function VisionMission() {
  return (
    <main className="vision-mission-page">
      <section className="about-hero vision-mission-hero">
        <div className="container about-hero-inner">
          <p className="eyebrow">Our direction</p>
          <h1>Vision <span>&amp; Mission</span></h1>
          <div className="about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>|</span>
            <span>Vision &amp; Mission</span>
          </div>
        </div>
      </section>

      <section className="section vision-mission" aria-labelledby="vision-title">
        <div className="container">
          <div className="vision-mission-heading">
            <p className="eyebrow">Our direction</p>
            <h2 id="vision-title">Built for the work<br /><em>that keeps industry moving.</em></h2>
          </div>

          <div className="vision-mission-grid">
          <article className="vision-mission-card vision-card">
            <p className="vision-mission-label">01 / Our Vision</p>
            <h3>Trusted today.<br />Preferred for the long term.</h3>
            <p>To be a trusted and preferred industrial solutions partner, known for quality products, reliable service, and long-term customer relationships.</p>
          </article>

          <article className="vision-mission-card mission-card">
            <p className="vision-mission-label">02 / Our Mission</p>
            <h3>Reliable solutions.<br />Responsive partnerships.</h3>
            <p>Our mission is to provide reliable Electrical &amp; Mechanical industrial products and solutions that meet the needs of process industries. We focus on quality, prompt service, technical support, and dependable supply while building long-term partnerships with our customers and principals.</p>
          </article>
          </div>
        </div>
      </section>
    </main>
  );
}