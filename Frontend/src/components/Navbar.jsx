import { Link } from 'react-router-dom';
import { Bus, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-panel" style={{
      margin: '20px 24px',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '20px',
      zIndex: 100
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Bus size={32} color="var(--color-primary)" />
        <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '1px' }}>
          LUXE<span style={{ color: 'var(--color-primary)' }}>BUS</span>
        </span>
      </Link>

      <ul style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <li><Link to="/" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Home</Link></li>
        <li><Link to="/routes" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Routes</Link></li>
        <li><Link to="/about" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Experience</Link></li>
      </ul>

      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to="/login" className="btn-secondary">
          <User size={18} />
          Sign In
        </Link>
        <Link to="/register" className="btn-primary">
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
