import {
  Star,
  Quote,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const reviews = [
  {
    name: 'Kasun Perera',
    route: 'Colombo → Kandy',
    text: 'The panoramic luxury seats and smooth ride completely transformed how I travel across Sri Lanka.',
    rating: 5,
  },
  {
    name: 'Nethmi Fernando',
    route: 'Galle → Colombo',
    text: 'Booking was seamless and the realtime tracking feature made the journey feel premium and stress-free.',
    rating: 5,
  },
  {
    name: 'Dilan Jayasekara',
    route: 'Ella → Mirissa',
    text: 'The onboard Wi-Fi, intelligent climate system, and luxury interior made the entire experience feel futuristic.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#040B16]" />

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Trusted by
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
              {' '}
              Premium Travelers
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-400">
            Real stories from passengers who experienced seamless booking,
            refined comfort, and intelligent intercity travel.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/[0.05]
                backdrop-blur-xl p-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl border border-white/10
                    bg-white/5 backdrop-blur-md
                  "
                >
                  <Quote className="text-cyan-300" size={24} />
                </div>

                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/5 text-slate-400
                    transition-all duration-300
                    group-hover:text-white
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Review Text */}
              <div className="relative mt-7">
                <p className="text-[15px] leading-8 text-slate-300">
                  “{review.text}”
                </p>
              </div>

              {/* Rating */}
              <div className="relative mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={17}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                    className={
                      i < review.rating
                        ? 'text-amber-300'
                        : 'text-slate-600'
                    }
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="relative mt-7 pt-5 border-t border-white/10 flex items-center gap-4">
                
                {/* Avatar */}
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br from-cyan-400 to-fuchsia-500
                    text-sm font-bold text-white
                    shadow-lg shadow-cyan-500/20
                  "
                >
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-white">
                    {review.name}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {review.route}
                  </p>
                </div>

                {/* Badge */}
                <div className="hidden sm:flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Verified
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute bottom-5 right-5 text-6xl font-black text-white/[0.03]">
                0{index + 1}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;