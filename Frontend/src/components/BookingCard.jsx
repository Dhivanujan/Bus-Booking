import { useState } from 'react'

export default function BookingCard() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [passengers, setPassengers] = useState('1')

  const handleSwap = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <section className="booking-section" id="booking-card">
      <div className="booking-card">
        <div className="booking-fields">
          <div className="field-group">
            <span className="label">From</span>
            <span className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
            </span>
            <input
              type="text"
              placeholder="Enter departure city"
              value={from}
              onChange={e => setFrom(e.target.value)}
            />
          </div>

          <div className="swap-btn-wrapper">
            <button className="swap-btn" onClick={handleSwap} aria-label="Swap locations">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
            </button>
          </div>

          <div className="field-group">
            <span className="label">To</span>
            <span className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B693FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
            </span>
            <input
              type="text"
              placeholder="Enter destination city"
              value={to}
              onChange={e => setTo(e.target.value)}
            />
          </div>

          <div className="booking-row">
            <div className="field-group">
              <span className="label">Date</span>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>

            <div className="field-group">
              <span className="label">Passengers</span>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <select value={passengers} onChange={e => setPassengers(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
        </div>

        <button className="cta-btn" id="find-bus-btn">
          <span className="sweep-line" />
          Find My Bus
        </button>
      </div>
    </section>
  )
}
