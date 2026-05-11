import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchWidget from './components/SearchWidget';
import Features from './components/Features';
import PopularRoutes from './components/PopularRoutes';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AppCTA from './components/AppCTA';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <div className="highway-flow"></div>
        <div className="particle-field"></div>
        <div className="app-content pb-28 md:pb-0">
          <Navbar />
          <Hero />
          <SearchWidget />
          <Features />
          <PopularRoutes />
          <HowItWorks />
          <Testimonials />
          <AppCTA />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
