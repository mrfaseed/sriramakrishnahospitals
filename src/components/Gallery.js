"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './Gallery.css';

const images = [
  '/5U1A4804.JPG',
  '/5U1A4807.JPG',
  '/5U1A4809.JPG',
  '/5U1A4811.JPG',
  '/5U1A4826.JPG',
  '/5U1A4832.JPG',
  '/5U1A4835.JPG'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    if (window.innerWidth <= 768) return; // Disable popup on mobile
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-container">
      {/* Decorative Background Elements */}
      <div className="bg-heart heart-1"></div>
      <div className="bg-heart heart-2"></div>

      <header className="gallery-header">
        <h1 className="gallery-title">
          See our <span className="heart-text">Gallery</span>
        </h1>
        <p className="gallery-subtitle">
          The heart of our care, visualized.
        </p>
        <div className="heart-beat-icon">
          <svg viewBox="0 0 32 29.6" className="heart-svg">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-11.8,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </div>
      </header>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className={`gallery-item item-${index % 4}`}
            onClick={() => openModal(src)}
          >
            <div className="image-wrapper">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="gallery-img"
              />
              <div className="overlay">
                <span className="overlay-heart">❤</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </div>
  );
}
