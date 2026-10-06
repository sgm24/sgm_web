"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ProductImageViewer({ src, alt, sizes, unoptimized = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="product-image-viewer-trigger"
        type="button"
        aria-label={`View full-size image: ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} fill sizes={sizes} unoptimized={unoptimized} />
      </button>
      {isOpen && createPortal(
        <div
          className="product-image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Full-size image: ${alt}`}
        >
          <button
            className="product-image-lightbox-backdrop"
            type="button"
            aria-label="Close image preview"
            onClick={() => setIsOpen(false)}
          />
          <button
            className="product-image-lightbox-close"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <div className="product-image-lightbox-content">
            <div className="product-image-lightbox-image">
              <Image src={src} alt={alt} fill sizes="100vw" unoptimized={unoptimized} />
            </div>
            <p>{alt}</p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
