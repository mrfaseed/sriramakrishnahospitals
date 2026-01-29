'use client';
import { useState, useEffect } from 'react';
import './Loader.css';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Simulate loading time (minimum 2s for branding, or wait for window load)
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = 'unset';
            }, 2000); // 1.5 - 2s splash screen duration
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback in case load event already fired or takes too long
            const timeout = setTimeout(handleLoad, 3000);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(timeout);
                document.body.style.overflow = 'unset';
            };
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`site-loader ${!isLoading ? 'hidden' : ''}`}>
            <div className="loader-heart-container">
                {/* Animated Ripple Backgrounds */}
                <div className="loader-ripple"></div>
                <div className="loader-ripple"></div>

                {/* Heart Icon */}
                <svg
                    className="loader-heart"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>

            <div className="loader-text">Sri Ramakrishna Hospital</div>
            <div className="loader-subtext">Caring with Compassion</div>
        </div>
    );
}
