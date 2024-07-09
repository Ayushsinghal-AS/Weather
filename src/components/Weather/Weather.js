import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Error from "../Error";
import Navbar from "../Navbar/Navbar.js";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");

  const apiKey = "7a313cfc4abdc5aa301bfaff346aed9b";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

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
        setWeatherData(data);
        setError(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetWeather = () => {
    setWeatherData(null);
    setError(false);
  };

  const handleSearch = () => {
    checkWeather(city);
  };

  const handleReset = () => {
    setCity("");
    resetWeather();
  };

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
        {weatherData && <WeatherInfo city={city} />}
      </div>
    </div>
  );
};

export default Weather;
