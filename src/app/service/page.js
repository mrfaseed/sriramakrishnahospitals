'use client';
import { useState } from 'react';
import Link from 'next/link';
import './services.css';

const services = [
  {
    id: 'angiogram',
    title: 'Angiogram',
    description: 'A diagnostic imaging test that uses X-rays to view your heart\'s blood vessels and chambers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    category: 'interventional'
  },
  {
    id: 'congenital-heart',
    title: 'Surgery for Congenital Heart Defects',
    subtitle: 'ASD / VSD Closure',
    description: 'Surgical correction of heart defects present from birth, including hole-in-heart repairs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    category: 'interventional'
  },
  {
    id: 'balloon-valvuloplasty',
    title: 'Balloon Valvuloplasty',
    subtitle: 'PTMC – Valve Opening Procedure',
    description: 'A minimally invasive procedure to open narrowed heart valves using a balloon catheter.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    category: 'interventional'
  },
  {
    id: 'holter-monitoring',
    title: '24-Hour Holter Monitoring',
    subtitle: 'Continuous Heart Rhythm Recording',
    description: 'Continuous ECG monitoring for 24-48 hours to detect irregular heartbeats and arrhythmias.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    category: 'diagnostic'
  },
  {
    id: 'echocardiogram',
    title: 'Echocardiogram (ECHO)',
    description: 'Ultrasound imaging of the heart to assess its structure, function, and blood flow.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    category: 'diagnostic'
  },
  {
    id: 'tmt',
    title: 'TMT (Treadmill Stress Test)',
    description: 'Exercise-based test to evaluate heart function under physical stress conditions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 4v16M7 4v16M3 8h4M17 8h4M3 12h18M3 16h4M17 16h4" />
      </svg>
    ),
    category: 'diagnostic'
  },
  {
    id: 'cardiac-icu',
    title: 'Cardiac Intensive Care Unit (ICU)',
    description: '24/7 specialized critical care unit equipped with advanced monitoring for cardiac patients.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
        <path d="M3 21h18M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    category: 'care'
  },
  {
    id: 'heart-checkup',
    title: 'General Heart Checkup and Treatment',
    description: 'Comprehensive cardiac evaluation including consultation, tests, and personalized treatment plans.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    category: 'care'
  },
  {
    id: 'dialysis',
    title: 'Dialysis Facility Available',
    description: 'State-of-the-art dialysis services for patients requiring kidney function support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    category: 'care'
  }
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'diagnostic', label: 'Diagnostic' },
  { id: 'interventional', label: 'Interventional' },

  { id: 'care', label: 'Care & Support' }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
            service.hasPage ? (
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
            ) : (
              <button
                key={service.id}
                className="service-card"
                onClick={() => handleServiceClick(service)}
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
              </button>
            )
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

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-icon">
              {selectedService.icon}
            </div>
            <h2 className="modal-title">{selectedService.title}</h2>
            {selectedService.subtitle && (
              <span className="modal-subtitle">{selectedService.subtitle}</span>
            )}
            <p className="modal-desc">{selectedService.description}</p>
            <div className="modal-actions">
              <Link href="/contact" className="modal-cta-primary">
                Book Appointment
              </Link>
              <button className="modal-cta-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
