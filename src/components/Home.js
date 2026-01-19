import Link from 'next/link';


export default function Home() {
  return (
    <div className='home-app-container'>
      {/* Home Hero Section */}
      <section className='home-hero'>
        <div className='home-hero-content'>
          <h1 className='home-title'>Advanced Healthcare,<br /> <span className='text-highlight'>Trusted Care</span></h1>
          <p className='home-subtitle'>Your Health, Our Priority. Experience world-class medical facilities.</p>
          <Link href="/contact" className='cta-button'>
            Contact Us
          </Link>
        </div>
      </section>

      {/* About Summary Section (Duplicated from AboutUs) */}
      <section className='section-container intro-section home-about-section'>
        <div className='intro-text slide-in-left'>
          <h2>Pioneering Healthcare</h2>
          <p>
            For over three decades, Sri Ramakrishna Hospitals has been a beacon of hope and healing.
            We are dedicated to providing world-class medical care with a human touch.
            Our commitment to excellence is reflected in our state-of-the-art facilities and
            our compassionate team of medical professionals.
          </p>
          <a href="/about" className='read-more-link'>Read More About Us &rarr;</a>
        </div>
        <div className='intro-image slide-in-right'>
          {/* Reuse the logic/classes from AboutUs for consistency */}
          <div className='image-placeholder-box'>
            <div className='pulse-circle'></div>
            <span>Modern Care</span>
          </div>
        </div>
      </section>

      {/* Quick Stats (Duplicated from AboutUs) */}
      <section className='stats-parallax home-stats'>
        <div className='stat-item'>
          <span className='stat-number'>30+</span>
          <span className='stat-label'>Years of Service</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>500+</span>
          <span className='stat-label'>Expert Doctors</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>1M+</span>
          <span className='stat-label'>Happy Patients</span>
        </div>
      </section>
    </div>
  );
}
