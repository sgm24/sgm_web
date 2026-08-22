import Image from "next/image";

export default function Header({ asset }) {
  return (
    <>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="#top" aria-label="SGM Corporations home"><Image src={asset("headerLogo_4tYq.png")} alt="SGM Corporations" width={168} height={66} priority /></a>
        <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#top">Home</a><a href="#about">About us</a><a href="#products">Products</a><a href="#industries">Industries</a><a href="#contact">Contact</a></nav>
      </div></header>
      <a className="header-call" href="tel:+919850339010"><span aria-hidden="true">↗</span> Call us</a>
    </>
  );
}