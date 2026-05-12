import { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { SRI_LANKAN_CITIES } from '../lib/constants';

const CityAutocomplete = ({ value, onChange, placeholder, icon: Icon = MapPin, iconColor = 'text-cyan-300', label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    onChange(val);
    if (val.trim().length > 0) {
      const matches = SRI_LANKAN_CITIES.filter((city) =>
        city.toLowerCase().includes(val.toLowerCase())
      );
      setFiltered(matches);
      setIsOpen(matches.length > 0);
    } else {
      setFiltered(SRI_LANKAN_CITIES);
      setIsOpen(true);
    }
  };

  const handleFocus = () => {
    const matches = value.trim().length > 0
      ? SRI_LANKAN_CITIES.filter((c) => c.toLowerCase().includes(value.toLowerCase()))
      : SRI_LANKAN_CITIES;
    setFiltered(matches);
    setIsOpen(true);
  };

  const selectCity = (city) => {
    onChange(city);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex flex-col gap-2">
      {label && (
        <span className="ui-label">
          <Icon size={14} className={iconColor} />
          {label}
        </span>
      )}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className="ui-input"
        autoComplete="off"
      />
      {isOpen && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 rounded-xl overflow-hidden border border-white/10 bg-[#0d1425]/95 backdrop-blur-xl shadow-2xl max-h-56 overflow-y-auto city-dropdown">
          {filtered.map((city) => (
            <button
              key={city}
              onClick={() => selectCity(city)}
              className="w-full text-left px-4 py-3 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/8 hover:text-white transition-colors"
            >
              <MapPin size={14} className="text-coral/70 shrink-0" />
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityAutocomplete;
