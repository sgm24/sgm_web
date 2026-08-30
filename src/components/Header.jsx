import Image from "next/image";
import Link from "next/link";

export default function Header({ asset }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="SGM Corporations home">
            <Image src={asset("headerLogo_4tYq.png")} alt="SGM Corporations" width={168} height={66} priority />
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/" className="active">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/#products">Products</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>
      <a className="header-call" href="tel:+919850339010"><span aria-hidden="true">↗</span> Call us</a>
    </>
  );
}