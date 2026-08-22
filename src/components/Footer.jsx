import Image from "next/image";

export default function Footer({ asset }) {
  return <footer className="site-footer">
    <div className="container footer-inner"><Image src={asset("headerLogo_4tYq.png")} alt="SGM Corporations" width={136} height={54} />
    <p>Industrial supply, made dependable.</p>
    <p>© {new Date().getFullYear()} SGM Corporations</p>
    </div>
    </footer>;
}