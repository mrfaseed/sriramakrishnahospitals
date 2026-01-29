"use client";
import React from "react";
import "./Doctors.css";

const Doctors = () => {
    const doctors = [
        {
            id: 1,
            name: "Dr. B. Rajesh",
            role: "Senior Consultant",
            department: "Interventional Cardiology",
            qualification: "MD (General Medicine), DM (Interventional Cardiology)",
            description: "Senior Interventional Cardiologist with extensive experience in advanced and complex cardiac procedures.",
            image: "/p3.jpeg"
        },
        {
            id: 2,
            name: "Dr. B. Paadma Priya",
            role: "Senior Consultant",
            department: "Nephrology",
            qualification: "MD (General Medicine), DM (Nephrology)",
            description: "Consultant Nephrologist specializing in comprehensive kidney care and dialysis management.",
            image: "/p2.jpeg"
        },
        {
            id: 3,
            name: "Dr. K. Vellaichamy",
            role: "Hospital Director",
            department: "Administration",
            qualification: "MBBS",
            description: "Providing visionary leadership with a strong commitment to ethical, patient-centered, and community-focused healthcare.",
            image: "/p4.jpg"
        },
        {
            id: 4,
            name: "Dr. V. Sivaraman",
            role: "Assistant Doctor",
            department: "General Care",
            qualification: "MBBS",
            
            description: "Actively involved in day-to-day patient care and clinical coordination to ensure continuous medical support.",
            image: "/p1.jpeg"
        }
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
                                    {doctor.image ? (
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="doctor-image"
                                        />
                                    ) : (
                                        <div className="placeholder-image">
                                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#a0a0a0" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                <div className="info-container">
                                    <span className="department-badge">{doctor.department}</span>
                                    <h3 className="doctor-name">{doctor.name}</h3>
                                    <div className="doctor-details">
                                        <span className="role">{doctor.role}</span>
                                        <span className="qualification">{doctor.qualification}</span>
                                        <p className="doctor-description">{doctor.description}</p>
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
