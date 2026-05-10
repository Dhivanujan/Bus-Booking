import { Bus, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Bus size={24} />
              <span>LUXE<span>BUS</span></span>
            </div>
            <p className="footer__tagline">
              Premium intercity bus travel — comfort, safety, and punctuality on every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#search">Book a Trip</a></li>
              <li><a href="#routes">Popular Routes</a></li>
              <li><a href="#how">How It Works</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer__col">
            <h4 className="footer__heading">Support</h4>
            <ul>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#cancellation">Cancellation Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li><MapPin size={14} /> 123 Transit Ave, New York</li>
              <li><Phone size={14} /> +1 (800) 555-0199</li>
              <li><Mail size={14} /> support@luxebus.com</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} LuxeBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
