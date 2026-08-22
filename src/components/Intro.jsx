export default function Intro() {
  return <section className="intro section" id="about" aria-labelledby="intro-title">
    <div className="container intro-grid">
        <div>
            <p className="eyebrow dark-eyebrow">What we do</p>
            <h2 id="intro-title">The right component<br /><em>for every process.</em></h2>
        </div>
        <div className="intro-text">
            <p>SGM Corporations is a trusted supplier of electrical and mechanical industrial products, providing reliable trading, sourcing, and logistics solutions for process industries.</p>
            <p>As exclusive agents for selected leading manufacturers and process industry suppliers with a global presence, we help businesses access quality industrial products and dependable supply solutions.</p>
            <p>Our flexible approach, strong industry network, and efficient supply chain capabilities enable us to handle complex and demanding requirements while delivering reliable service to our customers.</p>
            <a className="underlined-link" href="#contact">Meet SGM Corporations <span>↗</span></a>
        </div>
        </div>
        </section>;
}