'use client';
import { useState } from 'react';
import Link from 'next/link';
import { services } from './serviceData';
import './services.css';

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'diagnostic', label: 'Diagnostic' },
  { id: 'interventional', label: 'Interventional' },
  { id: 'care', label: 'Care & Support' }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-badge">Our Cardiac Services</span>
          <h1 className="services-title">Comprehensive Heart Care</h1>
          <p className="services-subtitle">
            Select a service to learn more about our world-class cardiac treatments and facilities.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={`/service/${service.id}`}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              {service.subtitle && (
                <span className="service-subtitle">{service.subtitle}</span>
              )}
              <p className="service-desc">{service.description}</p>
              <span className="service-cta">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="cta-content">
          <h2>Need Expert Cardiac Care?</h2>
          <p>Our team of experienced cardiologists is ready to help you.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-primary-btn">
              Book Appointment
            </Link>
            <a href="tel:04222222222" className="cta-secondary-btn">
              Call: 0422 222 2222
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
