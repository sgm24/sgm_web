import Image from "next/image";

export default function Industries({ asset }) {
  return <section className="industries section" id="industries" aria-labelledby="industries-title">
    <div className="container industry-grid">
        <div className="industry-image"><Image src={asset("Marine-home_4tYq.png")} alt="Offshore marine platform and support vessels" fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
    <div className="industry-copy">
        <p className="eyebrow dark-eyebrow">Where we work</p>
        <h2 id="industries-title">Ready for the<br /><em>real world.</em></h2>
        <p>Our products support the environments where precision, reliability and continuity matter most.</p>
        <ul><li>Process &amp; chemical plants</li><li>Power generation</li><li>Oil &amp; gas and marine</li><li>Steel, mining &amp; infrastructure</li></ul>
        <a className="button button-dark" href="#contact">Discuss your project <span>→</span></a>
    </div>
    </div>
    </section>;
}