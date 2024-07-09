import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './WeatherMap.css'; 

const cities = [
  { name: 'Bilbao', temperature: 27, weather: 'rainy', time: '10:23', coords: { top: '20%', left: '40%' } },
  { name: 'Barcelona', temperature: 29, weather: 'sunny', time: '10:23', coords: { top: '30%', left: '60%' } },
  { name: 'Madrid', temperature: 31, weather: 'sunny', time: '10:23', coords: { top: '50%', left: '50%' } },
  { name: 'Malaga', temperature: 33, weather: 'partly cloudy', time: '10:23', coords: { top: '70%', left: '60%' } },
];

const WeatherMap = () => {
  return (
      <div className="weather-map-container">
        <div className="sidebar">
          <nav>
            <ul>
              <li><Link to="/weather">Weather</Link></li>
              <li><Link to="/cities">Cities</Link></li>
              <li><Link to="/map">Map</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default WeatherMap;
