import {
  Star,
  Quote,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Verified,
} from 'lucide-react';

const reviews = [
  {
    name: 'Kasun Perera',
    route: 'Colombo → Kandy',
    text: 'The panoramic luxury seats and smooth ride completely changed how I travel across Sri Lanka.',
    rating: 5,
    accent: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-400/20',
  },
  {
    name: 'Nethmi Fernando',
    route: 'Galle → Colombo',
    text: 'Booking was seamless and the live tracking feature made the journey feel premium and stress-free.',
    rating: 5,
    accent: 'from-fuchsia-400 to-pink-500',
    glow: 'shadow-fuchsia-500/20',
    border: 'border-fuchsia-400/20',
  },
  {
    name: 'Dilan Jayasekara',
    route: 'Ella → Mirissa',
    text: 'The onboard Wi-Fi, smart climate system, and luxury interior made this feel futuristic.',
    rating: 4,
    accent: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-400/20',
  },
];

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative py-[110px] md:py-[140px] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-300 text-xs tracking-[0.25em] uppercase">
            <Sparkles size={14} />
            Passenger Experiences
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
            Trusted By
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Luxury Travelers
            </span>
          </h2>

          <p className="mt-5 text-[#AAB6CC] text-[1.02rem] leading-relaxed">
            Real experiences from passengers who explored Sri Lanka with
            futuristic comfort, smart booking, and premium luxury travel.
          </p>
        </div>

        {/* Unique Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">

          {reviews.map((r, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-[34px] border ${r.border}
                bg-[#091321]/80 backdrop-blur-2xl p-7
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_100px_rgba(0,0,0,0.45)]
                ${r.glow}
                ${i === 0 ? 'lg:col-span-6 lg:row-span-2 min-h-[420px]' : ''}
                ${i === 1 ? 'lg:col-span-6 min-h-[200px]' : ''}
                ${i === 2 ? 'lg:col-span-6 min-h-[200px]' : ''}
              `}
            >

              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${r.accent}/10`}
              />

              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl" />

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={90} className="text-white" />
              </div>

              <div className="relative z-10 h-full flex flex-col">

                {/* Top User */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div
                      className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${r.accent} flex items-center justify-center text-black font-bold text-lg shadow-[0_10px_40px_rgba(0,0,0,0.3)]`}
                    >
                      {r.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    {/* Name */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {r.name}
                        </h3>

                        <Verified
                          size={16}
                          className="text-cyan-300"
                        />
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-sm text-[#8FA0B8]">
                        <MapPin size={13} />
                        {r.route}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition duration-500 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight
                      size={20}
                      className="text-white/70"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-8 flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      fill="currentColor"
                      className="text-amber-300"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="flex-1 flex items-center">

                  <p
                    className={`
                      text-[#D4DDEC]
                      leading-[1.9]
                      mt-6
                      ${i === 0 ? 'text-[1.18rem]' : 'text-[1rem]'}
                    `}
                  >
                    “{r.text}”
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#72819A]">
                      Verified Premium Review
                    </p>

                    <p className="mt-1 text-sm text-[#91A0B8]">
                      LuxeBus Passenger
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Quote size={18} className="text-white/70" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            ['4.9★', 'Average Rating'],
            ['50K+', 'Passengers'],
            ['98%', 'Positive Reviews'],
            ['24/7', 'Support'],
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
            >
              <h4 className="text-3xl font-black text-white">
                {item[0]}
              </h4>

              <p className="mt-2 text-sm text-[#8FA0B8]">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;