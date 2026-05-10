import { MapPin, ArrowRight } from 'lucide-react';
import './PopularRoutes.css';

const routes = [
  { from: 'New York', to: 'Boston', duration: '4h 15m', price: 45, departures: 12 },
  { from: 'Los Angeles', to: 'San Francisco', duration: '6h 30m', price: 55, departures: 8 },
  { from: 'Chicago', to: 'Detroit', duration: '4h 45m', price: 38, departures: 10 },
  { from: 'Miami', to: 'Orlando', duration: '3h 50m', price: 32, departures: 15 },
  { from: 'Seattle', to: 'Portland', duration: '3h 30m', price: 28, departures: 9 },
  { from: 'Dallas', to: 'Houston', duration: '3h 45m', price: 35, departures: 11 },
];

const PopularRoutes = () => {
  return (
    <section id="routes" className="section routes-section">
      <div className="container">
        <div className="routes__header">
          <div>
            <span className="section-label">Popular Routes</span>
            <h2 className="section-title">Trending Destinations</h2>
            <p className="section-subtitle">Most booked routes this month — book early for the best seats.</p>
          </div>
        </div>

        <div className="routes__grid">
          {routes.map((r, i) => (
            <div className="route-card" key={i}>
              <div className="route-card__route">
                <div className="route-card__city">
                  <MapPin size={16} className="route-card__pin" />
                  <span>{r.from}</span>
                </div>
                <div className="route-card__arrow">
                  <div className="route-card__line"></div>
                  <ArrowRight size={16} />
                </div>
                <div className="route-card__city">
                  <MapPin size={16} className="route-card__pin" />
                  <span>{r.to}</span>
                </div>
              </div>

              <div className="route-card__details">
                <span className="route-card__tag">{r.duration}</span>
                <span className="route-card__tag">{r.departures} daily</span>
              </div>

              <div className="route-card__footer">
                <span className="route-card__price">
                  From <strong>${r.price}</strong>
                </span>
                <button className="btn btn-primary route-card__book" onClick={() => {
                  document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
