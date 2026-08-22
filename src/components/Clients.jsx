import Image from "next/image";

export default function Clients({ asset, clients }) {
  return <section className="clients section" aria-labelledby="clients-title">
    <div className="container">
        <div className="clients-heading">
            <p className="eyebrow dark-eyebrow">Trusted by industry</p>
            <h2 id="clients-title">Our clients</h2>
            <p>Long-term relationships built on dependable supply and straight answers.</p>
            </div>
            <div className="client-grid">{clients.map(([image, name]) => 
                <div className="client-logo" key={name}><Image src={asset(image)} alt={name} width={190} height={88} /></div>)}
            </div>
        </div>
    </section>;
}