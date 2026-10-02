import Image from "next/image";

export default function Footer({ asset }) {
  const logoSrc = asset ? asset("400dpiLogoCropped.png") : "/photos/400dpiLogoCropped.png";

  return <footer className="site-footer">
    <div className="container footer-inner"><Image src={logoSrc} alt="SGM Corporations" width={136} height={54} />
    <p>Industrial supply, made dependable.</p>
    <p>© {new Date().getFullYear()} SGM Corporations</p>
    </div>
    </footer>;
}