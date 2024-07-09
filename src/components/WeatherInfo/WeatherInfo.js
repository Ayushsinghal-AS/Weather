import React, { useEffect, useState } from "react";
import "./WeatherInfo.css";
import WeatherCard from "./WeatherCard";
import WeeklyData from "./WeeklyData";

const WeatherInfo = ({ city }) => {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=PTHN64WQP9RRD39VYLXVWBBSZ&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) =>
        console.error("Error fetching the weather data:", error)
      );
  }, [city]);

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds":
        return "clouds.png";
      case "Clear":
        return "clear.png";
      case "Rain, Partially cloudy":
        return "rain.png";
      case "Partially cloudy":
        return "drizzle.png";
      case "Overcast":
        return "mist.png";
      case "humidity":
        return "humidity.png";
        case "wind":
        return "wind.png";
      default:
        return "clear.png";
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const cityDetails = {
    address: weatherData.address,
    currentConditions: weatherData.days[0].conditions,
    img: getWeatherIcon(weatherData.currentConditions.conditions),
    temp: weatherData.currentConditions.temp
  };

  const weatherCondition = {
    address: "Condition -"+ weatherData.days[0].conditions,
    currentConditions: '',
    img:getWeatherIcon( weatherData.days[0].conditions),
    temp: weatherData.days[0].temp
  }
  
  const humidityInfo = {
    address: "Humidity",
    currentConditions: '',
    img:getWeatherIcon("humidity"),
    temp: weatherData.days[0].humidity
  }

  const windyInfo = {
    address: "Wind Speed",
    currentConditions: '',
    img:getWeatherIcon("wind"),
    temp: weatherData.days[0].windspeed
  }

  return (
    <div className="weather-info">
      <div
        style={{
          display: "flex",
          height: "40vh",
          gap: "50px",
          marginTop: "20px",
        }}
      >
        <div className="hour-box">
          <WeatherCard weatherData={cityDetails} />
         
        </div>

        <div className="hour-box">
         <WeatherCard weatherData={weatherCondition} />
        </div>

        <div className="hour-box">
         <WeatherCard weatherData={humidityInfo} />
        </div>

        <div className="hour-box">
         <WeatherCard weatherData={windyInfo} />
        </div>
      </div>

      <div className="daily-forecast">
        {weatherData.days.slice(0, 7).map((day, index) => (
          <WeeklyData weekData = {day} index = {index} img ={getWeatherIcon(day.conditions)} />  
        ))}
      </div>

    </div>
  );
};

export default WeatherInfo;
