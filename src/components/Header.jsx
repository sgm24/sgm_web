"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

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
            <Link href="/#vision">Vision and Mission</Link>
            <Link href="/#products">Products</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>
      {/* <a className="header-call" href="tel:+919850339010"><span aria-hidden="true">↗</span> Call us</a> */}
    </>
  );
}