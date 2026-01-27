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
          <div className='card-header'>
            <div className='service-icon'>
              <i className='fas fa-stethoscope'></i>
            </div>
            <h3>General Medicine</h3>
          </div>
          <div className='service-body'>
            <p>Comprehensive healthcare for adults, focusing on the diagnosis, treatment, and prevention of a wide variety of diseases. Our expert physicians provide holistic care for your overall well-being.</p>
          </div>
          <a href="/service/details" className='view-more-btn'>Explore Service</a>
        </div>

        {/* Emergency Care Card */}
        <div className='service-card'>
          <div className='card-header'>
            <div className='service-icon'>🚑</div>
            <h3>Emergency Care</h3>
          </div>
          <div className='service-body'>
            <p>Our emergency department operates 24/7, fully equipped to handle all medical and cardiac emergencies with speed.</p>
            <div className='tags-container'>
              <span className='tag'>24/7 Availability</span>
              <span className='tag'>Rapid Response</span>
            </div>
          </div>
          <a href="/service/details" className='view-more-btn'>Explore Service</a>
        </div>

        {/* Intervention Cardiology Card - WIDE */}
        <div className='service-card card-wide'>
          <div className='card-header'>
            <div className='service-icon'>❤️</div>
            <h3>Intervention Cardiology</h3>
          </div>
          <div className='service-body'>
            <p>State-of-the-art cardiac care with advanced intervention capabilities in our Cath Lab.</p>

            <div className='grid-features'>
              <div className='feature-item'>
                <strong>Cath Lab</strong>
                <span>Coronary Angiogram, Angioplasty</span>
              </div>
              <div className='feature-item'>
                <strong>Device Closure</strong>
                <span>ASD and VSD Procedures</span>
              </div>
              <div className='feature-item'>
                <strong>PPI</strong>
                <span>Permanent Pacemaker</span>
              </div>
              <div className='feature-item'>
                <strong>EECP</strong>
                <span>Non-Invasive Therapy</span>
              </div>
            </div>
            <div className='mini-divider'></div>
            <div className='grid-features'>
              <div className='feature-item'><strong>Diagnostic:</strong> ECG, ECHO, TMT</div>
            </div>
          </div>
          <a href="/service/details" className='view-more-btn'>Explore Service</a>
        </div>

        {/* Dialysis Card */}
        <div className='service-card'>
          <div className='card-header'>
            <div className='service-icon'>💧</div>
            <h3>Nephrology & Dialysis</h3>
          </div>
          <div className='service-body'>
            <p>Specialized care for kidney diseases with a focus on safe, hygienic, and well-monitored dialysis treatments.</p>
          </div>
          <a href="/service/details" className='view-more-btn'>Explore Service</a>
        </div>

      </section>
    </div>
  );
}
