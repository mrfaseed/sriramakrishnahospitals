'use client';
import React from 'react';
import './Contact.css';

// Icons
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

export default function Contact() {
    return (
        <div className='contact-page'>
            {/* Hero Section */}
            <section className='contact-hero-section'>
                <div className='hero-pattern'></div>
                <div className='hero-content-wrapper'>
                    <h1 className='hero-main-title'>Get in Touch</h1>
                    <p className='hero-description'>We are here to help you. Reach out to us for any inquiries, appointments, or emergency services.</p>
                </div>
                {/* 2D Decorative Element */}
                <div className="hero-shape-divider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* Contact Content */}
            <section className='contact-content-section'>
                <div className='section-inner'>

                    <div className="contact-grid-layout">
                        {/* Contact Info Cards - Merged into one */}
                        <div className="contact-info-single-card">
                            <div className="info-row">
                                <div className="info-icon"><MapPinIcon /></div>
                                <div className="info-content">
                                    <h3>Visit Us</h3>
                                    <p>HWWW+J8R, GT Nagar <br />Virudhunagar, Tamil Nadu 626001</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-icon"><PhoneIcon /></div>
                                <div className="info-content">
                                    <h3>Call Us</h3>
                                    <p>+91 1234567890<br />+91 1234567890</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-icon"><MailIcon /></div>
                                <div className="info-content">
                                    <h3>Email Us</h3>
                                    <p>info@sriramakrishnahospital.com<br />support@sriramakrishnahospital.com</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-icon"><ClockIcon /></div>
                                <div className="info-content">
                                    <h3>Working Hours</h3>
                                    <p>Emergency: 24/7<br />OPD: Mon-Sat, 9am - 9pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <h2>Send a Message</h2>
                                <p>We'd love to hear from you. Please fill out this form.</p>
                            </div>
                            <form className="premium-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="Enter your first name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Enter your last name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="Enter your email address" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 1234567890" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="How can we help you?" rows="5"></textarea>
                                </div>
                                <button type="button" className="submit-button">
                                    <span>Send Message</span>
                                    <SendIcon />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-section">
                        <div className="map-frame">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.918667615654!2d77.9431835!3d9.5966046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d00474e0ccf%3A0x46d6f77a1af478a6!2sSRI%20RAMAKRISHNA%20HOSPITAL%20HEART%20CENTRE!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Hospital Location"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
