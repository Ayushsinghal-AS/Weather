import React from 'react';

// WeatherCard functional component definition
const WeatherCard = ({ weatherData }) => {
  
  // Destructuring weatherData props to extract required fields
  const { address, conditions, temp, img } = weatherData;

  return (
    <>
      <h1>{address}</h1>
      <h2>{conditions}</h2>
      <img
        src={img}
        className="weather-icon-img"
        alt="weather icon"
      />
      <h1>{Math.round(temp)}°F</h1>
    </>
  );
}

export default WeatherCard;
