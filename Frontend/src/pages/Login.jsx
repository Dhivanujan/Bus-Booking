import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
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
        maxWidth: '480px',
        padding: '48px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'var(--color-primary-glow)',
          filter: 'blur(60px)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Welcome Back</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
            Sign in to manage your luxury travels.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
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
              <div style={{ textAlign: 'right', marginTop: '8px' }}>
                <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px', height: '52px' }}>
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '32px', color: 'var(--color-text-secondary)' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Create one</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
