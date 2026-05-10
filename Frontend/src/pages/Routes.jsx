import { Clock, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Routes = () => {
  // Mock data for initial frontend setup
  const mockSchedules = [
    {
      id: '1',
      origin: 'New York',
      destination: 'Boston',
      departureTime: '2026-05-12T08:00:00Z',
      arrivalTime: '2026-05-12T12:00:00Z',
      price: 45.00,
      busType: 'Premium Sleeper'
    },
    {
      id: '2',
      origin: 'New York',
      destination: 'Washington DC',
      departureTime: '2026-05-12T09:30:00Z',
      arrivalTime: '2026-05-12T13:45:00Z',
      price: 55.00,
      busType: 'Luxury AC'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Available Routes</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
        Select a journey that fits your schedule.
      </p>

      <div style={{ display: 'grid', gap: '24px' }}>
        {mockSchedules.map((schedule, index) => (
          <div key={schedule.id} className="glass-card" style={{ 
            padding: '24px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            animationDelay: `${index * 100}ms`
          }}>
            {/* Route Info */}
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {new Date(schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{schedule.origin}</div>
                </div>
                
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
                  <div style={{ height: '2px', background: 'var(--color-text-secondary)', flex: 1 }}></div>
                  <Clock size={16} />
                  <div style={{ height: '2px', background: 'var(--color-text-secondary)', flex: 1 }}></div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {new Date(schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{schedule.destination}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> 4h Direct
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CreditCard size={14} /> {schedule.busType}
                </span>
              </div>
            </div>

            {/* Price and Action */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                ${schedule.price.toFixed(2)}
              </div>
              <Link to={`/book/${schedule.id}`} className="btn-primary" style={{ padding: '12px 32px' }}>
                Select Seats
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routes;
