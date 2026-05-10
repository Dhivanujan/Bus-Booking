import { useState, useEffect } from 'react';
import { Bus, Menu, X } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/92 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-[72px]">
        <a href="#hero" className="flex items-center gap-[10px] text-sunset text-[1.35rem] font-extrabold tracking-[1px]" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <Bus size={28} />
          <span>LUXE<span className="text-white">BUS</span></span>
        </a>

        <ul className={`fixed md:static top-[72px] left-0 w-full md:w-auto flex flex-col md:flex-row bg-[#0B1D3A]/97 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 gap-5 md:gap-8 -translate-y-[120%] md:translate-y-0 transition-transform duration-300 border-b border-white/10 md:border-none ${menuOpen ? 'translate-y-0' : ''}`}>
          {['search', 'features', 'routes', 'how', 'reviews'].map((id) => (
            <li key={id}>
              <a 
                href={`#${id}`} 
                className="text-[1rem] md:text-[0.9rem] font-medium text-white/70 transition-colors relative hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sunset after:rounded-[1px] after:transition-all hover:after:w-full capitalize"
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {id === 'search' ? 'Book' : id === 'how' ? 'How It Works' : id}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#search" className="hidden md:inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-full font-semibold text-[0.95rem] transition-all whitespace-nowrap bg-gradient-to-br from-sunset to-sunset-light text-black shadow-[0_4px_20px_rgba(244,148,62,0.3)] hover:-translate-y-[2px] hover:shadow-[0_6px_28px_rgba(244,148,62,0.45)]" onClick={(e) => { e.preventDefault(); scrollTo('search'); }}>
            Book Now
          </a>
          <button className="block md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
