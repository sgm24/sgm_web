import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const grades = [
  ["01", "Natural Graphite Class", "Natural graphite undergoes prolonged heat treatment to deliver high surface-speed performance. These grades can produce more commutator wear than electrographite, but offer long life and operational stability when correctly matched to the machine."],
  ["02", "Electrographite Class", "The most widely used class, electrographite is produced by converting carbon into graphite at temperatures up to 2500°C. Excellent thermal and electrical conductivity, resistance to burning and high purity make these grades suited to heavy overloads with low collector wear."],
  ["03", "Metal-Graphite Class", "These grades combine graphite with varying proportions of copper or silver. Graphite limits collector wear while the metal content supports the current density and cooling conditions of the application. They are used in slow-speed DC machines, slip rings, synchronous motors and high-current rotating collectors."],
  ["04", "Silver-Graphite Class", "Silver-graphite materials are primarily used in tachogenerators, measuring equipment and ship earthing applications where stable electrical contact and controlled wear are essential."],
  ["05", "Resin-Bonded Class", "Based on graphite with a resin bond, these grades have high electrical resistance and excellent commutating ability. Their current-carrying capacity is more limited, making careful application selection important."],
];

const applications = ["Slip ring and commutator motors", "Steel, cement and mining industries", "Cranes and fork lifts", "Steam and hydro exciters", "Pulp and paper mill motors and generators", "Shipping and wind generation", "Power generators and plastic industries", "All types of AC and DC motors"];

export default function CarbonBrush() {
  return <>
    <Header />
    <main className="product-page">
      <section className="product-hero"><div className="container product-hero-grid">
        <div className="product-hero-copy"><p className="eyebrow">01 / Electrical carbon products</p><h1>Carbon<br /><em>brushes.</em></h1><p className="product-lead">Reliable current collection for motors, generators and rotating electrical equipment.</p><p className="product-hero-note">A carbon brush is a motor or generator brush with carbon in its composition, whether that carbon is coke, lamp black or graphite.</p></div>
        <div className="product-hero-image"><Image src="/products/Carbon Brush Home.png" alt="Assorted industrial carbon brushes and brush assemblies" fill priority quality={90} sizes="(max-width: 800px) 100vw, 50vw" /></div>
      </div></section>
      <section className="product-intro section"><div className="container product-intro-grid"><div><p className="eyebrow dark-eyebrow">Choosing the right grade</p><h2>Performance begins<br /><em>with the material.</em></h2></div><p>Carbon brush performance depends on speed, voltage, current density, cooling, commutation and collector conditions. Our range covers the principal brush grades used across industrial electrical equipment, helping you specify a dependable fit for the machine.</p></div></section>
      <section className="product-grades section" aria-labelledby="grades-title"><div className="container"><div className="product-section-heading"><p className="eyebrow dark-eyebrow">Classes of brush grades</p><h2 id="grades-title">Made for the<br /><em>working conditions.</em></h2></div><div className="grade-grid">{grades.map(([number, title, text]) => <article className="grade-item" key={number}><span className="grade-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="product-applications section" aria-labelledby="applications-title"><div className="container product-applications-grid"><div><p className="eyebrow">Supply across industries</p><h2 id="applications-title">One source for<br /><em>many applications.</em></h2></div><div><p className="product-applications-copy">We supply carbon brushes and related assemblies for major applications and industries, from everyday motor maintenance to high-current collection and specialized rotating equipment.</p><ul className="application-list">{applications.map((application) => <li key={application}>{application}</li>)}</ul><Link className="button button-primary" href="/contact">Discuss your requirement <span>→</span></Link></div></div></section>
    </main>
    <Footer asset={(name) => `/photos/${name}`} />
  </>;
}