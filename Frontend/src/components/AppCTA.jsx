import { Smartphone, ArrowRight } from 'lucide-react';
import './AppCTA.css';

const AppCTA = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card glass">
          <div className="cta-card__content">
            <span className="section-label"><Smartphone size={14} /> Get the App</span>
            <h2 className="section-title">Download LuxeBus</h2>
            <p className="section-subtitle">
              Track your bus live, manage bookings on the go, and get exclusive app-only discounts.
            </p>
            <div className="cta-card__buttons">
              <button className="btn btn-primary">
                App Store <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline">
                Google Play <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="cta-card__visual">
            <div className="cta-card__phone">
              <div className="cta-card__screen">
                <div className="cta-card__screen-header"></div>
                <div className="cta-card__screen-line"></div>
                <div className="cta-card__screen-line cta-card__screen-line--short"></div>
                <div className="cta-card__screen-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
