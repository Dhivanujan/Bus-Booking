import heroImg from '../assets/hero.png';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Background image with overlay */}
      <div className="hero__bg">
        <img src={heroImg} alt="Luxury buses on highway at sunset" />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text fade-up">
          <span className="section-label">Premium Bus Travel</span>
          <h1 className="hero__title">
            Your Journey,<br />
            <span className="hero__title--accent">Redefined.</span>
          </h1>
          <p className="hero__description">
            Experience luxury intercity travel with panoramic views, 
            reclining seats, onboard Wi-Fi, and guaranteed on-time arrivals.
          </p>
          <div className="hero__cta">
            <button className="btn btn-primary" onClick={scrollToSearch}>
              Book Your Trip <ArrowRight size={18} />
            </button>
            <a href="#how" className="btn btn-outline" onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); 
            }}>
              Learn More
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">50K+</span>
              <span className="hero__stat-label">Happy Travelers</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Routes</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">On-Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
