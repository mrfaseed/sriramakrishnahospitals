"use client";
import React, { useState, useEffect } from "react";
import "./SchemesPopup.css";
import Link from 'next/link';

const SchemesPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Random delay between 3 and 10 seconds
        const randomDelay = Math.floor(Math.random() * 7000) + 3000;

        const showTimer = setTimeout(() => {
            setShouldRender(true);
            // Small timeout to allow render before adding the visible class for animation
            requestAnimationFrame(() => {
                setIsVisible(true);
            });
        }, randomDelay);

        return () => clearTimeout(showTimer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 800); // 800ms matches CSS transition
    };

    if (!shouldRender) return null;

    return (
        <div className={`schemes-popup-container ${isVisible ? "visible" : ""}`}>
            <div className="schemes-popup-content">
                <button className="schemes-close-btn" onClick={handleClose} aria-label="Close">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="schemes-popup-header">
                    <span className="schemes-popup-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 6v4"></path>
                            <path d="M14 14h-4"></path>
                            <path d="M14 18h-4"></path>
                            <path d="M14 8h-4"></path>
                            <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                            <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
                        </svg>
                    </span>
                    <span>Government Schemes</span>
                </div>


                <p className="schemes-popup-text">
                    We accept various Government Health Schemes. Check your eligibility today.
                </p>

                <Link href="/schemes" className="schemes-popup-cta">
                    Check Eligibility <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default SchemesPopup;
