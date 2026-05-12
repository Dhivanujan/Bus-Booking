import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bus, SearchX, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusCard from '../components/BusCard';
import FilterSidebar from '../components/FilterSidebar';
import SkeletonLoader from '../components/SkeletonLoader';
import Footer from '../components/Footer';
import { searchBuses } from '../lib/api';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const origin = searchParams.get('from') || '';
  const destination = searchParams.get('to') || '';
  const travelDate = searchParams.get('date') || '';
  const passengers = searchParams.get('passengers') || '1';

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    busType: '',
    maxPrice: 5000,
    minRating: 0,
    sortBy: 'price_asc',
  });

  useEffect(() => {
    const fetchBuses = async () => {
      setLoading(true);
      try {
        const res = await searchBuses({ origin, destination });
        setBuses(res.data.data || []);
      } catch (err) {
        console.error('Search error:', err);
        setBuses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBuses();
  }, [origin, destination]);

  // Apply client-side filters
  const filteredBuses = buses
    .filter((bus) => {
      if (filters.busType && filters.busType !== 'All' && bus.type !== filters.busType) return false;
      if (bus.price > (filters.maxPrice || 5000)) return false;
      if (bus.ratings < (filters.minRating || 0)) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'rating': return b.ratings - a.ratings;
        case 'departure': return a.departureTime.localeCompare(b.departureTime);
        default: return 0;
      }
    });

  const handleSelectBus = (bus) => {
    navigate(`/seats/${bus._id}?date=${travelDate}&passengers=${passengers}`);
  };

  const resetFilters = () => {
    setFilters({ busType: '', maxPrice: 5000, minRating: 0, sortBy: 'price_asc' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-8 relative">
        <div className="absolute inset-0 hero-ambient opacity-50" />
        <div className="container relative z-10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-coral transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white font-display">
                {origin} <span className="text-coral">→</span> {destination}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-400">
                {travelDate && (
                  <span className="flex items-center gap-1.5">
                    📅 {new Date(travelDate).toLocaleDateString('en-LK', {
                      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
                    })}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  👥 {passengers} {parseInt(passengers) === 1 ? 'passenger' : 'passengers'}
                </span>
                {!loading && (
                  <span className="flex items-center gap-1.5">
                    <Bus size={14} className="text-aqua" />
                    {filteredBuses.length} {filteredBuses.length === 1 ? 'bus' : 'buses'} found
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container pb-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Filters */}
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
          />

          {/* Results */}
          <div>
            {loading ? (
              <SkeletonLoader count={4} />
            ) : filteredBuses.length === 0 ? (
              <div className="glass-card p-12 text-center">
                <SearchX size={48} className="mx-auto text-gray-600 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No buses found</h3>
                <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
                  We couldn't find any buses matching your search. Try adjusting your filters or searching a different route.
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="btn-primary btn-primary--sm"
                >
                  <MapPin size={16} />
                  Search Another Route
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredBuses.map((bus) => (
                  <BusCard
                    key={bus._id}
                    bus={bus}
                    travelDate={travelDate}
                    onSelect={handleSelectBus}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultsPage;
