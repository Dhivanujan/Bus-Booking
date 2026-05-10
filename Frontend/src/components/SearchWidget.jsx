import { MapPin, Calendar, Users, Search } from 'lucide-react';
import './SearchWidget.css';

const SearchWidget = () => {
  return (
    <section id="search" className="search-section">
      <div className="container">
        <div className="search-widget glass">
          <div className="search-widget__fields">
            <div className="form-group">
              <label className="form-label"><MapPin size={14} /> From</label>
              <input type="text" className="form-control" placeholder="Departure city" />
            </div>

            <div className="form-group">
              <label className="form-label"><MapPin size={14} /> To</label>
              <input type="text" className="form-control" placeholder="Destination city" />
            </div>

            <div className="form-group">
              <label className="form-label"><Calendar size={14} /> Date</label>
              <input type="date" className="form-control" />
            </div>

            <div className="form-group">
              <label className="form-label"><Users size={14} /> Passengers</label>
              <select className="form-control">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary search-widget__btn">
            <Search size={18} /> Search Buses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
