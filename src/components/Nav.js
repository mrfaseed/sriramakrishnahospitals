"use client";
import Link from 'next/link';
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
            <a href="tel:04222222222" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span>0422 222 2222</span>
            </a>
            <a href="mailto:info@sriramakrishnahospital.com" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>info@sriramakrishnahospital.com</span>
            </a>
          </div>
          <div className="top-bar-right">
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" /></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="logo" onClick={closeMenu}>
            <div className="logo-mark">
              <span>SH</span>
            </div>
            <div className="logo-text">
              <span className="logo-title">SRIRAMAKRISHNA</span>
              <span className="logo-subtitle">HOSPITAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* Mobile Menu Header */}
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-logo" onClick={closeMenu}>
                <div className="logo-mark">
                  <span>SH</span>
                </div>
                <div className="logo-text">
                  <span className="logo-title">SRIRAMAKRISHNA</span>
                  <span className="logo-subtitle">HOSPITAL</span>
                </div>
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
              <li><Link href="/doctors" onClick={closeMenu}>Doctors</Link></li>
              <li><Link href="/facilities" onClick={closeMenu}>Facilities</Link></li>
              <li
                className="dropdown"
                onMouseEnter={() => setIsGalleryOpen(true)}
                onMouseLeave={() => setIsGalleryOpen(false)}
              >
                <button
                  className="dropdown-trigger"
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  aria-expanded={isGalleryOpen}
                >
                  <span>Gallery</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="12" height="12" className={`dropdown-icon ${isGalleryOpen ? 'open' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <ul className={`dropdown-menu ${isGalleryOpen ? 'show' : ''}`}>
                  <li><Link href="/gallery/main" onClick={closeMenu}>Main Hospital Gallery</Link></li>
                  <li><Link href="/gallery/speciality" onClick={closeMenu}>Speciality Clinic</Link></li>
                  <li><Link href="/gallery/porur" onClick={closeMenu}>Porur Clinic</Link></li>
                  <li><Link href="/gallery/rama" onClick={closeMenu}>Rama Rau Gallery</Link></li>
                </ul>
              </li>
              <li><Link href="/branches" onClick={closeMenu}>Branches</Link></li>
            </ul>

            {/* Mobile Contact Info */}
            <div className="mobile-contact-section">
              <a href="tel:04222222222" className="mobile-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <span>0422 222 2222</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className="nav-cta" onClick={closeMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
              <span>Book Appointment</span>
            </Link>
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
