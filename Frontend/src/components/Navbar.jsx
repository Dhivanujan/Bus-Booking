import { useState, useEffect } from 'react';
import { Bus, Menu, X, Home, Search, MapPin, Star } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass shadow-[0_12px_40px_rgba(0,0,0,0.35)]' : 'bg-transparent'}`}>
        <div className="container flex items-center justify-between h-[76px]">
          <a href="#hero" className="flex items-center gap-[10px] text-[1.25rem] font-extrabold tracking-[3px]" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <Bus size={26} className="text-teal" />
            <span className="bg-gradient-to-r from-sunset via-pink to-teal bg-clip-text text-transparent">LUXEBUS</span>
          </a>

          <ul className={`fixed md:static top-[76px] left-0 w-full md:w-auto flex flex-col md:flex-row bg-navy/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 gap-5 md:gap-8 -translate-y-[120%] md:translate-y-0 transition-transform duration-300 border-b border-white/10 md:border-none ${menuOpen ? 'translate-y-0' : ''}`}>
            {['search', 'features', 'routes', 'how', 'reviews'].map((id) => (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  className="text-[0.95rem] font-medium text-[#C7D0E0]/70 transition-colors relative hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-sunset after:to-teal after:rounded-[1px] after:transition-all hover:after:w-full capitalize"
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                >
                  {id === 'search' ? 'Book' : id === 'how' ? 'How It Works' : id}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="#search" className="hidden md:inline-flex glow-button" onClick={(e) => { e.preventDefault(); scrollTo('search'); }}>
              Book Now
            </a>
            <button className="block md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="md:hidden mobile-dock">
        <button className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]" onClick={() => scrollTo('hero')}>
          <Home size={18} className="text-teal" />
          Home
        </button>
        <button className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]" onClick={() => scrollTo('search')}>
          <Search size={18} className="text-sunset" />
          Book
        </button>
        <button className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]" onClick={() => scrollTo('routes')}>
          <MapPin size={18} className="text-pink" />
          Routes
        </button>
        <button className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]" onClick={() => scrollTo('reviews')}>
          <Star size={18} className="text-teal" />
          Reviews
        </button>
      </div>
    </>
  );
};

export default Navbar;
