'use client';
import React from 'react';
import './AboutUs.css';

// SVG Icon Components
const HeartPulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const HospitalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6v4" />
    <path d="M14 14h-4" />
    <path d="M14 18h-4" />
    <path d="M14 8h-4" />
    <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
    <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const KidneyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9c2.39 0 4.68.94 6.36 2.64" />
    <path d="M12 3a9 9 0 0 1 9 9c0 2.39-.94 4.68-2.64 6.36" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const UserDoctorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M12 14v3" />
    <path d="M10.5 15.5h3" />
  </svg>
);

const UserTieIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="m12 14 1 4-1 2-1-2 1-4" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function AboutUs() {
  return (
    <div className='about-page'>
      {/* Hero Section */}
      <section className='about-hero-section'>
        <div className='hero-pattern'></div>
        <div className='hero-content-wrapper'>
          <div className='hero-icon'>
            <HeartPulseIcon />
          </div>
          <h1 className='hero-main-title'>About Us</h1>
          <h2 className='hero-hospital-name'>Sri Ramakrishna Hospital and Gyaneswari Heart Center</h2>
          <p className='hero-description'>A symbol of trust, excellence, and compassionate healthcare in Virudhunagar.</p>
          <div className='hero-line'></div>
        </div>
        <div className='hero-decorative'></div>
      </section>

      {/* Heritage & Evolution Section */}
      <section className='about-section heritage-section'>
        <div className='section-inner'>
          <div className='heritage-card'>
            <div className='heritage-header'>
              <div className='heritage-icon'>
                <BuildingIcon />
              </div>
              <h2>Our Legacy & Evolution</h2>
            </div>
            <p>
              With a rich heritage that began in 2004, our institution has continuously evolved to meet the growing healthcare needs of the community. What started as a modest medical facility has today become a well-established center known for quality treatment, ethical practice, and patient satisfaction.
            </p>
            <p>
              In <span className='heritage-highlight'>2022</span>, we expanded our services with the launch of our state-of-the-art new hospital facility at 26/2F, 2G, West Pandiyan Colony, Virudhunagar. This modern center was established with a clear vision — to provide advanced, affordable, and accessible healthcare using the latest medical technology and international treatment standards, right here in our region.
            </p>
          </div>
        </div>
      </section>

      {/* Departments & Specialties */}
      <section className='about-section specialties-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-label'>
              <span className='icon'><StarIcon /></span>
              What We Offer
            </span>
            <h2 className='section-title'>Centers of Excellence</h2>
            <p className='section-subtitle'>Delivering comprehensive healthcare with specialized expertise across multiple disciplines</p>
            <div className='section-divider'></div>
          </div>

          <div className='specialty-grid'>
            {/* Multi-Specialty */}
            <div className='specialty-card'>
              <div className='specialty-icon'>
                <HospitalIcon />
              </div>
              <h3>Comprehensive Multi-Specialty Care</h3>
              <p>
                We offer a wide range of medical services with a strong focus on General Medicine, Cardiology, Interventional Cardiology, Nephrology (Dialysis Services), and Emergency Care. Our hospital is designed to deliver complete healthcare under one roof.
              </p>
              <p>
                Our emergency department operates 24 hours a day, 7 days a week, fully equipped to handle all medical and cardiac emergencies with speed, precision, and compassion.
              </p>
            </div>

            {/* Cardiac Care */}
            <div className='specialty-card featured'>
              <div className='specialty-icon'>
                <HeartIcon />
              </div>
              <h3>Cardiac Care</h3>
              <p>
                Widely recognized as a leading cardiac care center in the region. We offer advanced Interventional Cardiology services in our fully equipped Cath Lab.
              </p>
              <ul className='specialty-list'>
                <li>Coronary Angiogram & Angioplasty</li>
                <li>PTCA & PCI</li>
                <li>Permanent Pacemaker Implantation (PPI)</li>
                <li>ASD and VSD Device Closure</li>
                <li>TPI (Temporary Pacemaker Implantation)</li>
              </ul>
              <div className='specialty-highlight'>
                <AwardIcon />
                First in South tamilnadu to introduce EECP (Enhanced External Counterpulsation) therapy.
              </div>
            </div>

            {/* Nephrology */}
            <div className='specialty-card'>
              <div className='specialty-icon'>
                <StethoscopeIcon />
              </div>
              <h3>Advanced Nephrology</h3>
              <p>
                specialized care for patients with kidney diseases, with a dedicated focus on Dialysis Services. We offer safe, hygienic, and well-monitored dialysis treatments using modern equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className='about-section leadership-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-label'>
              <span className='icon'><UsersIcon /></span>
              Expert Team
            </span>
            <h2 className='section-title'>Our Medical Leadership</h2>
            <p className='section-subtitle'>Meet the dedicated professionals leading our mission for exceptional patient care</p>
            <div className='section-divider'></div>
          </div>

          <div className='leaders-grid'>
            <div className='leader-card'>
              <div className='leader-avatar'>
                <UserDoctorIcon />
              </div>
              <h4>Dr. B. Rajesh</h4>
              <span className='leader-degree'>MD (General Medicine), DM (Interventional Cardiology)</span>
              <p className='leader-role'>Senior Consultant</p>
              <p className='leader-desc'>Senior Interventional Cardiologist with extensive experience in advanced and complex cardiac procedures.</p>
            </div>

            <div className='leader-card'>
              <div className='leader-avatar'>
                <UserDoctorIcon />
              </div>
              <h4>Dr. B. Padma Priya</h4>
              <span className='leader-degree'>MD (General Medicine), DM (Nephrology)</span>
              <p className='leader-role'>Senior Consultant</p>
              <p className='leader-desc'>Consultant Nephrologist specializing in comprehensive kidney care and dialysis management.</p>
            </div>

            <div className='leader-card director'>
              <div className='leader-avatar'>
                <UserTieIcon />
              </div>
              <h4>Dr. K. Vellaichamy</h4>
              <span className='leader-degree'>MBBS</span>
              <p className='leader-role'>Hospital Director</p>
              <p className='leader-desc'>Providing visionary leadership with a strong commitment to ethical, patient-centered, and community-focused healthcare.</p>
            </div>

            <div className='leader-card'>
              <div className='leader-avatar'>
                <UserDoctorIcon />
              </div>
              <h4>Dr. V. Sivaraman</h4>
              <span className='leader-degree'>MBBS</span>
              <p className='leader-role'>Assistant Doctor</p>
              <p className='leader-desc'>Actively involved in day-to-day patient care and clinical coordination to ensure continuous medical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Accessibility */}
      <section className='about-section commitment-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-label'>
              <span className='icon'><ShieldCheckIcon /></span>
              Our Promise
            </span>
            <h2 className='section-title'>Commitment to Care</h2>
            <div className='section-divider'></div>
          </div>

          <div className='dual-panel-grid'>
            <div className='panel-card'>
              <div className='panel-icon'>
                <ShieldCheckIcon />
              </div>
              <h3>Affordable and Accessible Healthcare</h3>
              <p>
                We strongly believe that quality healthcare should be accessible to everyone. Our hospital is empaneled under major government healthcare schemes including CMCHIS and PMJAY, enabling eligible patients to receive free cardiology procedures and advanced treatments.
              </p>
            </div>
            <div className='panel-card'>
              <div className='panel-icon'>
                <HandshakeIcon />
              </div>
              <h3>Our Commitment</h3>
              <p>
                At Sri Ramakrishna Hospital and Gyaneswari Heart Center, we combine advanced medical technology with a compassionate human touch. Every patient is treated with dignity, respect, and personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='about-section vision-mission-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-label'>
              <span className='icon'><TargetIcon /></span>
              Our Purpose
            </span>
            <h2 className='section-title'>Vision & Mission</h2>
            <div className='section-divider'></div>
          </div>

          <div className='vm-grid'>
            <div className='vm-card'>
              <div className='vm-icon-wrapper'>
                <EyeIcon />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a leading center of excellence in healthcare, recognized for advanced medical services, ethical practices, and compassionate patient care, delivering world-class treatment to the people of Virudhunagar and surrounding regions.
              </p>
            </div>

            <div className='vm-card'>
              <div className='vm-icon-wrapper'>
                <TargetIcon />
              </div>
              <h3>Our Mission</h3>
              <p>To provide high-quality, patient-centered healthcare by combining advanced medical technology with experienced clinical expertise and compassionate service.</p>
              <ul className='vm-list'>
                <li>Delivering safe, ethical, and evidence-based medical care.</li>
                <li>Providing excellence in cardiac, medical, and renal care.</li>
                <li>Ensuring 24/7 emergency and critical care services.</li>
                <li>Making advanced healthcare accessible and affordable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
