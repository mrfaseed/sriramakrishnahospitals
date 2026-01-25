'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Home.css';

// SVG Icons
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const EmergencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.24-4.286-3.5-6.43a2.497 2.497 0 0 0-4 0c-1.26 2.144-2.428 4.287-3.5 6.43-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5c.91 0 1.7-.58 2.16-1.36a2.496 2.496 0 0 0 4.68 0A2.498 2.498 0 0 0 8.5 14.5z" />
    <path d="M12 8h8" />
    <path d="M16 4v8" />
  </svg>
);

const KidneyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9c2.39 0 4.68.94 6.36 2.64" />
    <path d="M12 3a9 9 0 0 1 9 9c0 2.39-.94 4.68-2.64 6.36" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const carouselImages = [
  { src: '/5U1A4804.JPG', alt: 'Sri Ramakrishna Hospitals - Reception Area' },
  { src: '/5U1A4807.JPG', alt: 'Sri Ramakrishna Hospitals - Medical Facility' },
  { src: '/5U1A4809.JPG', alt: 'Sri Ramakrishna Hospitals - Patient Care' },
  { src: '/5U1A4811.JPG', alt: 'Sri Ramakrishna Hospitals - Healthcare Services' },
  { src: '/5U1A4826.JPG', alt: 'Sri Ramakrishna Hospitals - Modern Equipment' },
  { src: '/5U1A4832.JPG', alt: 'Sri Ramakrishna Hospitals - Medical Team' },
  { src: '/5U1A4835.JPG', alt: 'Sri Ramakrishna Hospitals - Hospital Exterior' },
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
      <section className='hero-section'>
        {/* Background Images */}
        <div className='hero-bg'>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={85}
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          ))}
        </div>

        {/* Lighter Overlay for Text Visibility */}
        <div className='hero-overlay'></div>

        {/* Main Content */}
        <div className='hero-content'>
          <span className='hero-tagline'>
            <svg className='heart-icon' viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Centre of Excellence in Cardiac Care
          </span>
          <h1 className='hero-headline'>
            Advanced Heart Care, <span>Expert Cardiologists</span>
          </h1>
          <p className='hero-subtext'>
            Sri Ramakrishna Hospitals is a leading cardiac care center offering
            comprehensive heart treatments including interventional cardiology,
            cardiac surgery, and advanced electrophysiology services.
          </p>
          <div className='hero-buttons'>
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
        <div className='info-bar'>
          <div className='info-block'>
            <div className='info-icon'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className='info-text'>
              <span className='info-title'>Interventional Cardiology</span>
              <span className='info-desc'>Angioplasty & Stenting</span>
            </div>
          </div>
          <div className='info-divider'></div>
          <div className='info-block'>
            <div className='info-icon'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className='info-text'>
              <span className='info-title'>Cardiac Surgery</span>
              <span className='info-desc'>Bypass & Valve Repair</span>
            </div>
          </div>
          <div className='info-divider'></div>
          <div className='info-block'>
            <div className='info-icon'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className='info-text'>
              <span className='info-title'>24/7 Emergency</span>
              <span className='info-desc'>Round the Clock Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className='home-about-section'>
        <div className='section-header'>
          <span className='sub-label'>Who We Are</span>
          <h2 className='section-title'>A Legacy of Healing & Compassion</h2>
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
        <div className='section-header'>
          <span className='sub-label'>What We Do</span>
          <h2 className='section-title'>Our Centers of Excellence</h2>
        </div>

        <div className='services-grid'>
          {/* Service 1: General Medicine */}
          <div className='service-preview-card'>
            <div className='service-icon-box'>
              <StethoscopeIcon />
            </div>
            <h3>General Medicine</h3>
            <p>Comprehensive healthcare focusing on diagnosis, treatment, and prevention of diseases for overall well-being.</p>
            <Link href="/service/details" className='service-link'>
              Learn more <ArrowRightIcon />
            </Link>
          </div>

          {/* Service 2: Emergency Care */}
          <div className='service-preview-card'>
            <div className='service-icon-box'>
              <EmergencyIcon />
            </div>
            <h3>Emergency Care</h3>
            <p>24/7 rapid response emergency department equipped to handle all medical and cardiac crises.</p>
            <Link href="/service/details" className='service-link'>
              Learn more <ArrowRightIcon />
            </Link>
          </div>

          {/* Service 3: Interventional Cardiology */}
          <div className='service-preview-card'>
            <div className='service-icon-box'>
              <HeartPulseIcon />
            </div>
            <h3>Interventional Cardiology</h3>
            <p>Advanced cardiac interventions including Angioplasty, Stenting, and Pacemaker implantation in our Cath Lab.</p>
            <Link href="/service/details" className='service-link'>
              Learn more <ArrowRightIcon />
            </Link>
          </div>

          {/* Service 4: Nephrology */}
          <div className='service-preview-card'>
            <div className='service-icon-box'>
              <KidneyIcon />
            </div>
            <h3>Nephrology & Dialysis</h3>
            <p>Expert care for kidney diseases with modern, hygienic, and well-monitored dialysis facilities.</p>
            <Link href="/service/details" className='service-link'>
              Learn more <ArrowRightIcon />
            </Link>
          </div>

          {/* Service 5: Diagnostics */}
          <div className='service-preview-card'>
            <div className='service-icon-box'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3>Diagnostics</h3>
            <p>State-of-the-art diagnostic facilities including ECG, ECHO, TMT, and fully automated laboratory services.</p>
            <Link href="/service/details" className='service-link'>
              Learn more <ArrowRightIcon />
            </Link>
          </div>

          {/* Service 6: Master Health Checkup */}
          <div className='service-preview-card'>
            <div className='service-icon-box'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Master Health Checkup</h3>
            <p>Comprehensive health screening packages designed to detect health issues early and promote longevity.</p>
            <Link href="/service/details" className='service-link'>
              Learn more <ArrowRightIcon />
            </Link>
          </div>
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
        <div className='cta-box'>
          <div className='cta-pattern'></div>
          <div className='cta-content'>
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

          <div className={`cta-image ${isCtaVisible ? 'active' : ''}`} style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
