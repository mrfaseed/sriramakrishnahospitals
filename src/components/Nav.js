import Link from 'next/link';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Hospital App</Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/service">Services</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/product">Products</Link></li>
      </ul>
    </nav>
  );
}
