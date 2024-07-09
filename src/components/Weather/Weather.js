import React, { useState } from "react";
import "./Weather.css"; // Importing the CSS file for styling
import WeatherInfo from "../WeatherInfo/WeatherInfo"; // Importing WeatherInfo component
import Error from "../Error"; // Importing Error component
import Navbar from "../Navbar/Navbar.js"; // Importing Navbar component

const Weather = () => {

  // State variables for weather data, error status, and city name
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");

  // API key for OpenWeatherMap
  const apiKey = "7a313cfc4abdc5aa301bfaff346aed9b"; 
  // Base URL for the weather API
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 


  // Function to fetch weather data for a given city
  const checkWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      console.log("response", response);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        console.log("data", data);
        setWeatherData(data); // Set the fetched data to weatherData state
        setError(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Function to reset the weather data and error state
  const resetWeather = () => {
    setWeatherData(null);
    setError(false);
  };

  // Function to handle search button click
  const handleSearch = () => {
    checkWeather(city);
  };

  // Function to handle reset button click
  const handleReset = () => {
    setCity("");
    resetWeather();
  };

  // Function to handle Enter key press in the input field
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      checkWeather(city);
    }
  };

  return (
    <div className="main_card">
      <div className="card">
        <h1 className="heading">Weather Forecasts</h1>
        <Navbar
          handleReset={handleReset}
          handleSearch={handleSearch}
          city={city}
          setCity={setCity}
          handleKeyPress={handleKeyPress}
        />
        {error && <Error />}
        
        {/* Conditionally render the WeatherInfo component if weather data is available */}
        {weatherData && <WeatherInfo city={city} />}
      </div>
    </div>
  );
};

export default Weather;
