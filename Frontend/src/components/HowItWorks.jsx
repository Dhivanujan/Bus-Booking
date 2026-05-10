import { Search, Armchair, CreditCard, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { icon: <Search size={28} />, num: '01', title: 'Search', desc: 'Enter your departure city, destination, and travel date.' },
  { icon: <Armchair size={28} />, num: '02', title: 'Select Seat', desc: 'Pick your preferred seat from the interactive layout.' },
  { icon: <CreditCard size={28} />, num: '03', title: 'Pay Securely', desc: 'Complete your payment with our encrypted checkout.' },
  { icon: <CheckCircle size={28} />, num: '04', title: 'Travel', desc: 'Receive your e-ticket and enjoy the journey!' },
];

const HowItWorks = () => {
  return (
    <section id="how" className="section how-section">
      <div className="container">
        <div className="how__header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Book in 4 Simple Steps</h2>
          <p className="section-subtitle">From search to seat — your next trip is just minutes away.</p>
        </div>

        <div className="how__steps">
          {steps.map((s, i) => (
            <div className="how-step" key={i}>
              <div className="how-step__icon">{s.icon}</div>
              <span className="how-step__num">{s.num}</span>
              <h3 className="how-step__title">{s.title}</h3>
              <p className="how-step__desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="how-step__connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
