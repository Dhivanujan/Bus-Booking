import { useMemo, useState } from 'react';
import {
  SlidersHorizontal,
  Star,
  X,
  Sparkles,
  ArrowUpDown,
} from 'lucide-react';

const BUS_TYPES = [
  { label: 'All', value: '' },
  { label: 'Luxury AC', value: 'Luxury AC' },
  { label: 'Semi Luxury', value: 'Semi Luxury' },
];

const SORT_OPTIONS = [
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'departure', label: 'Earliest Departure' },
];

const RATINGS = [0, 3, 3.5, 4, 4.5];

const FilterSidebar = ({ filters, onChange, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeFilters = useMemo(() => {
    let count = 0;

    if (filters.busType) count++;
    if (filters.maxPrice && filters.maxPrice < 5000) count++;
    if (filters.minRating && filters.minRating > 0) count++;
    if (filters.sortBy) count++;

    return count;
  }, [filters]);

  const updateFilter = (key, value) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const SidebarContent = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-coral to-orange-400 flex items-center justify-center shadow-lg shadow-coral/30">
              <SlidersHorizontal size={16} className="text-navy" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                Smart Filters
              </h2>
              <p className="text-xs text-gray-400">
                Find your perfect journey
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onReset}
          className="text-xs font-medium text-coral hover:text-white transition-all duration-300 hover:bg-coral/10 px-3 py-1.5 rounded-lg border border-coral/20"
        >
          Reset
        </button>
      </div>
      
      {/* Bus Type */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
            Bus Type
          </p>

          <span className="text-[10px] text-gray-600">
            Choose category
          </span>
        </div>

        <div className="grid gap-3">
          {BUS_TYPES.map((type) => {
            const active =
              filters.busType === type.value ||
              (!filters.busType && type.value === '');

            return (
              <button
                key={type.label}
                onClick={() => updateFilter('busType', type.value)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 p-4 text-left ${
                  active
                    ? 'border-coral bg-gradient-to-br from-coral/20 to-orange-500/10 shadow-lg shadow-coral/10'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      active
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {type.label}
                  </span>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      active
                        ? 'border-coral bg-coral'
                        : 'border-white/20'
                    }`}
                  >
                    {active && (
                      <div className="w-2 h-2 rounded-full bg-navy" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
            Maximum Price
          </p>

          <span className="text-sm font-bold text-coral">
            Rs. {(filters.maxPrice || 5000).toLocaleString()}
          </span>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={filters.maxPrice || 5000}
            onChange={(e) =>
              updateFilter('maxPrice', parseInt(e.target.value))
            }
            className="w-full accent-coral cursor-pointer"
          />

          <div className="flex justify-between mt-3 text-xs">
            <span className="text-gray-500">Rs. 500</span>
            <span className="text-gray-500">Rs. 5,000</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
          Minimum Rating
        </p>

        <div className="grid grid-cols-2 gap-3">
          {RATINGS.map((rating) => {
            const active = (filters.minRating || 0) === rating;

            return (
              <button
                key={rating}
                onClick={() => updateFilter('minRating', rating)}
                className={`group rounded-2xl border p-3 transition-all duration-300 ${
                  active
                    ? 'border-amber-400/40 bg-amber-400/10 shadow-lg shadow-amber-400/10'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <Star
                    size={14}
                    className={`transition-all ${
                      active
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-500 group-hover:text-amber-300'
                    }`}
                  />

                  <span
                    className={`text-sm font-medium ${
                      active
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {rating === 0 ? 'All' : `${rating}+`}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ArrowUpDown size={14} className="text-coral" />

          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
            Sort Results
          </p>
        </div>

        <div className="space-y-3">
          {SORT_OPTIONS.map((option) => {
            const active = filters.sortBy === option.value;

            return (
              <button
                key={option.value}
                onClick={() => updateFilter('sortBy', option.value)}
                className={`w-full rounded-2xl border p-4 transition-all duration-300 text-left group ${
                  active
                    ? 'border-coral bg-gradient-to-r from-coral/15 to-orange-500/10'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      active
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {option.label}
                  </span>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      active
                        ? 'border-coral bg-coral'
                        : 'border-white/20'
                    }`}
                  >
                    {active && (
                      <div className="w-2 h-2 rounded-full bg-navy" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-24 right-5 z-40 w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-orange-400 text-navy flex items-center justify-center shadow-2xl shadow-coral/30 active:scale-95 transition-all duration-300"
      >
        <div className="relative">
          <SlidersHorizontal size={22} />

          {activeFilters > 0 && (
            <div className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-white text-navy text-[10px] font-bold flex items-center justify-center">
              {activeFilters}
            </div>
          )}
        </div>
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0B1120] border-l border-white/10 overflow-hidden animate-slide-in">
            {/* Top */}
            <div className="sticky top-0 z-10 backdrop-blur-xl bg-[#0B1120]/90 border-b border-white/10 px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Filters
                </h2>
                <p className="text-xs text-gray-400">
                  Customize your search
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto h-[calc(100%-88px)]">
              <SidebarContent />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-2xl p-6 shadow-2xl">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-orange-400/5 pointer-events-none" />

          <div className="relative z-10">
            <SidebarContent />
          </div>
        </div>
      </aside>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FilterSidebar;