'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Home.css';

// SVG Icons
// SVG Icons
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const services = [
  {
    id: 'angiogram',
    title: 'Angiogram',
    description: 'A diagnostic imaging test that uses X-rays to view your heart\'s blood vessels and chambers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    category: 'diagnostic',
    hasPage: true
  },
  {
    id: 'angioplasty',
    title: 'Angioplasty',
    description: 'A procedure to open blocked or narrowed coronary arteries using a balloon catheter and stent.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    category: 'interventional'
  },
  {
    id: 'congenital-heart',
    title: 'Congenital Heart Defects',
    subtitle: 'ASD / VSD Closure',
    description: 'Surgical correction of heart defects present from birth, including hole-in-heart repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    category: 'surgery'
  },
  {
    id: 'balloon-valvuloplasty',
    title: 'Balloon Valvuloplasty',
    subtitle: 'PTMC – Valve Opening Procedure',
    description: 'A minimally invasive procedure to open narrowed heart valves using a balloon catheter.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    category: 'interventional'
  },
  {
    id: 'pacemaker',
    title: 'Pacemaker Implantation Surgery',
    description: 'Implantation of a small device that helps regulate abnormal heart rhythms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    category: 'surgery'
  },
  {
    id: 'holter-monitoring',
    title: '24-Hour Holter Monitoring',
    subtitle: 'Continuous Heart Rhythm Recording',
    description: 'Continuous ECG monitoring for 24-48 hours to detect irregular heartbeats and arrhythmias.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    category: 'diagnostic'
  }
];

const carouselImages = [
  { src: '/5U1A4809.JPG', alt: 'Sri Ramakrishna Hospitals - Patient Care' },
  { src: '/5U1A4804.JPG', alt: 'Sri Ramakrishna Hospitals - Reception Area' },
  { src: '/008.JPG', alt: 'Sri Ramakrishna Hospitals - Hospital Exterior' },
  { src: '/full_hospital_1.jpg', alt: 'Sri Ramakrishna Hospitals - Hospital Exterior' },
  { src: '/5U1A4811.JPG', alt: 'Sri Ramakrishna Hospitals - Healthcare Services' },
  { src: '/5U1A4807.JPG', alt: 'Sri Ramakrishna Hospitals - Medical Facility' },
  { src: '/5U1A4826.JPG', alt: 'Sri Ramakrishna Hospitals - Modern Equipment' },
  { src: '/5U1A4832_new.JPG', alt: 'Sri Ramakrishna Hospitals - Medical Team' },
  { src: '/5U1A4835.JPG', alt: 'Sri Ramakrishna Hospitals - Hospital Exterior' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='home-container'>
      {/* Hero Section - Full Viewport */}
      <section className='home-hero-section'>
        {/* Background Images */}
        <div className='home-hero-bg'>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`home-hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={85}
                sizes="100vw"
                className="home-hero-img"
              />
            </div>
          ))}
        </div>

        {/* Lighter Overlay for Text Visibility */}
        <div className='home-hero-overlay'></div>

        {/* Main Content */}
        <div className='home-hero-content'>
          <span className='home-hero-tagline'>
            <svg className='heart-icon' viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Centre of Excellence in Cardiac Care
          </span>
          <h1 className='home-hero-headline'>
            Advanced Heart Care, <span>Expert Cardiologists</span>
          </h1>
          <p className='home-hero-subtext'>
            Sri Ramakrishna Hospitals is a leading cardiac care center offering
            comprehensive heart treatments including interventional cardiology,
            General Medicine, and advanced electrophysiology services.
          </p>
          <div className='home-hero-buttons'>
            <Link href="/contact" className='btn-primary'>
              Book Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className='btn-outline'>
              Learn More
            </Link>
          </div>
        </div>

        {/* Hospital Info Bar */}
        <div className='home-info-bar'>
          <div className='home-info-block'>
            <div className='home-info-icon'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className='home-info-text'>
              <span className='home-info-title'>Interventional Cardiology</span>
              <span className='home-info-desc'>Angioplasty & Stenting</span>
            </div>
          </div>
          <div className='home-info-divider'></div>
          <div className='home-info-block'>
            <div className='home-info-icon'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className='home-info-text'>
              <span className='home-info-title'>General Medicine</span>
              <span className='home-info-desc'>24/7 Care</span>
            </div>
          </div>
          <div className='home-info-divider'></div>
          <div className='home-info-block'>
            <div className='home-info-icon'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className='home-info-text'>
              <span className='home-info-title'>24/7 Emergency</span>
              <span className='home-info-desc'>Round the Clock Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className='home-about-section'>
        <div className='home-section-header'>
          <span className='home-sub-label'>Who We Are</span>
          <h2 className='home-section-title'>A Legacy of Healing & Compassion</h2>
        </div>

        <div className='about-content-wrapper'>
          <div className='about-image'>
            <Image
              src="/5U1A4804.JPG"
              alt="Sri Ramakrishna Hospital Building"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className='about-text'>
            <p>
              Sri Ramakrishna Hospitals has evolved from a modest facility into a premier multi-specialty center in Virudhunagar.
              Our mission is to provide world-class healthcare that is both accessible and affordable.
            </p>
            <p>
              With a special focus on cardiac care, we bring advanced medical technology and expert specialists together
              to ensure the best possible outcomes for our patients.
            </p>

            <div className='about-stats'>
              <div className='stat-item'>
                <h4>20+</h4>
                <p>Years of Service</p>
              </div>
              <div className='stat-item'>
                <h4>24/7</h4>
                <p>Emergency Care</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link href="/about" className='btn-primary'>
                Read Our Story
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className='home-services-section'>
        <div className='home-section-header'>
          <span className='home-sub-label'>What We Do</span>
          <h2 className='home-section-title'>Our Centers of Excellence</h2>
        </div>

        <div className='services-grid'>
          {services.slice(0, 6).map((service) => (
            <div key={service.id} className='service-preview-card'>
              <div className='service-icon-box'>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              {service.subtitle && (
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: '500' }}>
                  {service.subtitle}
                </span>
              )}
              <p>{service.description}</p>
              <Link href="/service" className='service-link'>
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/service" className='btn-outline-primary'>
            View All Services
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* CTA Box Section */}
      <section className='cta-box-section' ref={ctaRef}>
        <div className='home-cta-box'>
          <div className='home-cta-pattern'></div>
          <div className='home-cta-content'>
            <h2>Need Expert Cardiac Consultation?</h2>
            <p>
              Our specialists are ready to provide you with the best heart care.
              Don't wait—schedule your appointment today for a healthier tomorrow.
            </p>
            <Link href="/contact" className='btn-primary' style={{ background: '#ffffff', color: '#C41E3A' }}>
              Book an Appointment
              <ArrowRightIcon />
            </Link>
          </div>

          <div className={`home-cta-image ${isCtaVisible ? 'active' : ''}`} style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Using an abstract heart or doctor illustration here could be good, for now using a subtle icon or just spacing */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ width: '100%', height: '100%', color: 'rgba(255,255,255,0.1)' }}>
              <path className="heart-path" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
