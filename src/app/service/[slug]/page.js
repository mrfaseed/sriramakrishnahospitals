import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '../serviceData';
import './service-detail.css';

import VideoPlayer from '../../../components/VideoPlayer';

export default async function ServiceDetailPage(props) {
    const params = await props.params;
    // Find the service based on the slug
    const service = services.find((s) => s.id === params.slug);

    // Handle 404 if service not found
    if (!service) {
        notFound();
    }

    return (
        <div className="service-detail-page">
            {/* Dark Hero Section */}
            <section className="detail-hero-new">
                <div className="detail-hero-wrapper">
                    <div className="detail-hero-left">
                        <div className="breadcrumb-row">
                            <Link href="/service" className="back-link-simple">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Back to Services
                            </Link>
                            <span className="service-type-badge">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="heart-icon">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                {service.category} Procedure
                            </span>
                        </div>

                        <h1 className="hero-title-new">{service.title}</h1>
                        <p className="hero-desc-new">{service.description}</p>

                        <div className="hero-buttons">
                            <Link href="/contact" className="btn-primary-red">
                                Book Appointment
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href="tel:04222222222" className="btn-outline-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>

                    <div className="detail-hero-right">
                        <div className="pulse-graphic-container">
                            <div className="pulse-circle c1"></div>
                            <div className="pulse-circle c2"></div>
                            <div className="pulse-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            {service.video && (
                <section className="service-video-section" style={{ background: '#f8f9fa', padding: '0 24px' }}>
                    <VideoPlayer src={service.video} />
                </section>
            )}

            {/* Info Strip */}
            <div className="info-strip">
                <div className="info-strip-content">
                    <div className="info-item">
                        <div className="info-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Duration</span>
                            <span className="info-value">{service.details?.duration || 'Variable'}</span>
                        </div>
                    </div>

                    <div className="info-separator"></div>

                    <div className="info-item">
                        <div className="info-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
                                <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Hospital Stay</span>
                            <span className="info-value">{service.details?.hospitalStay || 'Variable'}</span>
                        </div>
                    </div>

                    <div className="info-separator"></div>

                    <div className="info-item">
                        <div className="info-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Recovery</span>
                            <span className="info-value">{service.details?.recovery || 'Variable'}</span>
                        </div>
                    </div>

                    <div className="info-separator"></div>

                    <div className="info-item">
                        <div className="info-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
                                <path d="M12 12v-2" />
                                <path d="M12 12h2" />
                                <path d="M12 12l-1.5 1.5" />
                                <path d="M12 12l-1.5-1.5" />
                                <path d="M12 12l1.5-1.5" />
                                <path d="M12 12l1.5 1.5" />
                            </svg>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Anesthesia</span>
                            <span className="info-value">{service.details?.anesthesia || 'N/A'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="detail-content-wrapper">
                <div className="detail-main">
                    {/* Overview Section */}
                    {service.details?.overview && (
                        <div className="detail-section">
                            <h3 className="section-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Overview
                            </h3>
                            <p className="section-text">
                                {service.details.overview}
                            </p>
                        </div>
                    )}

                    {/* Procedure Section */}
                    {service.details?.procedure && (
                        <div className="detail-section">
                            <h3 className="section-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                Procedure & Process
                            </h3>
                            <ul className="detail-list">
                                {service.details.procedure.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Benefits Section */}
                    {service.details?.benefits && (
                        <div className="detail-section">
                            <h3 className="section-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Benefits & Recovery
                            </h3>
                            <ul className="detail-list">
                                {service.details.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Features Section (for ICU/Dialysis) */}
                    {service.details?.features && (
                        <div className="detail-section">
                            <h3 className="section-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Key Features
                            </h3>
                            <ul className="detail-list">
                                {service.details.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Includes Section (for Checkups) */}
                    {service.details?.includes && (
                        <div className="detail-section">
                            <h3 className="section-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Package Includes
                            </h3>
                            <ul className="detail-list">
                                {service.details.includes.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="detail-sidebar">
                    {/* Booking Card */}
                    <div className="sidebar-box highlight">
                        <h4 className="sidebar-title">Book an Appointment</h4>
                        <p>Ready to schedule your {service.title}? Contact us today.</p>
                        <Link href="/contact" className="sidebar-btn">
                            Make an Appointment
                        </Link>
                    </div>

                    {/* Quick Contact */}
                    <div className="sidebar-box">
                        <h4 className="sidebar-title">Quick Contact</h4>
                        <ul className="sidebar-contact-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>0422 222 2222</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>24/7 Emergency Care</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@sriramakrishna.com</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
