import { Shield, Wifi, Clock, CreditCard } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Clock size={28} />,
    title: 'On-Time Guarantee',
    desc: '98% punctual arrivals with live GPS tracking on every route.',
    color: 'var(--sunset)'
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure Booking',
    desc: 'End-to-end encrypted payments with instant e-ticket confirmation.',
    color: 'var(--teal)'
  },
  {
    icon: <Wifi size={28} />,
    title: 'Free Wi-Fi',
    desc: 'High-speed internet onboard so you stay connected on the go.',
    color: 'var(--blue-accent)'
  },
  {
    icon: <CreditCard size={28} />,
    title: 'No Hidden Fees',
    desc: 'Transparent pricing — what you see at checkout is what you pay.',
    color: 'var(--pink)'
  }
];

const Features = () => {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="features__header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Travel with Confidence</h2>
          <p className="section-subtitle">
            Every detail designed for comfort, safety, and convenience.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div className={`feature-card fade-up fade-up-d${i % 3 + 1}`} key={i}>
              <div className="feature-card__icon" style={{ color: f.color, background: `${f.color}15` }}>
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
