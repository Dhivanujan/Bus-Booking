import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '100px' }}>
      
      {/* Hero Section */}
      <section style={{ 
        marginTop: '60px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'rgba(179, 255, 0, 0.1)',
          border: '1px solid var(--color-primary-glow)',
          borderRadius: 'var(--radius-full)',
          color: 'var(--color-primary)',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '1px',
          marginBottom: '24px',
          textTransform: 'uppercase'
        }}>
          Next Generation Travel
        </div>
        
        <h1 style={{ 
          fontSize: '4.5rem', 
          maxWidth: '800px', 
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          Experience <span className="text-gradient">Quantum</span> Comfort on Every Journey
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--color-text-secondary)',
          maxWidth: '600px',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          Book luxury intercity travel with cinematic views, premium seating, and state-of-the-art amenities. Welcome to the future of transit.
        </p>
      </section>

      {/* Quick Search Widget */}
      <section style={{ marginTop: '20px', position: 'relative', zIndex: 10 }}>
        <div className="glass-panel" style={{ 
          padding: '32px',
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-end',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 200px' }}>
            <label className="form-label">
              <MapPin size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }}/> 
              Origin
            </label>
            <input type="text" className="form-control" placeholder="City or Station" />
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <label className="form-label">
              <MapPin size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }}/> 
              Destination
            </label>
            <input type="text" className="form-control" placeholder="City or Station" />
          </div>

          <div style={{ flex: '1 1 180px' }}>
            <label className="form-label">
              <Calendar size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }}/> 
              Date
            </label>
            <input type="date" className="form-control" />
          </div>

          <div style={{ flex: '1 1 120px' }}>
            <label className="form-label">
              <Users size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }}/> 
              Passengers
            </label>
            <select className="form-control" style={{ appearance: 'none' }}>
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
            </select>
          </div>

          <button className="btn-primary" style={{ padding: '14px 32px', height: '52px' }}>
            <Search size={20} />
            Search Buses
          </button>
        </div>
      </section>

      {/* Features Showcase */}
      <section style={{ marginTop: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Why Choose LuxeBus?</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>Elevating your travel experience with premium features.</p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {/* Feature 1 */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              background: 'rgba(179, 255, 0, 0.1)', 
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Zero Hidden Fees</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              What you see is what you pay. Our transparent pricing ensures you never encounter unexpected charges at checkout.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card delay-100" style={{ padding: '32px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              background: 'rgba(0, 240, 255, 0.1)', 
              color: 'var(--color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>On-Time Guarantee</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              We value your time. Our predictive routing ensures 98% on-time arrivals, or you get your next trip on us.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card delay-200" style={{ padding: '32px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              background: 'rgba(179, 255, 0, 0.1)', 
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>First-Class Seats</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Experience unparalleled comfort with our ergonomic memory foam seats and generous legroom.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
