import Image from "next/image";

export default function Industries({ asset }) {
  return <section className="industries section" id="industries" aria-labelledby="industries-title">
    <div className="container industry-grid">
        <div className="industry-image"><Image src={asset("Marine-home_4tYq.png")} alt="Offshore marine platform and support vessels" fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
    <div className="industry-copy">
        <p className="eyebrow dark-eyebrow">What We Offer</p>
        <h2 id="industries-title">High Quality<br /><em>Cost-Effective products</em></h2>
        <p>Our qualified engineers provide high-quality, cost-effective products, engineering solutions, and technical support.</p>
        <p>We focus on continuous improvement and product innovation to meet our customers' changing needs.</p>
        <p>As an ISO 9001:2015 certified company, we are committed to quality and customer satisfaction.</p>

        <ul>
            <li>Customer Support</li>
            <li>Advanced Technology</li>
            <li>On-Time Delivery</li>
            <li>Trust</li>
        </ul>
        <a className="button button-dark" href="#contact">Discuss your project <span>→</span></a>
    </div>
    </div>
    </section>;
}