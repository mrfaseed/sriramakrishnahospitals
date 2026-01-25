"use client";
import React from "react";
import "./Doctors.css";

const Doctors = () => {
    const doctors = [
        {
            id: 1,
            name: "Dr. Person 1",
            role: "Senior Consultant",
            department: "Cardiology",
            qualification: "MBBS, MD, DM"
        },
        {
            id: 2,
            name: "Dr. Person 2",
            role: "Chief Surgeon",
            department: "Neurology",
            qualification: "MBBS, MS, MCh"
        },
        {
            id: 3,
            name: "Dr. Person 3",
            role: "Head of Department",
            department: "Orthopedics",
            qualification: "MBBS, MS, DNB"
        },
        {
            id: 4,
            name: "Dr. Person 4",
            role: "Consultant",
            department: "Pediatrics",
            qualification: "MBBS, MD"
        },
    ];

    return (
        <div className="doctors-page-elegant">
            {/* Elegant Hero Section */}
            <section className="elegant-hero">
                <div className="hero-content">
                    <div className="title-wrapper">
                        <span className="subtitle">Medical Excellence</span>
                        <h1 className="title">Our Specialists</h1>
                    </div>
                    <p className="description">
                        Meet our team of distinguished medical professionals dedicated to providing
                        world-class healthcare with compassion and expertise.
                    </p>
                </div>
            </section>

            {/* Professional Grid Section */}
            <section className="team-section">
                <div className="container">
                    <div className="doctor-grid">
                        {doctors.map((doctor) => (
                            <div key={doctor.id} className="pro-card">
                                <div className="image-container">
                                    <div className="placeholder-image">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor" />
                                        </svg>
                                        <span className="upload-text">Upload Portrait</span>
                                    </div>
                                </div>

                                <div className="info-container">
                                    <span className="department-badge">{doctor.department}</span>
                                    <h3 className="doctor-name">{doctor.name}</h3>
                                    <div className="doctor-details">
                                        <span className="role">{doctor.role}</span>
                                        <span className="qualification">{doctor.qualification}</span>
                                    </div>
                                    <button className="book-btn">
                                        Book Appointment
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="trust-section">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-item">
                            <span className="number">50+</span>
                            <span className="label">Specialists</span>
                        </div>
                        <div className="separator"></div>
                        <div className="trust-item">
                            <span className="number">24/7</span>
                            <span className="label">Emergency Care</span>
                        </div>
                        <div className="separator"></div>
                        <div className="trust-item">
                            <span className="number">100%</span>
                            <span className="label">Patient Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Doctors;
