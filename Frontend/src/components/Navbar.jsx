import { useState, useEffect } from "react";
import {
  Bus,
  Menu,
  X,
  Compass,
  Ticket,
  Route,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "search", label: "Book" },
  { id: "routes", label: "Routes" },
  { id: "how", label: "Experience" },
  { id: "reviews", label: "Reviews" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.getElementById(item.id));

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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "nav-glass shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px]">
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-3"
            >
              <div className="icon-tile text-cyan-300 bg-white/5">
                <Bus size={18} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[1.05rem] font-semibold tracking-[0.26em] text-white">
                  LUXEBUS
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.32em] text-[#8FA0B8]">
                  Smart Mobility
                </span>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative text-[0.85rem] uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[#8FA0B8] hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-gradient-to-r from-sunset to-teal transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo("search")}
                className="btn-primary btn-primary--sm hidden md:inline-flex"
              >
                Book now <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute left-4 right-4 top-20 glass-panel p-6 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">
                Navigation
              </p>
              <h2 className="mt-1 text-xl font-semibold text-white">
                Explore LuxeBus
              </h2>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-5 py-4 text-left text-sm uppercase tracking-[0.2em] transition-colors ${
                  active === item.id
                    ? "text-white"
                    : "text-[#8FA0B8] hover:text-white"
                }`}
              >
                {item.label}
                <ArrowRight size={16} />
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("search")}
            className="btn-primary btn-primary--sm w-full mt-6"
          >
            Book now <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="md:hidden mobile-dock">
        <button
          className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]"
          onClick={() => scrollTo("hero")}
        >
          <Compass size={18} className="text-teal" />
          Home
        </button>
        <button
          className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]"
          onClick={() => scrollTo("search")}
        >
          <Ticket size={18} className="text-sunset" />
          Book
        </button>
        <button
          className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]"
          onClick={() => scrollTo("routes")}
        >
          <Route size={18} className="text-pink" />
          Routes
        </button>
        <button
          className="flex flex-col items-center text-[0.7rem] text-[#C7D0E0]"
          onClick={() => scrollTo("reviews")}
        >
          <Sparkles size={18} className="text-teal" />
          Reviews
        </button>
      </div>
    </>
  );
};

export default Navbar;
