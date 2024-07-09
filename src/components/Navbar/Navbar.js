import React from 'react';
import "../Weather/Weather.css"; // Importing the CSS file for styling

// Navbar functional component definition
const Navbar = ({handleReset, handleSearch, city, setCity, handleKeyPress}) => {

  return (
    <div className="search">
      {/* Input field for entering the city name */}
      <input
        type="text"
        placeholder="Enter city"
        spellCheck="false"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Updating city state on input change
        onKeyPress={handleKeyPress}
      />

      {/* Search button */}
      <button onClick={handleSearch}>
        <img src="search.png" alt="search" />
      </button>

      {/* Reset button */}
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Navbar;
