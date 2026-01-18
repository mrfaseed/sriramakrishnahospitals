import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='about-app-container'>
      {/* Hero Section */}
      <section className='about-hero'>
        <div className='hero-content fade-in-up'>
          <h1 className='hero-title'>Healing with <span className='text-highlight'>Compassion</span></h1>
          <p className='hero-subtitle'>Sri Ramakrishna Hospitals - Where Care Meets Excellence</p>
          <div className='hero-decoration'></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className='section-container intro-section'>
        <div className='intro-text slide-in-left'>
          <h2>Pioneering Healthcare</h2>
          <p>
            For over three decades, Sri Ramakrishna Hospitals has been a beacon of hope and healing.
            We are dedicated to providing world-class medical care with a human touch.
            Our commitment to excellence is reflected in our state-of-the-art facilities and
            our compassionate team of medical professionals.
          </p>
        </div>
        <div className='intro-image slide-in-right'>
          {/* Placeholder for an image or a styled graphic */}
          <div className='image-placeholder-box'>
            <div className='pulse-circle'></div>
            <span>Modern Care</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='mv-section'>
        <div className='mv-card hover-lift'>
          <div className='icon-box'>✦</div>
          <h3>Our Mission</h3>
          <p>To deliver affordable, accessible, and quality healthcare to all, combining advanced medical technology with the core values of empathy and integrity.</p>
        </div>
        <div className='mv-card hover-lift'>
          <div className='icon-box'>★</div>
          <h3>Our Vision</h3>
          <p>To be a global leader in healthcare capability, known for clinical excellence and patient-centric care that transforms lives.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className='values-section'>
        <h2 className='section-title'>Our Core Values</h2>
        <div className='values-grid'>
          {['Integrity', 'Compassion', 'Innovation', 'Excellence', 'Teamwork'].map((val, idx) => (
            <div key={idx} className='value-item'>
              <span className='value-text'>{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Special Effects Section */}
      <section className='stats-parallax'>
        <div className='stat-item'>
          <span className='stat-number'>30+</span>
          <span className='stat-label'>Years of Service</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>500+</span>
          <span className='stat-label'>Expert Doctors</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>1M+</span>
          <span className='stat-label'>Happy Patients</span>
        </div>
      </section>
    </div>
  );
}
