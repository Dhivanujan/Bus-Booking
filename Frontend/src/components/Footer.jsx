import { Bus, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-sunset text-[1.25rem] font-extrabold tracking-[1px] mb-4">
              <Bus size={24} />
              <span>LUXE<span className="text-white">BUS</span></span>
            </div>
            <p className="text-[0.9rem] text-white/55 leading-relaxed">
              Premium intercity bus travel — comfort, safety, and punctuality on every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[['#hero', 'Home'], ['#search', 'Book a Trip'], ['#routes', 'Popular Routes'], ['#how', 'How It Works']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[0.9rem] text-white/60 hover:text-sunset transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Support</h4>
            <ul className="flex flex-col gap-3">
              {[['#faq', 'FAQs'], ['#contact', 'Contact Us'], ['#cancellation', 'Cancellation Policy'], ['#terms', 'Terms & Conditions']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[0.9rem] text-white/60 hover:text-sunset transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-[0.9rem] text-white/60"><MapPin size={14} className="mt-0.5 shrink-0 text-sunset" /> 123 Transit Ave, New York</li>
              <li className="flex items-center gap-2 text-[0.9rem] text-white/60"><Phone size={14} className="shrink-0 text-sunset" /> +1 (800) 555-0199</li>
              <li className="flex items-center gap-2 text-[0.9rem] text-white/60"><Mail size={14} className="shrink-0 text-sunset" /> support@luxebus.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-[0.85rem] text-white/30">
          <p>© {year} LuxeBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
