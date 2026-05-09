export default function HeroSection() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero-mesh" />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />
      <div className="hero-noise" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot" />
          Smart Mobility
        </div>

        <h1>Move Smarter<br />Across Every Mile</h1>

        <p>
          Experience premium real-time travel with intelligent
          booking, live tracking, and luxury comfort.
        </p>

        <div className="hero-bus-wrapper">
          <div className="bus-glow" />

          {/* Floating ticket hologram 1 */}
          <div className="floating-ticket t1">
            <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
              <rect x="1" y="1" width="54" height="34" rx="8" stroke="rgba(0,209,178,0.3)" strokeWidth="1" fill="rgba(0,209,178,0.06)" />
              <line x1="18" y1="0" x2="18" y2="36" stroke="rgba(0,209,178,0.15)" strokeDasharray="3 3" />
              <circle cx="36" cy="18" r="4" fill="rgba(182,147,255,0.3)" />
              <rect x="26" y="10" width="22" height="2" rx="1" fill="rgba(0,209,178,0.2)" />
              <rect x="26" y="16" width="16" height="2" rx="1" fill="rgba(255,179,107,0.2)" />
              <rect x="6" y="12" width="6" height="12" rx="2" fill="rgba(199,243,107,0.15)" />
            </svg>
          </div>

          {/* Floating ticket hologram 2 */}
          <div className="floating-ticket t2">
            <svg width="48" height="30" viewBox="0 0 48 30" fill="none">
              <rect x="1" y="1" width="46" height="28" rx="6" stroke="rgba(182,147,255,0.3)" strokeWidth="1" fill="rgba(182,147,255,0.05)" />
              <rect x="8" y="8" width="20" height="2" rx="1" fill="rgba(182,147,255,0.2)" />
              <rect x="8" y="14" width="14" height="2" rx="1" fill="rgba(0,209,178,0.2)" />
              <rect x="8" y="20" width="18" height="2" rx="1" fill="rgba(255,179,107,0.15)" />
              <circle cx="38" cy="15" r="5" stroke="rgba(0,209,178,0.25)" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Premium 3D Bus Illustration */}
          <div className="hero-bus">
            <svg className="bus-svg" width="320" height="160" viewBox="0 0 320 160" fill="none">
              {/* Bus body - main shape */}
              <defs>
                <linearGradient id="busBody" x1="0" y1="0" x2="320" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1A233D" />
                  <stop offset="50%" stopColor="#222d4d" />
                  <stop offset="100%" stopColor="#121A2F" />
                </linearGradient>
                <linearGradient id="busTop" x1="40" y1="30" x2="280" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00D1B2" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#B693FF" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00D1B2" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#B693FF" stopOpacity="0.2" />
                </linearGradient>
                <filter id="busGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="headlight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFB36B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFB36B" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Shadow */}
              <ellipse cx="160" cy="145" rx="120" ry="8" fill="rgba(0,209,178,0.08)" filter="url(#busGlow)" />

              {/* Bus body */}
              <rect x="40" y="40" width="240" height="80" rx="16" fill="url(#busBody)" stroke="rgba(0,209,178,0.2)" strokeWidth="1" />

              {/* Top accent */}
              <rect x="40" y="40" width="240" height="20" rx="16" fill="url(#busTop)" />

              {/* Chrome line */}
              <rect x="50" y="74" width="220" height="1.5" rx="1" fill="rgba(0,209,178,0.15)" />

              {/* Windows */}
              <rect x="60" y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />
              <rect x="94" y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />
              <rect x="128" y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />
              <rect x="162" y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />
              <rect x="196" y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />
              <rect x="230" y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />

              {/* Front windshield */}
              <path d="M268 48 Q280 48 280 58 L280 68 Q280 72 276 72 L268 72 Q264 72 264 68 L264 52 Q264 48 268 48Z"
                fill="rgba(0,209,178,0.35)" stroke="rgba(0,209,178,0.3)" strokeWidth="0.5" />

              {/* Headlights */}
              <rect x="280" y="80" width="8" height="12" rx="4" fill="#FFB36B" opacity="0.9" />
              <rect x="288" y="82" width="20" height="8" rx="4" fill="url(#headlight)" />

              {/* Tail light */}
              <rect x="40" y="82" width="6" height="10" rx="3" fill="#FF6B8A" opacity="0.7" />

              {/* Door */}
              <rect x="156" y="80" width="18" height="36" rx="4" fill="rgba(0,209,178,0.1)" stroke="rgba(0,209,178,0.15)" strokeWidth="0.5" />
              <line x1="165" y1="82" x2="165" y2="114" stroke="rgba(0,209,178,0.15)" strokeWidth="0.5" />

              {/* Wheels */}
              <circle cx="100" cy="125" r="14" fill="#0B1020" stroke="rgba(0,209,178,0.2)" strokeWidth="1.5" />
              <circle cx="100" cy="125" r="7" fill="#1A233D" stroke="rgba(0,209,178,0.15)" strokeWidth="1" />
              <circle cx="100" cy="125" r="3" fill="rgba(0,209,178,0.3)" />

              <circle cx="230" cy="125" r="14" fill="#0B1020" stroke="rgba(0,209,178,0.2)" strokeWidth="1.5" />
              <circle cx="230" cy="125" r="7" fill="#1A233D" stroke="rgba(0,209,178,0.15)" strokeWidth="1" />
              <circle cx="230" cy="125" r="3" fill="rgba(0,209,178,0.3)" />

              {/* Accent stripe */}
              <rect x="46" y="96" width="228" height="3" rx="1.5" fill="url(#busBody)" />
              <rect x="46" y="96" width="228" height="3" rx="1.5" fill="linear-gradient(90deg, #00D1B2, #B693FF)" opacity="0.3" />

              {/* Brand logo area */}
              <circle cx="160" cy="105" r="8" fill="rgba(0,209,178,0.15)" stroke="rgba(0,209,178,0.3)" strokeWidth="0.5" />
              <text x="160" y="108" textAnchor="middle" fill="rgba(0,209,178,0.6)" fontSize="7" fontWeight="700">VX</text>

              {/* Reflective light sweep */}
              <rect x="60" y="42" width="200" height="1" rx="0.5" fill="rgba(255,255,255,0.08)">
                <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
