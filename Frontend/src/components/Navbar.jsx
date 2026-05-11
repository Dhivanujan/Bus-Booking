import { useState, useEffect } from 'react';
import {
  Bus,
  Menu,
  X,
  Home,
  Search,
  MapPinned,
  Star,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'search', label: 'Book' },
  { id: 'routes', label: 'Routes' },
  { id: 'how', label: 'Experience' },
  { id: 'reviews', label: 'Reviews' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container">

          {/* Glass Container */}
          <div
            className={`
              relative overflow-hidden
              rounded-[26px]
              border border-white/10
              transition-all duration-500
              ${
                scrolled
                  ? 'bg-[#07111F]/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]'
                  : 'bg-transparent'
              }
            `}
          >

            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_25%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.08),transparent_25%)]" />

            <div className="relative z-10 h-[78px] px-6 lg:px-8 flex items-center justify-between">

              {/* Logo */}
              <button
                onClick={() => scrollTo('hero')}
                className="group flex items-center gap-4"
              >

                {/* Logo Icon */}
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 flex items-center justify-center shadow-[0_10px_40px_rgba(59,130,246,0.35)]">

                  <Bus size={22} className="text-white" />

                  <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Text */}
                <div className="flex flex-col items-start">

                  <span className="text-[1.1rem] font-black tracking-[0.25em] text-white">
                    LUXEBUS
                  </span>

                  <span className="text-[0.6rem] uppercase tracking-[0.35em] text-cyan-300">
                    Smart Mobility
                  </span>
                </div>
              </button>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-2">

                {navItems.map((item) => {
                  const isActive = active === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`
                        relative px-5 py-3 rounded-2xl
                        text-[0.92rem] font-medium
                        transition-all duration-300
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-[#AAB6CC] hover:text-white'
                        }
                      `}
                    >

                      {/* Active Background */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl" />
                      )}

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 transition duration-300" />

                      <span className="relative z-10">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">

                {/* Premium Badge */}
                <div className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-xs uppercase tracking-[0.2em]">
                  <Sparkles size={14} />
                  Premium Travel
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo('search')}
                  className="hidden md:flex group relative overflow-hidden h-[52px] px-7 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-[1.03]"
                >

                  <span className="relative z-10 flex items-center gap-3">
                    Book Journey

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
                </button>

                {/* Mobile Menu */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white"
                >
                  {menuOpen ? (
                    <X size={22} />
                  ) : (
                    <Menu size={22} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-500
          ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      >

        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[85%] max-w-[380px]
            bg-[#07111F]/95 backdrop-blur-2xl
            border-l border-white/10
            transition-transform duration-500
            ${
              menuOpen
                ? 'translate-x-0'
                : 'translate-x-full'
            }
          `}
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%)]" />

          <div className="relative z-10 p-7 flex flex-col h-full">

            {/* Top */}
            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Navigation
                </h2>

                <p className="mt-1 text-sm text-[#8FA0B8]">
                  Explore LuxeBus
                </p>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="mt-12 flex flex-col gap-4">

              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      flex items-center justify-between
                      px-5 py-5 rounded-3xl
                      border transition-all duration-300
                      ${
                        isActive
                          ? 'border-cyan-400/20 bg-cyan-400/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }
                    `}
                  >

                    <span className="text-white text-lg font-medium">
                      {item.label}
                    </span>

                    <ArrowRight
                      size={18}
                      className={`${
                        isActive
                          ? 'text-cyan-300'
                          : 'text-white/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Mobile Dock */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">

        <div className="flex items-center gap-2 rounded-[28px] border border-white/10 bg-[#07111F]/80 backdrop-blur-2xl px-4 py-3 shadow-[0_15px_60px_rgba(0,0,0,0.45)]">

          {[
            {
              icon: <Home size={18} />,
              id: 'hero',
            },
            {
              icon: <Search size={18} />,
              id: 'search',
            },
            {
              icon: <MapPinned size={18} />,
              id: 'routes',
            },
            {
              icon: <Star size={18} />,
              id: 'reviews',
            },
          ].map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  relative w-14 h-14 rounded-2xl
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isActive
                      ? 'text-white'
                      : 'text-[#8FA0B8]'
                  }
                `}
              >

                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-[0_10px_30px_rgba(59,130,246,0.35)]" />
                )}

                <span className="relative z-10">
                  {item.icon}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;