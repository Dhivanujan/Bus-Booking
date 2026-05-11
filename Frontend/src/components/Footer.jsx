import {
  Bus,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Facebook,
  Instagram,
  Twitter,
  Sparkles,
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
    <footer className="relative overflow-hidden pt-[110px] pb-8 border-t border-white/10 bg-[#050B14]">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">

        {/* TOP CTA SECTION */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#08111F]/80 backdrop-blur-2xl p-8 md:p-12 mb-20">

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.10),transparent_30%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">

            {/* Left */}
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs uppercase tracking-[0.25em]">
                <Sparkles size={14} />
                Luxury Travel Platform
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
                Experience Sri Lanka
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {' '}Like Never Before
                </span>
              </h2>

              <p className="mt-5 text-[#AAB6CC] leading-[1.9] max-w-xl">
                Book premium intercity buses with futuristic comfort,
                live tracking, panoramic cabins, and AI-powered routes.
              </p>
            </div>

            {/* Right CTA */}
            <button
              onClick={() => scrollTo('search')}
              className="group relative overflow-hidden h-[64px] px-9 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-[0_15px_50px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-[1.04]"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Start Booking

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>

              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pb-16">

          {/* Brand */}
          <div>

            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="group flex items-center gap-4"
            >

              <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 flex items-center justify-center shadow-[0_10px_40px_rgba(59,130,246,0.35)]">

                <Bus size={24} className="text-white" />

                <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              <div className="flex flex-col items-start">
                <span className="text-[1.25rem] font-black tracking-[0.25em] text-white">
                  LUXEBUS
                </span>

                <span className="text-[0.65rem] uppercase tracking-[0.35em] text-cyan-300">
                  Smart Mobility
                </span>
              </div>
            </button>

            <p className="mt-6 text-[#AAB6CC] leading-[1.9] text-[0.96rem]">
              Redefining premium intercity transportation in Sri Lanka
              with futuristic comfort, intelligent booking, and
              cinematic travel experiences.
            </p>

            {/* Mini Features */}
            <div className="mt-8 flex flex-col gap-4">

              <div className="flex items-center gap-3 text-[#D7E1F0]">

                <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-cyan-300" />
                </div>

                <span className="text-sm">
                  Encrypted Secure Payments
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#D7E1F0]">

                <div className="w-10 h-10 rounded-2xl bg-fuchsia-400/10 border border-fuchsia-400/10 flex items-center justify-center">
                  <Clock3 size={18} className="text-fuchsia-300" />
                </div>

                <span className="text-sm">
                  24/7 Live Route Tracking
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[#73839B] mb-7">
              Navigation
            </h4>

            <div className="flex flex-col gap-4">

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
                  className="group flex items-center justify-between text-left text-[#C7D0E0]/75 hover:text-white transition-all duration-300"
                >

                  <span>{label}</span>

                  <ArrowUpRight
                    size={15}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[#73839B] mb-7">
              Support
            </h4>

            <div className="flex flex-col gap-4">

              {[
                'Help Center',
                'Cancellation Policy',
                'Terms & Conditions',
                'Privacy Policy',
                'Refund Policy',
              ].map((item) => (
                <button
                  key={item}
                  className="group flex items-center justify-between text-left text-[#C7D0E0]/75 hover:text-white transition-all duration-300"
                >

                  <span>{item}</span>

                  <ArrowUpRight
                    size={15}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[#73839B] mb-7">
              Contact
            </h4>

            <div className="flex flex-col gap-5">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Colombo, Sri Lanka
                  </p>

                  <p className="mt-1 text-sm text-[#8FA0B8]">
                    Luxury Transit Headquarters
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-fuchsia-400/10 border border-fuchsia-400/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-fuchsia-300" />
                </div>

                <div>
                  <p className="text-white font-medium">
                    +94 77 123 4567
                  </p>

                  <p className="mt-1 text-sm text-[#8FA0B8]">
                    24/7 Customer Support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-blue-400/10 border border-blue-400/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-blue-300" />
                </div>

                <div>
                  <p className="text-white font-medium">
                    support@luxebus.lk
                  </p>

                  <p className="mt-1 text-sm text-[#8FA0B8]">
                    Premium Assistance Team
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">

              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="group relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-[#C7D0E0] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 transition duration-300" />

                  <Icon size={18} className="relative z-10" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row gap-4 items-center justify-between">

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