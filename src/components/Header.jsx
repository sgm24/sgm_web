"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const productGroups = [
  {
    title: "Electrical Carbon Products",
    items: [
      "Carbon Brush",
      "Carbon Brush Holder",
      // "Carbon Brush Holder",
      "Components for Traction Application",
    ],
  },
  {
    title: "Mechanical Carbon Products",
    items: [
      "Carbon Stoker Bush",
      "Carbon Bush Bearing",
      "Carbon Seal",
      "Rotary Steam Joint",
      "Gland Packing Ring",
    ],
  },
  {
    title: "Industrial Valves",
    items: [
      "Butterfly Valves",
      "Ball Valves",
      "Gate Valves",
      "Globe Valve",
      "Double Block & Bleed Ball",
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenuRef = useRef(null);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setProductsOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="SGM Corporations home">
            <Image src="/photos/400dpiLogoCropped.png" alt="SGM Corporations" width={168} height={66} priority />
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/" className={pathname === "/" ? "active" : ""} aria-current={pathname === "/" ? "page" : undefined} onClick={scrollToTop}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""} aria-current={pathname === "/about" ? "page" : undefined} onClick={scrollToTop}>About Us</Link>
            <Link href="/visionmission" className={pathname === "/visionmission" ? "active" : ""} aria-current={pathname === "/visionmission" ? "page" : undefined}>Vision and Mission</Link>
            <div
              className="products-menu-wrap"
              ref={productsMenuRef}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={`products-trigger ${productsOpen ? "active" : ""}`}
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                onClick={() => setProductsOpen((isOpen) => !isOpen)}
              >
                Products
              </button>
              {productsOpen && (
                <div className="products-menu" id="products-menu" role="dialog" aria-label="Products menu">
                  <div className="products-menu-groups">
                    {productGroups.map((group, index) => (
                      <section className="products-menu-group" key={group.title}>
                        <span className="products-menu-number">0{index + 1}</span>
                        <h3>{group.title}</h3>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item}>
                              <Link href="/#products" onClick={() => setProductsOpen(false)}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""} aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
          </nav>
        </div>
      </header>
      {/* <a className="header-call" href="tel:+919850339010"><span aria-hidden="true">↗</span> Call us</a> */}
    </>
  );
}