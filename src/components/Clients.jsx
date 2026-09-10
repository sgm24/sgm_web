import Image from "next/image";

export default function Clients({ asset, clients }) {
    const loopedClients = [...clients, ...clients];

  return <section className="clients section" aria-labelledby="clients-title">
    <div className="container">
        <div className="clients-heading">
            <p className="eyebrow dark-eyebrow">Trusted by industry</p>
            <h2 id="clients-title">Our clients</h2>
            <p>Long-term relationships built on dependable supply and straight answers.</p>
            </div>
            <div className="client-grid">
                <div className="client-track">
                    {loopedClients.map(([image, name], index) =>
                        <div className="client-logo" key={`${name}-${index}`} aria-hidden={index >= clients.length}>
                            <Image src={asset(image)} alt={name} width={190} height={88} quality={90} />
                        </div>)}
                </div>
            </div>
        </div>
    </section>;
}