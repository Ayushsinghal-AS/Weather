import React from 'react';
import "../Weather/Weather.css";

const Navbar = ({handleReset, handleSearch, city, setCity, handleKeyPress}) => {
  return (
    <div className="search">
          <input
            type="text"
            placeholder="Enter city"
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>
            <img src="search.png" alt="search" />
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
  )
}

export default Navbar
