"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const carbonBrushImages = [
  ["Carbon Brush.2.png", "Carbon brush assembly with braided copper lead"],
  ["Carbon Brush.3.png", "Heavy-duty carbon brush with dual insulated leads"],
  ["Carbon Brush.4.png", "Carbon brush grade with braided cable terminals"],
  ["Carbon Brush 5.jpeg", "Carbon brush with black insulated connector and heavy cable"],
  ["Carbon Brush.6.png", "Set of carbon brush blocks in multiple dimensions"],
  ["CB6.jpg", "Carbon brush block with braided terminal cable"],
  ["CB7.jpg", "Industrial carbon brushes with copper lead connections"],
  ["IMG-20200213-WA0017 - Copy.jpg", "Carbon brush with ring terminal and cylindrical graphite core"],
  ["Silver CB3.jpeg", "Silver-graphite carbon brush pair with braided leads"],
  ["Carbon-Brush-Home.png", "Assorted industrial carbon brushes and assemblies"],
];

const galleryItemSizes = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5];

export default function CarbonBrushGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="holder-gallery-grid carbon-brush-gallery-grid">
        {carbonBrushImages.map(([src, alt], index) => {
          const imagePath = `/products/carbon_brush/${encodeURIComponent(src)}`;

          return (
            <figure
              className={`holder-gallery-item holder-gallery-item-${galleryItemSizes[index]} carbon-brush-gallery-item`}
              key={src}
            >
              <button
                className="carbon-brush-gallery-trigger"
                type="button"
                aria-label={`View full-size image: ${alt}`}
                onClick={() => setSelectedImage({ src: imagePath, alt })}
              >
                <Image
                  src={imagePath}
                  alt={alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  unoptimized={src === "CB7.jpg"}
                />
              </button>
              <figcaption>{alt}</figcaption>
            </figure>
          );
        })}
      </div>
      {selectedImage && (
        <div
          className="carbon-brush-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Full-size image: ${selectedImage.alt}`}
        >
          <button
            className="carbon-brush-lightbox-backdrop"
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
          />
          <button
            className="carbon-brush-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
          <div className="carbon-brush-lightbox-content">
            <div className="carbon-brush-lightbox-image">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                unoptimized={selectedImage.src.endsWith("/CB7.jpg")}
              />
            </div>
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
