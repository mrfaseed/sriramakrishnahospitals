import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='about-app-container'>
      {/* Hero Section */}
      <section className='about-hero'>
        <div className='hero-content fade-in-up'>
          <h1 className='hero-title'>About Us</h1>
          <h2 className='hero-subtitle'>Sri Ramakrishna Hospital and Gyaneswari Heart Center</h2>
          <p className='hero-tagline'>A symbol of trust, excellence, and compassionate healthcare in Virudhunagar.</p>
        </div>
      </section>

      {/* Heritage & Evaluation Section */}
      <section className='section-container heritage-section'>
        <div className='content-card slide-in-up'>
          <h2>Our Legacy & Evolution</h2>
          <p>
            With a rich heritage that began in 2004, our institution has continuously evolved to meet the growing healthcare needs of the community. What started as a modest medical facility has today become a well-established center known for quality treatment, ethical practice, and patient satisfaction.
          </p>
          <p>
            In 2022, we expanded our services with the launch of our state-of-the-art new hospital facility at 26/2F, 2G, West Pandiyan Colony, Virudhunagar. This modern center was established with a clear vision — to provide advanced, affordable, and accessible healthcare using the latest medical technology and international treatment standards, right here in our region.
          </p>
        </div>
      </section>

      {/* Departments & Specialties */}
      <section className='section-container specialties-section'>
        <h2 className='section-heading'>Centers of Excellence</h2>

        <div className='specialty-grid'>
          {/* Multi-Specialty */}
          <div className='specialty-card'>
            <h3>Comprehensive Multi-Specialty Care</h3>
            <p>
              We offer a wide range of medical services with a strong focus on General Medicine, Cardiology, Interventional Cardiology, Nephrology (Dialysis Services), and Emergency Care. Our hospital is designed to deliver complete healthcare under one roof.
            </p>
            <p>
              Our emergency department operates 24 hours a day, 7 days a week, fully equipped to handle all medical and cardiac emergencies with speed, precision, and compassion.
            </p>
          </div>

          {/* Cardiac Care */}
          <div className='specialty-card feature-card'>
            <h3>Cardiac Care</h3>
            <p>
              Widely recognized as a leading cardiac care center in the region. We offer advanced Interventional Cardiology services in our fully equipped Cath Lab.
            </p>
            <ul className='feature-list'>
              <li>Coronary Angiogram & Angioplasty</li>
              <li>PTCA & PCI</li>
              <li>Permanent Pacemaker Implantation (PPI)</li>
              <li>ASD and VSD Device Closure</li>
            </ul>
            <p className='highlight-note'>
              First in South India to introduce EECP (Enhanced External Counterpulsation) therapy.
            </p>
          </div>

          {/* Nephrology */}
          <div className='specialty-card'>
            <h3>Advanced Nephrology</h3>
            <p>
              specialized care for patients with kidney diseases, with a dedicated focus on Dialysis Services. We offer safe, hygienic, and well-monitored dialysis treatments using modern equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className='section-container leadership-section'>
        <h2 className='section-heading'>Our Medical Leadership</h2>
        <div className='leaders-grid'>
          <div className='leader-card'>
            <h4>Dr. B. Rajesh</h4>
            <span className='leader-degree'>MD (General Medicine), DM (Interventional Cardiology)</span>
            <p className='leader-role'>Senior Consultant</p>
            <p className='leader-desc'>Senior Interventional Cardiologist with extensive experience in advanced and complex cardiac procedures.</p>
          </div>

          <div className='leader-card'>
            <h4>Dr. B. Paadma Priya</h4>
            <span className='leader-degree'>MD (General Medicine), DM (Nephrology)</span>
            <p className='leader-role'>Senior Consultant</p>
            <p className='leader-desc'>Consultant Nephrologist specializing in comprehensive kidney care and dialysis management.</p>
          </div>

          <div className='leader-card director-card'>
            <h4>Dr. K. Vellaichamy</h4>
            <span className='leader-degree'>MBBS</span>
            <p className='leader-role'>Hospital Director</p>
            <p className='leader-desc'>Providing visionary leadership with a strong commitment to ethical, patient-centered, and community-focused healthcare.</p>
          </div>

          <div className='leader-card'>
            <h4>Dr. V. Sivaraman</h4>
            <span className='leader-degree'>MBBS</span>
            <p className='leader-role'>Assistant Doctor</p>
            <p className='leader-desc'>Actively involved in day-to-day patient care and clinical coordination to ensure continuous medical support.</p>
          </div>
        </div>
      </section>

      {/* Commitment & Accessibility */}
      <section className='section-container commitment-section'>
        <div className='dual-panel'>
          <div className='panel-content'>
            <h3>Affordable and Accessible Healthcare</h3>
            <p>
              We strongly believe that quality healthcare should be accessible to everyone. Our hospital is empaneled under major government healthcare schemes including CMCHIS and PMJAY, enabling eligible patients to receive free cardiology procedures and advanced treatments.
            </p>
          </div>
          <div className='panel-content'>
            <h3>Our Commitment</h3>
            <p>
              At Sri Ramakrishna Hospital and Gyaneswari Heart Center, we combine advanced medical technology with a compassionate human touch. Every patient is treated with dignity, respect, and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='section-container vision-mission-section'>
        <div className='vm-grid'>
          <div className='vm-card'>
            <div className='vm-icon'>👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be a leading center of excellence in healthcare, recognized for advanced medical services, ethical practices, and compassionate patient care, delivering world-class treatment to the people of Virudhunagar and surrounding regions.
            </p>
          </div>

          <div className='vm-card'>
            <div className='vm-icon'>🎯</div>
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
      </section>
    </div>
  );
}
