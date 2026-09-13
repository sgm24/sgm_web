import Image from "next/image";

export default function Hero({ asset }) {
  return <section className="hero" aria-labelledby="hero-title">
    <Image className="hero-image" src={asset("power-generation.jpg")} alt="Industrial energy and process facility at dusk" fill priority quality={90} sizes="100vw" />
    <div className="hero-overlay" />
        <div className="container hero-content">
            <h1 id="hero-title">Assuring you<br /><em>the best.</em></h1>
            <p className="hero-copy">Industrial valves, carbon products and engineered supply for the systems that keep industry moving.</p>
                <div className="hero-actions"><a className="button button-primary" href="#products">Explore our products <span>→</span></a>
                    <a className="text-link" href="#contact">Talk to an engineer <span>↗</span></a>
                </div>
            </div>
            <div className="hero-meta">
                <span>01</span>
                <span className="hero-line" />
                    <span>03</span>
                <span className="hero-meta-label">Industrial solutions</span>
            </div>
            </section>;
}