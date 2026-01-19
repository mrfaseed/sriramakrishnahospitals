import React from 'react';


export default function Contact() {
    return (
        <div className='contact-container'>
            {/* Hero Section */}
            <section className='contact-hero'>
                <div className='contact-hero-content fade-in-up'>
                    <h1 className='contact-title'>Get in Touch</h1>
                    <h2 className='contact-subtitle'>We're Here to Help You</h2>
                    <p className='hero-tagline' style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Reach out to Sri Ramakrishna Hospital for appointments, inquiries, or emergency support.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className='contact-section-container'>
                <div className='contact-grid slide-in-up'>

                    {/* Left: Contact Form */}
                    <div className='contact-form-card'>
                        <h2>Send Us a Message</h2>
                        <form>
                            <div className='form-group'>
                                <label className='form-label'>Full Name</label>
                                <input type='text' className='form-input' placeholder='Enter your full name' />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className='form-group'>
                                    <label className='form-label'>Email Address</label>
                                    <input type='email' className='form-input' placeholder='Enter your email' />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Phone Number</label>
                                    <input type='tel' className='form-input' placeholder='Enter your phone number' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Subject</label>
                                <input type='text' className='form-input' placeholder='How can we help you?' />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Message</label>
                                <textarea className='form-textarea' placeholder='Write your message here...'></textarea>
                            </div>
                            <button type='button' className='submit-btn'>Send Message</button>
                        </form>
                    </div>

                    {/* Right: Contact Info & Map */}
                    <div className='contact-info-card'>
                        <h2>Contact Information</h2>

                        <div className='info-item'>
                            <div className='info-icon'>📍</div>
                            <div className='info-content'>
                                <h4>Our Location</h4>
                                <p>26/2F, 2G, West Pandiyan Colony,<br />Virudhunagar, Tamil Nadu 626001</p>
                            </div>
                        </div>

                        <div className='info-item'>
                            <div className='info-icon'>📞</div>
                            <div className='info-content'>
                                <h4>Phone Number</h4>
                                <p>+91 98765 43210<br />+91 4562 123456</p>
                            </div>
                        </div>

                        <div className='info-item'>
                            <div className='info-icon'>✉️</div>
                            <div className='info-content'>
                                <h4>Email Address</h4>
                                <p>info@sriramakrishnahospital.com<br />support@sriramakrishnahospital.com</p>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className='map-container'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.026362453665!2d77.9547563!3d9.5928863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0133a1e1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sVirudhunagar!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                width="100%"
                                height="250"
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
