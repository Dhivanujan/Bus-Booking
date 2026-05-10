import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';

const Register = () => {
  return (
    <div className="container animate-fade-in" style={{ 
      minHeight: 'calc(100vh - 100px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '560px',
        padding: '48px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '150px',
          height: '150px',
          background: 'rgba(0, 240, 255, 0.3)',
          filter: 'blur(60px)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Join LuxeBus</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
            Create an account to start your journey.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '16px', top: '17px', color: 'var(--color-text-muted)' }} />
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="John Doe"
                    style={{ paddingLeft: '48px' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', left: '16px', top: '17px', color: 'var(--color-text-muted)' }} />
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="+1 234 567 890"
                    style={{ paddingLeft: '48px' }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '16px', top: '17px', color: 'var(--color-text-muted)' }} />
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="name@example.com"
                  style={{ paddingLeft: '48px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '17px', color: 'var(--color-text-muted)' }} />
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="••••••••"
                  style={{ paddingLeft: '48px' }}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px', height: '52px' }}>
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '32px', color: 'var(--color-text-secondary)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
