export default function OfferBanner() {
  return (
    <section className="offer-section section" id="offer-banner">
      <div className="offer-card">
        <span className="offer-sparkle s1">✨</span>
        <span className="offer-sparkle s2">💎</span>
        <span className="offer-sparkle s3">🎫</span>

        <div className="offer-content">
          <div className="offer-tag">Limited Time</div>
          <h3>
            Unlock <em>30% Off</em> Your<br />
            First Premium Ride
          </h3>
          <button className="offer-cta" id="claim-offer-btn">
            Claim Offer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
