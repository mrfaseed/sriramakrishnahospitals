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

        {/* Intervention Cardiology Card */}
        <div className='service-card featured-card'>
          <div className='service-icon'>❤️</div>
          <div className='service-info'>
            <h3>Intervention Cardiology</h3>
            <p>State-of-the-art cardiac care with advanced intervention capabilities.</p>

            <div className='sub-features-grid'>
              <div className='sub-feature'>
                <span className='feature-icon'>🏥</span>
                <div className='feature-text'>
                  <strong>Cath Lab</strong>
                  <span>24hr Emergency & ICU Support</span>
                </div>
              </div>

              <div className='sub-feature'>
                <span className='feature-icon'>💓</span>
                <div className='feature-text'>
                  <strong>ECHO</strong>
                  <span>Echocardiography</span>
                </div>
              </div>

              <div className='sub-feature'>
                <span className='feature-icon'>📈</span>
                <div className='feature-text'>
                  <strong>ECG</strong>
                  <span>Electrocardiogram</span>
                </div>
              </div>

              <div className='sub-feature'>
                <span className='feature-icon'>⚡</span>
                <div className='feature-text'>
                  <strong>EECP</strong>
                  <span>Enhanced External Counterpulsation</span>
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
            <h3>Dialysis</h3>
            <p>Advanced renal care services providing life-sustaining dialysis treatments with compassionate support for patients with kidney conditions.</p>
            <a href="/service/details" className='view-more-btn'>View More &rarr;</a>
          </div>
        </div>

      </section>
    </div>
  );
}
