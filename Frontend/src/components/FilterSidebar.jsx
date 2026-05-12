import { useState } from 'react';
import { SlidersHorizontal, Star, X } from 'lucide-react';

const FilterSidebar = ({ filters, onChange, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-coral" />
          Filters
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-gray-400 hover:text-coral transition-colors"
        >
          Reset all
        </button>
      </div>

      {/* Bus Type */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Bus Type</p>
        <div className="space-y-2">
          {['All', 'Luxury AC', 'Semi Luxury'].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                filters.busType === type || (type === 'All' && !filters.busType)
                  ? 'bg-coral border-coral'
                  : 'border-white/20 group-hover:border-white/40'
              }`}>
                {(filters.busType === type || (type === 'All' && !filters.busType)) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0B0F1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Price Range</p>
        <div className="space-y-3">
          <div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.maxPrice || 5000}
              onChange={(e) => onChange({ ...filters, maxPrice: parseInt(e.target.value) })}
              className="w-full accent-coral"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Rs. 0</span>
              <span className="text-coral font-semibold">Rs. {(filters.maxPrice || 5000).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Minimum Rating</p>
        <div className="flex gap-2">
          {[0, 3, 3.5, 4, 4.5].map((rating) => (
            <button
              key={rating}
              onClick={() => onChange({ ...filters, minRating: rating })}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                (filters.minRating || 0) === rating
                  ? 'bg-amber-400/15 border-amber-400/40 text-amber-300'
                  : 'border-white/8 text-gray-500 hover:border-white/20'
              }`}
            >
              <Star size={11} className={`${(filters.minRating || 0) === rating ? 'fill-amber-400 text-amber-400' : ''}`} />
              {rating === 0 ? 'All' : `${rating}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Sort By</p>
        <div className="space-y-2">
          {[
            { value: 'price_asc', label: 'Price: Low to High' },
            { value: 'price_desc', label: 'Price: High to Low' },
            { value: 'rating', label: 'Highest Rated' },
            { value: 'departure', label: 'Earliest Departure' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded-full border transition-all flex items-center justify-center ${
                filters.sortBy === opt.value
                  ? 'bg-coral border-coral'
                  : 'border-white/20 group-hover:border-white/40'
              }`}>
                {filters.sortBy === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-navy" />}
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-24 right-4 z-40 w-12 h-12 rounded-full bg-coral text-navy flex items-center justify-center shadow-lg"
      >
        <SlidersHorizontal size={20} />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-navy-light border-l border-white/8 p-6 overflow-y-auto">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={20} />
            </button>
            {content}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block glass-card p-5">
        {content}
      </div>
    </>
  );
};

export default FilterSidebar;
