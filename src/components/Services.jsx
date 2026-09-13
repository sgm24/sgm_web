"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function scrollToCard(track, direction) {
    if (!track) return;

    const card = track.querySelector(".service-card");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextScroll = track.scrollLeft + direction * step;
    const targetScroll = nextScroll > maxScroll ? 0 : nextScroll < 0 ? maxScroll : nextScroll;

    track.scrollTo({ left: targetScroll, behavior: "smooth" });
}

export default function Services({ services }) {
    const trackRef = useRef(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const interval = window.setInterval(() => {
            if (!isPausedRef.current) scrollToCard(trackRef.current, 1);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

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
            <div
                className="service-carousel"
                onMouseEnter={() => { isPausedRef.current = true; }}
                onMouseLeave={() => { isPausedRef.current = false; }}
                onFocus={() => { isPausedRef.current = true; }}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) isPausedRef.current = false;
                }}
            >
                <div className="service-viewport">
                    <div className="service-grid" ref={trackRef} aria-label="Our products">
                        {services.map((service) => <article className="service-card" key={service.number}>
                <div className="service-image"><Image src={`/photos/${service.image}`} alt={`${service.title} in an industrial setting`} fill quality={90} sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="service-content"><span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a>
            </div></article>)}
                    </div>
                </div>
                <div className="service-controls" aria-label="Product carousel controls">
                    <button type="button" onClick={() => scrollToCard(trackRef.current, -1)} aria-label="Show previous product">←</button>
                    <button type="button" onClick={() => scrollToCard(trackRef.current, 1)} aria-label="Show next product">→</button>
                </div>
            </div>
        </div>
    </section>;
}