import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Sarah Mitchell',
    route: 'NYC → Boston',
    text: 'The seats were incredibly comfortable and we arrived 10 minutes early. Best bus experience ever!',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    route: 'LA → San Francisco',
    text: 'Free Wi-Fi, USB charging, and the smoothest ride. LuxeBus has set a new standard for intercity travel.',
    rating: 5
  },
  {
    name: 'Emily Chen',
    route: 'Chicago → Detroit',
    text: 'Booking was super easy and the price was transparent — no sneaky fees at checkout. Love it!',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="section testimonials-section">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Travelers Say</h2>
          <p className="section-subtitle">Real reviews from passengers who experienced the difference.</p>
        </div>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div className="testimonial-card" key={i}>
              <Quote size={24} className="testimonial-card__quote" />
              <p className="testimonial-card__text">{r.text}</p>
              <div className="testimonial-card__stars">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <span className="testimonial-card__name">{r.name}</span>
                  <span className="testimonial-card__route">{r.route}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
