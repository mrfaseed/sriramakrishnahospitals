import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className='services-app-container'>
      {/* Services Hero */}
      <section className='services-hero'>
        <div className='services-hero-content fade-in-up'>
          <h1 className='services-title'>Clinical <span className='text-highlight'>Excellence</span></h1>
          <p className='services-subtitle'>Comprehensive care across multiple specialties.</p>
        </div>
      </section>

      {/* Services List */}
      <section className='services-list-section'>

        {/* General Medicine Card */}
        <div className='service-card'>
          <div className='service-icon'>🩺</div>
          <div className='service-info'>
            <h3>General Medicine</h3>
            <p>Comprehensive healthcare for adults, focusing on the diagnosis, treatment, and prevention of a wide variety of diseases. Our expert physicians provide holistic care for your overall well-being.</p>
            <a href="/service/details" className='view-more-btn'>View More &rarr;</a>
          </div>
        </div>

        {/* Emergency Care Card (New) */}
        <div className='service-card'>
          <div className='service-icon'>🚑</div>
          <div className='service-info'>
            <h3>Emergency Care</h3>
            <p>Our emergency department operates 24/7, fully equipped to handle all medical and cardiac emergencies with speed, precision, and compassion.</p>
            <div className='sub-features-grid'>
              <div className='sub-feature'>
                <span className='feature-icon'>🕒</span>
                <div className='feature-text'>
                  <strong>24/7 Availability</strong>
                </div>
              </div>
              <div className='sub-feature'>
                <span className='feature-icon'>⚡</span>
                <div className='feature-text'>
                  <strong>Rapid Response</strong>
                </div>
              </div>
            </div>
            <a href="/service/details" className='view-more-btn'>View More &rarr;</a>
          </div>
        </div>

        {/* Intervention Cardiology Card */}
        <div className='service-card featured-card'>
          <div className='service-icon'>❤️</div>
          <div className='service-info'>
            <h3>Intervention Cardiology</h3>
            <p>State-of-the-art cardiac care with advanced intervention capabilities performed in our fully equipped Cath Lab.</p>

            <div className='sub-features-grid'>
              <div className='sub-feature'>
                <span className='feature-icon'>🏥</span>
                <div className='feature-text'>
                  <strong>Cath Lab</strong>
                  <span>Coronary Angiogram, Angioplasty, PTCA, PCI</span>
                </div>
              </div>

              <div className='sub-feature'>
                <span className='feature-icon'>💓</span>
                <div className='feature-text'>
                  <strong>Device Closure</strong>
                  <span>ASD and VSD Procedures</span>
                </div>
              </div>

              <div className='sub-feature'>
                <span className='feature-icon'>🔋</span>
                <div className='feature-text'>
                  <strong>PPI</strong>
                  <span>Permanent Pacemaker Implantation</span>
                </div>
              </div>

              <div className='sub-feature'>
                <span className='feature-icon'>⚡</span>
                <div className='feature-text'>
                  <strong>EECP</strong>
                  <span>Non-Invasive Cardiac Therapy</span>
                </div>
              </div>
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#555' }}>Diagnostic Services</h4>
            <div className='sub-features-grid'>
              <div className='sub-feature'>
                <span className='feature-icon'>📈</span>
                <div className='feature-text'>
                  <strong>ECG & ECHO</strong>
                </div>
              </div>
              <div className='sub-feature'>
                <span className='feature-icon'>🏃</span>
                <div className='feature-text'>
                  <strong>TMT</strong>
                  <span>Treadmill Test</span>
                </div>
              </div>
            </div>

            <a href="/service/details" className='view-more-btn'>View More &rarr;</a>

          </div>
        </div>

        {/* Dialysis Card */}
        <div className='service-card'>
          <div className='service-icon'>💧</div>
          <div className='service-info'>
            <h3>Advanced Nephrology & Dialysis</h3>
            <p>Specialized care for kidney diseases with a dedicated focus on safe, hygienic, and well-monitored dialysis treatments using modern equipment.</p>
            <a href="/service/details" className='view-more-btn'>View More &rarr;</a>
          </div>
        </div>

      </section>
    </div>
  );
}
