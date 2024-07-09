import React, { useState } from "react";
import "./Welcome.css";

const Welcome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select user type");

  const handleWeather = () => {
    if(selectedItem === 'Select user type'){
      alert("Please select user type");
      return 
    }
    window.location.href = "/weather";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
    console.log(item);
  };

  return (
    <div className="welcome">
      <div className="welcome-left">
        <img src="weather.png" alt="Umbrella" className="umbrella-image" />
      </div>
      <div className="welcome-right">
        <img src="weather.png" alt="Umbrella" className="umbrella-image-small" />
        <h1>Breeze</h1>
        <p>Current weather and forecasts</p>
       
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            {selectedItem}
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSelect("Farmers")}>Farmers</li>
              <li onClick={() => handleSelect("Event Planners")}>Event Planners</li>
              <li onClick={() => handleSelect("Travelers")}>Travelers</li>
            </ul>
          )}
        </div>
        <br />
        <br />  
        <button className="get-started-button" onClick={handleWeather}>Get started</button>
      </div>
    </div>
  );
};

export default Welcome;
