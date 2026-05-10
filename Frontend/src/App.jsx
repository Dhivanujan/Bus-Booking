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
      <Navbar />
      <Hero />
      <SearchWidget />
      <Features />
      <PopularRoutes />
      <HowItWorks />
      <Testimonials />
      <AppCTA />
      <Footer />
    </Router>
  );
}

export default App;
