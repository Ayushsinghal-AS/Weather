import React, { useState } from "react";
import "./Welcome.css"; // Importing the CSS file for styling

const Welcome = () => {
  
  // State variables for dropdown menu and selected item
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select user type");

  // Function to handle "Get started" button click
  const handleWeather = () => {
    if (selectedItem === 'Select user type') {
      alert("Please select user type"); // Alert if no user type is selected
      return;
    }
    window.location.href = "/weather"; // Navigate to the weather page
  };

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle selecting an item from the dropdown
  const handleSelect = (item) => {
    setSelectedItem(item); // Set the selected item
    setDropdownOpen(false); // Close the dropdown menu
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
        
        {/* Dropdown menu for selecting user type */}
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

        <button className="get-started-button" onClick={handleWeather}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default Welcome;