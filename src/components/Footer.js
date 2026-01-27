import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Background 2D Effects */}
            <div className="footer-bg-effect effect-1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </div>
            <div className="footer-bg-effect effect-2">
                <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10H10L15 0L25 20L30 10H100" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>
            <div className="footer-bg-effect effect-3">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" opacity="0.2" />
                    <path d="M12 6V18M6 12H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>

            {/* Equalizer Animation */}
            <div className="equalizer-container">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className="footer-content">
                <div className="footer-section brand">
                    <h2 className="footer-logo">Sri Ramakrishna<br />Hospitals</h2>
                    <p className="footer-tagline">
                        Dedicated to healing with compassion and advanced medical technology.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="/doctors">Doctors</Link></li>
                        <li><Link href="/schemes">Schemes</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section services">
                    <h3>Our Services</h3>
                    <ul>
                        <li><Link href="/service">Cardiology</Link></li>
                        <li><Link href="/service">General Medicine</Link></li>
                        <li><Link href="/service">Interventional cardiology</Link></li>
                        <li><Link href="/service">Nephrology (dialysis)</Link></li>
                        <li><Link href="/service">Emergency</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <div className="contact-item">
                        <MapPin className="contact-icon" size={24} />
                        <p>HWWW+J8R, GT Nagar <br />Virudhunagar, Tamil Nadu 626001</p>
                    </div>
                    <div className="contact-item">
                        <Mail className="contact-icon" size={20} />
                        <p>Email: info@ramakrishnahospitals.com</p>
                    </div>
                    <div className="contact-item">
                        <Phone className="contact-icon" size={20} />
                        <p>Phone: +91 1234567890</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sri Ramakrishna Hospitals. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
