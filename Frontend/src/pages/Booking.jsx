import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';

const Booking = () => {
  const { scheduleId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState(1);

  const toggleSeat = (seatNum) => {
    if (selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNum));
    } else {
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seatNum]);
      }
    }
  };

  const renderSeatLayout = () => {
    const seats = Array.from({ length: 40 }, (_, i) => i + 1);
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '12px',
        background: 'rgba(255, 255, 255, 0.02)',
        padding: '24px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)'
      }}>
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat);
          const isBooked = [3, 7, 12, 14].includes(seat); // Mock booked seats

          return (
            <button
              key={seat}
              disabled={isBooked}
              onClick={() => toggleSeat(seat)}
              style={{
                padding: '16px 0',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: isSelected ? 'var(--color-primary)' : isBooked ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)',
                background: isSelected ? 'var(--color-primary-glow)' : isBooked ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                color: isBooked ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                cursor: isBooked ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontWeight: 600
              }}
            >
              {seat}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px', minHeight: 'calc(100vh - 100px)' }}>
      <Link to="/routes" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
        <ArrowLeft size={16} /> Back to Routes
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Complete Your Booking</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
        Schedule #{scheduleId || '1'}
      </p>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Left Column: Flow */}
        <div style={{ flex: '1 1 500px' }}>
          {step === 1 && (
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Select Your Seats</h2>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '4px' }}></div> Available
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'var(--color-primary-glow)', border: '1px solid var(--color-primary)', borderRadius: '4px' }}></div> Selected
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '4px' }}></div> Booked
                </span>
              </div>
              
              {renderSeatLayout()}

              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '32px' }}
                disabled={selectedSeats.length === 0}
                onClick={() => setStep(2)}
              >
                Proceed to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Payment Details</h2>
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <div style={{ position: 'relative' }}>
                  <CreditCard size={18} style={{ position: 'absolute', left: '16px', top: '17px', color: 'var(--color-text-muted)' }} />
                  <input type="text" className="form-control" placeholder="0000 0000 0000 0000" style={{ paddingLeft: '48px' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input type="text" className="form-control" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label className="form-label">CVC</label>
                  <input type="text" className="form-control" placeholder="123" />
                </div>
              </div>
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '16px' }}
                onClick={() => setStep(3)}
              >
                Pay ${(selectedSeats.length * 45).toFixed(2)}
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="glass-panel" style={{ padding: '48px', textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'rgba(179, 255, 0, 0.1)', 
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}>
                <CheckCircle size={40} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Booking Confirmed!</h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
                Your tickets have been sent to your email. Have a great journey.
              </p>
              <Link to="/" className="btn-secondary">
                Return to Home
              </Link>
            </div>
          )}
        </div>

        {/* Right Column: Summary */}
        <div style={{ flex: '1 1 300px' }}>
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--glass-border)' }}>
              Booking Summary
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Selected Seats</span>
              <span style={{ fontWeight: 600 }}>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Price per Seat</span>
              <span style={{ fontWeight: 600 }}>$45.00</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Taxes & Fees</span>
              <span style={{ fontWeight: 600 }}>$0.00</span>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              paddingTop: '24px', 
              borderTop: '1px solid var(--glass-border)',
              fontSize: '1.2rem'
            }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                ${(selectedSeats.length * 45).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
