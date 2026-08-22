import Image from "next/image";

export default function Services({ asset, services }) {
  return <section className="services section" id="products" aria-labelledby="products-title">
    <div className="container">
        <div className="section-heading">
            <div>
                <p className="eyebrow dark-eyebrow">Our capabilities</p>
                <h2 id="products-title">Built around<br /><em>your requirements.</em></h2>
            </div>
            <p>From standard supply to specialized requirements, we help you keep procurement clear and projects on schedule.</p>
            </div>
            <div className="text-center mb-5">
                <p className="text-5xl font-bold">Our Products</p>
                <p className="font-medium text-xl">We supply Electrical & Mechanical Industrial Products, Our Major Products are:</p>
            </div>
            <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}>
                <div className="service-image"><Image src={asset(service.image)} alt={`${service.title} in an industrial setting`} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="service-content"><span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a>
            </div></article>)}
        </div>
    </div>
    </section>;
}