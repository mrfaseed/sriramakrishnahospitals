"use client";
import React, { useRef, useState, useEffect } from 'react';
import Hls from 'hls.js';
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
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Initialize HLS
    useEffect(() => {
        const video = videoRef.current;
        let hls;

        if (video) {
            if (src.endsWith('.m3u8')) {
                if (Hls.isSupported()) {
                    hls = new Hls();
                    hls.loadSource(src);
                    hls.attachMedia(video);
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    // Native HLS support
                    video.src = src;
                }
            } else {
                // Regular video file
                video.src = src;
            }
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [src]);

    // Handle video events
    useEffect(() => {
        const video = videoRef.current;
        let hls;

        // Function to init HLS
        const initHls = async () => {
            // Dynamically import HLS.js to avoid SSR issues
            const Hls = (await import('hls.js')).default;

            if (Hls.isSupported() && src.endsWith('.m3u8')) {
                hls = new Hls();
                hls.loadSource(src);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    // Ready to play
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Native HLS support (Safari)
                video.src = src;
            } else {
                // Regular video
                video.src = src;
            }
        };

        initHls();

        const handleEnded = () => setIsPlaying(false);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        if (video) {
            video.addEventListener('ended', handleEnded);
            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
        }

        return () => {
            if (video) {
                video.removeEventListener('ended', handleEnded);
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
            }
            if (hls) {
                hls.destroy();
            }
        };
    }, [src]);

    return (
        <div className={`video-player-container ${isPlaying ? 'playing' : 'paused'}`} onClick={togglePlay}>
            <video
                ref={videoRef}
                className="custom-video"
                poster={poster}
                loop
                playsInline
                muted={isMuted} // Control mute via state
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
