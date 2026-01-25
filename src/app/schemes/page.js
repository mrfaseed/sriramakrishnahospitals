"use client";
import React from 'react';
import '../../components/Schemes.css'; // Importing from components as requested

export default function SchemesPage() {
    return (
        <div className="schemes-page-container">
            {/* Hero Header */}
            <header className="schemes-header">
                <h1 className="schemes-title">Government Schemes & Insurance</h1>
                <p className="schemes-subtitle">
                    We are committed to making healthcare accessible. Our hospital accepts major government health schemes for cashless treatment.
                </p>
            </header>

            {/* Main Content */}
            <div className="schemes-content-wrapper">
                <div className="schemes-grid">

                    {/* English Card */}
                    <div className="scheme-lang-card english">
                        <span className="card-header-badge">English</span>
                        <h2>Cashless Treatment</h2>

                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '24px' }}>
                            Our hospital provides cashless treatment for eligible patients under the following schemes:
                        </p>

                        <ul className="scheme-list-premium">
                            <li><strong>CMCHIS</strong> (Chief Minister’s Comprehensive Health Insurance Scheme)</li>
                            <li><strong>PMJAY</strong> (Pradhan Mantri Jan Arogya Yojana)</li>
                        </ul>

                        <h3>Services Covered</h3>
                        <ul className="scheme-list-premium">
                            <li>General Medical Treatment</li>
                            <li>Advanced Surgical Procedures</li>
                            <li>Diagnostic Tests & Scans</li>
                            <li>Complete Inpatient Care</li>
                        </ul>

                        <div className="info-highlight">
                            <h4>Important Information</h4>
                            <p>For treatments covered under these schemes, patients are not required to make any upfront payment at the hospital.</p>
                        </div>
                    </div>

                    {/* Tamil Card */}
                    <div className="scheme-lang-card tamil">
                        <span className="card-header-badge">தமிழ்</span>
                        <h2>இலவச சிகிச்சை</h2>

                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '24px' }}>
                            எங்கள் மருத்துவமனையில் கீழ்கண்ட காப்பீடு திட்டங்களின் கீழ் தகுதியானவர்களுக்கு சிகிச்சை அளிக்கப்படுகிறது:
                        </p>

                        <ul className="scheme-list-premium">
                            <li><strong>முதலமைச்சரின் விரிவான மருத்துவ காப்பீடு</strong> (CMCHIS)</li>
                            <li><strong>பிரதம மந்திரி மக்கள் ஆரோக்கிய திட்டம்</strong> (PMJAY)</li>
                        </ul>

                        <h3>திட்டத்தில் உள்ள சேவைகள்</h3>
                        <ul className="scheme-list-premium">
                            <li>பொது மருத்துவ சிகிச்சை</li>
                            <li>அறுவை சிகிச்சைகள்</li>
                            <li>பரிசோதனைகள் (Scans & Tests)</li>
                            <li>உள்நோயாளி மருத்துவ சேவைகள்</li>
                        </ul>

                        <div className="info-highlight" style={{ backgroundColor: '#fef2f2', borderColor: '#fee2e2' }}>
                            <h4 style={{ color: '#991b1b' }}>முக்கிய அறிவிப்பு</h4>
                            <p style={{ color: '#b91c1c' }}>இந்த திட்டத்தின் கீழ் உள்ள சிகிச்சைகளுக்கு நோயாளிகள் மருத்துவமனையில் முன்பணம் செலுத்த தேவையில்லை.</p>
                        </div>
                    </div>

                </div>

                {/* Helpline Section */}
                <div className="helpline-banner">
                    <div className="helpline-content">
                        <div className="helpline-title">Grievance Helpline / புகார் தொடர்புக்கு</div>
                        <a href="tel:18004253993" className="helpline-number-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            1800 425 3993
                        </a>
                        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Call us completely toll-free 24/7</p>
                    </div>
                </div>

                <div className="schemes-hero-image-container">
                    <img
                        src="/5U1A4813.JPG.jpeg"
                        alt="Sri Ramakrishna Hospital Schemes"
                        className="schemes-hero-img"
                    />
                </div>
            </div>
        </div>
    );
}
