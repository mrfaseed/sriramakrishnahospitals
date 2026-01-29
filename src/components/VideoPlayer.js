"use client";
import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ src, poster }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation(); // Prevent toggling play when clicking mute
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Update state when video ends
    useEffect(() => {
        const video = videoRef.current;
        const handleEnded = () => setIsPlaying(false);

        if (video) {
            video.addEventListener('ended', handleEnded);
        }

        return () => {
            if (video) {
                video.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    return (
        <div className={`video-player-container ${isPlaying ? 'playing' : 'paused'}`} onClick={togglePlay}>
            <video
                ref={videoRef}
                src={src}
                className="custom-video"
                poster={poster}
                playsInline
                loop
            />

            {/* Center Play Button Overlay */}
            <div className="video-overlay">
                {!isPlaying && (
                    <div className="play-btn-center">
                        <svg className="play-icon" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            <div className="controls-bar">
                <button className="control-btn" onClick={toggleMute}>
                    {isMuted ? (
                        <svg className="control-icon" viewBox="0 0 24 24">
                            <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                        </svg>
                    ) : (
                        <svg className="control-icon" viewBox="0 0 24 24">
                            <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93L15.54 8.46a5 5 0 0 0 0 7.07l3.53 3.53" />
                        </svg>
                    )}
                </button>
                <button className="control-btn" onClick={(e) => { e.stopPropagation(); togglePlay(); }}>
                    {isPlaying ? (
                        <svg className="control-icon" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="currentColor" stroke="none" />
                        </svg>
                    ) : (
                        <svg className="control-icon" viewBox="0 0 24 24">
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor" stroke="none" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
