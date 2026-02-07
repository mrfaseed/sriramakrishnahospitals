"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll effect for navbar and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      const scrolled = window.scrollY > 10;

      setIsScrolled(scrolled);
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsGalleryOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsGalleryOpen(false);
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="tel:+918056390983" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span>+91 80563 90983</span>
            </a>
            <a href="mailto:info@sriramakrishnahospital.com" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>info@sriramakrishnahospital.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="logo" onClick={closeMenu}>
            <Image
              src="/Navbar-logo.png"
              alt="Sri Ramakrishna Hospital"
              width={300}
              height={72}
              className="nav-logo-img"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* Mobile Menu Header */}
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-logo" onClick={closeMenu}>
                <Image
                  src="/Navbar-logo.png"
                  alt="Sri Ramakrishna Hospital"
                  width={220}
                  height={55}
                  className="nav-logo-img-mobile"
                />
              </Link>
              <button
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="nav-links">
              <li><Link href="/" onClick={closeMenu}>Home</Link></li>
              <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link href="/service" onClick={closeMenu}>Services</Link></li>
             {/* <li><Link href="/doctors" onClick={closeMenu}>Doctors</Link></li> */}

              <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
              <li><Link href="/schemes" onClick={closeMenu}>Schemes</Link></li>
            </ul>

            {/* Mobile Contact Info */}
            <div className="mobile-contact-section">
              <a href="tel:+918056390983" className="mobile-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <span>+91 80563 90983</span>
              </a>
            </div>

            {/* CTA Button 
            <Link href="/contact" className="nav-cta" onClick={closeMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
              <span>Book Appointment</span>
            </Link>
            */}
          </div>

          {/* Hamburger Menu Button - Static SVG icon, no animation */}
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
