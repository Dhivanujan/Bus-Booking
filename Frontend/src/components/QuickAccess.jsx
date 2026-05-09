const features = [
  {
    name: 'Live Tracking',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    bg: 'rgba(0,209,178,0.12)',
    glow: 'rgba(0,209,178,0.3)',
  },
  {
    name: 'Luxury Coaches',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B693FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
    bg: 'rgba(182,147,255,0.12)',
    glow: 'rgba(182,147,255,0.3)',
  },
  {
    name: 'Smart Payments',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB36B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ),
    bg: 'rgba(255,179,107,0.12)',
    glow: 'rgba(255,179,107,0.3)',
  },
  {
    name: 'Seat Selection',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C7F36B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/><path d="M18 14H6"/><path d="M4 18h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z"/></svg>
    ),
    bg: 'rgba(199,243,107,0.12)',
    glow: 'rgba(199,243,107,0.3)',
  },
  {
    name: '24/7 Support',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    bg: 'rgba(255,107,138,0.12)',
    glow: 'rgba(255,107,138,0.3)',
  },
]

export default function QuickAccess() {
  return (
    <section className="quick-access section" id="quick-access">
      <div className="section-title">
        <span className="dot" />
        Quick Access
      </div>
      <div className="quick-grid">
        {features.map((f, i) => (
          <div
            className="quick-card"
            key={i}
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div
              className="quick-icon"
              style={{ background: f.bg }}
            >
              {f.icon}
            </div>
            <span>{f.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
