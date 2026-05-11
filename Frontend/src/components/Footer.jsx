import {
  Bus,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Facebook,
  Instagram,
  Twitter,
  ShieldCheck,
  Clock3,
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 bg-[#050B14]">
      <div className="container">
        <div className="glass-panel p-8 md:p-10 mb-14 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">Luxury Travel Platform</span>
            <h2 className="section-title mt-4">Experience Sri Lanka like never before</h2>
            <p className="section-subtitle mt-3">
              Book premium intercity buses with live tracking, panoramic cabins, and AI-powered routes.
            </p>
          </div>
          <button onClick={() => scrollTo('search')} className="btn-primary btn-primary--lg">
            Start booking <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pb-12">
          <div>
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-3">
              <div className="icon-tile text-cyan-300 bg-white/5">
                <Bus size={18} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[1.05rem] font-semibold tracking-[0.26em] text-white">LUXEBUS</span>
                <span className="text-[0.62rem] uppercase tracking-[0.32em] text-[#8FA0B8]">Smart Mobility</span>
              </div>
            </button>
            <p className="mt-6 text-[#AAB6CC] leading-[1.8] text-[0.96rem]">
              Redefining premium intercity transportation with cinematic comfort and intelligent booking.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#D7E1F0]">
                <div className="icon-tile text-cyan-300">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-sm">Encrypted secure payments</span>
              </div>
              <div className="flex items-center gap-3 text-[#D7E1F0]">
                <div className="icon-tile text-fuchsia-300">
                  <Clock3 size={18} />
                </div>
                <span className="text-sm">24/7 live route tracking</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#73839B] mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                ['hero', 'Home'],
                ['search', 'Book Journey'],
                ['routes', 'Popular Routes'],
                ['how', 'How It Works'],
                ['reviews', 'Testimonials'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-sm text-[#C7D0E0]/75 hover:text-white transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#73839B] mb-6">Support</h4>
            <div className="flex flex-col gap-3">
              {[
                'Help Center',
                'Cancellation Policy',
                'Terms & Conditions',
                'Privacy Policy',
                'Refund Policy',
              ].map((item) => (
                <button
                  key={item}
                  className="text-left text-sm text-[#C7D0E0]/75 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#73839B] mb-6">Contact</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="icon-tile text-cyan-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Colombo, Sri Lanka</p>
                  <p className="mt-1 text-sm text-[#8FA0B8]">Luxury transit HQ</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="icon-tile text-fuchsia-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">+94 77 123 4567</p>
                  <p className="mt-1 text-sm text-[#8FA0B8]">24/7 customer support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="icon-tile text-blue-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">support@luxebus.lk</p>
                  <p className="mt-1 text-sm text-[#8FA0B8]">Premium assistance team</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="icon-tile text-[#C7D0E0] hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-[#73839B] text-center md:text-left">
            © {year} LuxeBus Sri Lanka. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#73839B]">
            <span>AI Powered</span>
            <span className="w-1 h-1 rounded-full bg-[#73839B]" />
            <span>Luxury Mobility</span>
            <span className="w-1 h-1 rounded-full bg-[#73839B]" />
            <span>Future Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;