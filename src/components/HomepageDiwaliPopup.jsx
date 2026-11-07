"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function HomepageDiwaliPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const buttons = dialogRef.current.querySelectorAll("button:not(:disabled)");
      const firstButton = buttons[0];
      const lastButton = buttons[buttons.length - 1];

      if (event.shiftKey && document.activeElement === firstButton) {
        event.preventDefault();
        lastButton.focus();
      } else if (!event.shiftKey && document.activeElement === lastButton) {
        event.preventDefault();
        firstButton.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="diwali-popup-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <section
        className="diwali-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="diwali-popup-title"
        aria-describedby="diwali-popup-message"
        ref={dialogRef}
      >
        <div className="diwali-popup-spark diwali-popup-spark-left" aria-hidden="true">✦</div>
        <div className="diwali-popup-spark diwali-popup-spark-right" aria-hidden="true">✧</div>
        <button
          className="diwali-popup-close"
          type="button"
          aria-label="Close Diwali greeting"
          onClick={() => setIsOpen(false)}
          ref={closeButtonRef}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="diwali-popup-logo">
          <Image
            src="/photos/400dpiLogoCropped.png"
            alt="SGM Corporations"
            width={168}
            height={66}
            priority
          />
        </div>
        <p className="diwali-popup-eyebrow">A little light, a lot of joy</p>
        <h2 id="diwali-popup-title">Happy Diwali</h2>
        <p className="diwali-popup-message" id="diwali-popup-message">
          May the festival of lights bring happiness, prosperity, and new beginnings to you and your loved ones.
        </p>

        <div className="diwali-popup-diyas" aria-hidden="true">
          {[0, 1, 2].map((diya) => (
            <svg key={diya} viewBox="0 0 64 64" fill="none">
              <path d="M32 10c-7 8-7 14 0 18 7-4 7-10 0-18Z" fill={`url(#diwali-flame-${diya})`} />
              <path d="M12 37c5 11 13 16 20 16s15-5 20-16H12Z" fill={`url(#diwali-diya-${diya})`} />
              <path d="M12 37c10 5 30 5 40 0" stroke="#FFF0C2" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id={`diwali-flame-${diya}`} x1="32" y1="10" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF6C5" />
                  <stop offset="1" stopColor="#FF9D37" />
                </linearGradient>
                <linearGradient id={`diwali-diya-${diya}`} x1="12" y1="37" x2="52" y2="53" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE08A" />
                  <stop offset="1" stopColor="#D87532" />
                </linearGradient>
              </defs>
            </svg>
          ))}
        </div>
        <button className="diwali-popup-cta" type="button" onClick={() => setIsOpen(false)}>
          Celebrate with us
          <span aria-hidden="true">→</span>
        </button>
        <p className="diwali-popup-signoff">With warm wishes, SGM Corporations</p>
      </section>
    </div>,
    document.body,
  );
}
