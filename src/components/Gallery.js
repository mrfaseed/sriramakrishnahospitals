"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
import './Gallery.css';

const galleryItems = [
  { type: 'image', src: '/full_hospital_1.jpg', alt: 'Full Hospital View' },
  { type: 'image', src: '/5U1A4804.JPG', alt: 'Hospital Entrance' },
  { type: 'image', src: '/5U1A4807.JPG', alt: 'Reception Area' },
  { type: 'image', src: '/5U1A4809.JPG', alt: 'Waiting Area' },
  { type: 'image', src: '/5U1A4811.JPG', alt: 'Corridor' },
  { type: 'image', src: '/5U1A4813.JPG.jpeg', alt: 'Medical Procedure' }, /* Swapped in */
  { type: 'image', src: '/5U1A4832_fixed.png', alt: 'Hospital Facility' },
  { type: 'image', src: '/008.JPG', alt: 'Medical Equipment' },
  { type: 'image', src: '/5U1A4835.JPG', alt: 'Hospital Interior' }
];

const featuredVideo = {
  type: 'video',
  src: '/videos/pacemaker/playlist.m3u8',
  alt: 'Pacemaker Implantation Procedure',
  poster: '/5U1A4826.JPG' /* New request */
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
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

      {/* Featured Video Section */}
      <section className="featured-video-section">
        <h2 className="section-heading">Featured Procedure</h2>
        <div
          className="featured-video-card"
          onClick={() => openModal(featuredVideo)}
        >
          <div className="featured-image-wrapper">
            <Image
              src={featuredVideo.poster}
              alt={featuredVideo.alt}
              fill
              className="featured-video-cover"
            />
            <div className="video-overlay-persistent">
              <div className="play-button-outer">
                <span className="play-icon-large">▶</span>
              </div>
            </div>
            <div className="video-badge-large">WATCH VIDEO</div>
          </div>
          <div className="featured-info">
            <h3>{featuredVideo.alt}</h3>
            <p>Watch a detailed overview of the procedure.</p>
          </div>
        </div>
      </section>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`gallery-item item-${index % 4} ${item.type === 'video' ? 'video-item' : ''}`}
            onClick={() => openModal(item)}
          >
            <div className="image-wrapper">
              <Image
                src={item.type === 'video' ? item.poster : item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="gallery-img"
              />
              <div className="overlay">
                {item.type === 'video' ? (
                  <div className="video-overlay-persistent">
                    <span className="play-icon-large">▶</span>
                  </div>
                ) : (
                  <span className="overlay-heart">❤</span>
                )}
              </div>
              {item.type === 'video' && (
                <div className="video-badge">VIDEO</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            {selectedItem.type === 'video' ? (
              <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
                <VideoPlayer src={selectedItem.src} poster={selectedItem.poster} />
              </div>
            ) : (
              <img src={selectedItem.src} alt={selectedItem.alt} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
