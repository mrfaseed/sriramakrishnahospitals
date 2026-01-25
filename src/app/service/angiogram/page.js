'use client';
import Link from 'next/link';
import './angiogram.css';

export default function AngiogramPage() {
    return (
        <div className="angiogram-page">
            {/* Hero Section */}
            <section className="angio-hero">
                <div className="hero-bg-pattern"></div>
                <div className="hero-content">
                    <Link href="/service" className="back-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Services
                    </Link>
                    <div className="hero-badge">
                        <span className="badge-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </span>
                        Diagnostic Procedure
                    </div>
                    <h1 className="hero-title">Angiogram</h1>
                    <p className="hero-subtitle">
                        Advanced diagnostic imaging to visualize your heart's blood vessels
                        and detect blockages with precision accuracy.
                    </p>
                    <div className="hero-cta">
                        <Link href="/contact" className="cta-primary">
                            Book Appointment
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a href="tel:04222222222" className="cta-secondary">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-card">
                        <div className="pulse-ring"></div>
                        <div className="heart-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info Strip */}
            <section className="quick-info">
                <div className="info-item">
                    <div className="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <span className="info-label">Duration</span>
                        <span className="info-value">30-60 mins</span>
                    </div>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                    <div className="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                            <path d="M3 21h18" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <span className="info-label">Hospital Stay</span>
                        <span className="info-value">Day Procedure</span>
                    </div>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                    <div className="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 12l2 2 4-4" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <span className="info-label">Recovery</span>
                        <span className="info-value">4-6 Hours</span>
                    </div>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                    <div className="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <span className="info-label">Anesthesia</span>
                        <span className="info-value">Local</span>
                    </div>
                </div>
            </section>

            {/* What is Angiogram */}
            <section className="content-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <h2 className="section-title">What is an Angiogram?</h2>
                    </div>
                    <div className="section-content">
                        <p className="lead-text">
                            An angiogram, also known as coronary angiography, is a specialized X-ray imaging
                            procedure used to visualize the inside of blood vessels, particularly the coronary
                            arteries that supply blood to your heart.
                        </p>
                        <p>
                            During the procedure, a contrast dye is injected through a thin, flexible tube
                            called a catheter into your coronary arteries. This dye makes the blood vessels
                            visible on X-ray images, allowing doctors to identify blockages, narrowing, or
                            other abnormalities in the arteries.
                        </p>
                        <div className="highlight-box">
                            <div className="highlight-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4M12 8h.01" />
                                </svg>
                            </div>
                            <div className="highlight-content">
                                <h4>Gold Standard Diagnostic Test</h4>
                                <p>
                                    Coronary angiography is considered the gold standard for diagnosing coronary
                                    artery disease and is crucial for planning further treatment such as angioplasty
                                    or bypass surgery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why is it Performed */}
            <section className="content-section alt-bg">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <h2 className="section-title">Why is an Angiogram Performed?</h2>
                    </div>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3>Chest Pain (Angina)</h3>
                            <p>Investigate unexplained chest pain or discomfort that may indicate coronary artery disease.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3>Abnormal Test Results</h3>
                            <p>Follow up on abnormal results from ECG, stress test, or echocardiogram.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>Heart Attack History</h3>
                            <p>Assess heart damage and arterial blockages after a heart attack.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83" />
                                </svg>
                            </div>
                            <h3>Pre-Surgery Planning</h3>
                            <p>Plan for heart surgery, angioplasty, or other cardiac interventions.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3>Congenital Heart Defects</h3>
                            <p>Evaluate heart problems present from birth and plan appropriate treatment.</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <h3>Treatment Evaluation</h3>
                            <p>Check how well previous treatments like stents or bypass are working.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedure Steps */}
            <section className="content-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">03</span>
                        <h2 className="section-title">The Procedure Step by Step</h2>
                    </div>
                    <div className="steps-timeline">
                        <div className="step-item">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Preparation</h3>
                                <p>
                                    You'll change into a hospital gown. An IV line is placed in your arm for
                                    medications. The groin or wrist area is cleaned and numbed with local anesthesia.
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Catheter Insertion</h3>
                                <p>
                                    A small incision is made, and a thin catheter is guided through the blood
                                    vessel to your heart, monitored by X-ray imaging in real-time.
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Dye Injection</h3>
                                <p>
                                    Contrast dye is injected through the catheter. You may feel a warm sensation
                                    briefly. The dye makes your arteries visible on the X-ray screen.
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Imaging & Analysis</h3>
                                <p>
                                    Multiple X-ray images are captured from different angles. The cardiologist
                                    analyzes the images to identify any blockages or abnormalities.
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">5</div>
                            <div className="step-content">
                                <h3>Completion & Recovery</h3>
                                <p>
                                    The catheter is removed, and pressure is applied to prevent bleeding.
                                    You'll rest for a few hours before being discharged the same day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risks & Benefits */}
            <section className="content-section alt-bg">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">04</span>
                        <h2 className="section-title">Benefits & Considerations</h2>
                    </div>
                    <div className="benefits-risks-grid">
                        <div className="benefits-card">
                            <div className="card-header benefits">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                <h3>Benefits</h3>
                            </div>
                            <ul className="card-list">
                                <li>Highly accurate diagnosis of coronary artery disease</li>
                                <li>Enables precise treatment planning</li>
                                <li>Can be combined with immediate treatment (angioplasty)</li>
                                <li>Minimally invasive procedure</li>
                                <li>Same-day discharge in most cases</li>
                                <li>Quick recovery time</li>
                            </ul>
                        </div>
                        <div className="risks-card">
                            <div className="card-header risks">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v4M12 16h.01" />
                                </svg>
                                <h3>Considerations</h3>
                            </div>
                            <ul className="card-list">
                                <li>Minor bruising at catheter insertion site</li>
                                <li>Rare allergic reaction to contrast dye</li>
                                <li>Very low risk of infection</li>
                                <li>Temporary kidney effects (monitored)</li>
                                <li>Brief discomfort during procedure</li>
                                <li>Need to lie flat for few hours post-procedure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="content-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">05</span>
                        <h2 className="section-title">Why Choose Sri Ramakrishna Hospitals?</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3>Expert Cardiologists</h3>
                            <p>Our team of highly experienced interventional cardiologists with thousands of successful procedures.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <path d="M8 21h8M12 17v4" />
                                </svg>
                            </div>
                            <h3>Advanced Technology</h3>
                            <p>State-of-the-art cardiac catheterization lab with the latest imaging equipment.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>24/7 Availability</h3>
                            <p>Round-the-clock emergency cardiac care and catheterization services.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3>Safety Protocols</h3>
                            <p>Strict safety standards and infection control measures for patient well-being.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2>Ready to Take the Next Step?</h2>
                        <p>
                            Our expert cardiologists are here to help you understand your heart health
                            and recommend the best course of action.
                        </p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="cta-btn-primary">
                                Book Your Appointment
                            </Link>
                            <a href="tel:04222222222" className="cta-btn-secondary">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                                </svg>
                                0422 222 2222
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="related-section">
                <div className="related-container">
                    <h2>Related Services</h2>
                    <div className="related-grid">
                        <Link href="/service/angioplasty" className="related-card">
                            <div className="related-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3>Angioplasty</h3>
                            <p>Stenting procedure to open blocked arteries</p>
                        </Link>
                        <Link href="/service/echocardiogram" className="related-card">
                            <div className="related-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <path d="M8 21h8M12 17v4" />
                                </svg>
                            </div>
                            <h3>Echocardiogram</h3>
                            <p>Ultrasound imaging of the heart</p>
                        </Link>
                        <Link href="/service/tmt" className="related-card">
                            <div className="related-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3>TMT Stress Test</h3>
                            <p>Treadmill-based heart evaluation</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
