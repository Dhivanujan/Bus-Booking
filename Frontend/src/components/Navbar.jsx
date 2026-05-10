import { useState, useEffect } from 'react';
import { Bus, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__brand" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <Bus size={28} />
          <span className="navbar__brand-text">LUXE<span>BUS</span></span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#search" onClick={(e) => { e.preventDefault(); scrollTo('search'); }}>Book</a></li>
          <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }}>Features</a></li>
          <li><a href="#routes" onClick={(e) => { e.preventDefault(); scrollTo('routes'); }}>Routes</a></li>
          <li><a href="#how" onClick={(e) => { e.preventDefault(); scrollTo('how'); }}>How It Works</a></li>
          <li><a href="#reviews" onClick={(e) => { e.preventDefault(); scrollTo('reviews'); }}>Reviews</a></li>
        </ul>

        <div className="navbar__actions">
          <a href="#search" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('search'); }}>
            Book Now
          </a>
          <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
