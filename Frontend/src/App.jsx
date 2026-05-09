import { useState, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import BookingCard from './components/BookingCard'
import QuickAccess from './components/QuickAccess'
import PopularRoutes from './components/PopularRoutes'
import LiveTracking from './components/LiveTracking'
import OfferBanner from './components/OfferBanner'
import BoardingPoints from './components/BoardingPoints'
import Testimonials from './components/Testimonials'
import BottomNav from './components/BottomNav'
import ParticleField from './components/ParticleField'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <div className={`app-container ${loaded ? 'loaded' : ''}`}>
      <ParticleField />
      <HeroSection />
      <BookingCard />
      <QuickAccess />
      <PopularRoutes />
      <LiveTracking />
      <OfferBanner />
      <BoardingPoints />
      <Testimonials />
      <div style={{ height: 100 }} />
      <BottomNav />
    </div>
  )
}

export default App
