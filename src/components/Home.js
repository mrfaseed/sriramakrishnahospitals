'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Home.css';

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

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
            Advanced Heart Care,<br />
            <span>Expert Cardiologists</span>
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
    </div>
  );
}
