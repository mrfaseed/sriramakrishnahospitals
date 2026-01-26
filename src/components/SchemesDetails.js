"use client";
import React, { useEffect } from 'react';
import './SchemesDetails.css';

const SchemesDetails = ({ isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className={`schemes-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="schemes-modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="schemes-modal-header">
                    <div className="schemes-modal-title">
                        <span>🏥</span> Government Schemes & Insurance
                    </div>
                    <button className="schemes-modal-close-btn" onClick={onClose} aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="schemes-modal-content">
                    <div className="schemes-content-grid">
                        {/* English Section */}
                        <div className="scheme-lang-section">
                            <div className="scheme-section">
                                <h3 className="scheme-heading">Cashless Treatment Available</h3>
                                <p>Our hospital provides cashless treatment for eligible patients under the following health insurance schemes:</p>
                                <ul className="scheme-list" style={{ marginTop: '10px' }}>
                                    <li><strong>CMCHIS</strong> (Chief Minister’s Comprehensive Health Insurance Scheme)</li>
                                    <li><strong>PMJAY</strong> (Pradhan Mantri Jan Arogya Yojana)</li>
                                </ul>
                            </div>

                            <div className="important-box">
                                <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>Important Information</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem' }}>For treatments covered under these schemes, patients are not required to make upfront payment at the hospital.</p>
                            </div>
                        </div>

                        {/* Tamil Section */}
                        <div className="scheme-lang-section">
                            <div className="scheme-section">
                                <h3 className="scheme-heading tamil">காப்பீடு திட்டங்கள்</h3>
                                <p>எங்கள் மருத்துவமனையில் கீழ்கண்ட மருத்துவ காப்பீடு திட்டங்களின் கீழ் தகுதியான நோயாளிகளுக்கு Cashless சிகிச்சை வசதி வழங்கப்படுகிறது:</p>
                                <ul className="scheme-list" style={{ marginTop: '10px' }}>
                                    <li><strong>முதலமைச்சரின் விரிவான மருத்துவ காப்பீடு திட்டம்</strong> (CMCHIS)</li>
                                    <li><strong>பிரதம மந்திரி மக்கள் ஆரோக்கிய திட்டம்</strong> (PMJAY)</li>
                                </ul>
                            </div>


                            <div className="important-box tamil">
                                <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>முக்கிய அறிவிப்பு</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem' }}>இந்த திட்டத்தின் கீழ் உள்ள சிகிச்சைகளுக்கு நோயாளிகள் மருத்துவமனையில் முன்பணம் செலுத்த தேவையில்லை.</p>
                            </div>
                        </div>
                    </div>

                    <div className="helpline">
                        <p style={{ margin: '0 0 5px 0' }}>Grievance Helpline / புகார் தொடர்புக்கு</p>
                        <div style={{ fontSize: '1.4rem' }}>📞 1800 425 3993</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchemesDetails;
