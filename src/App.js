import React, { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import Welcome from "./components/WelcomePage/Welcome";
import WeatherMap from "./components/WeatherMap/WeatherMap.js";

const App = () => {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/weather" element={<Weather />} />
            {/* <Route path="/weathermap" element={<WeatherMap />} /> */}
          </Routes>
    </div>
  );
};

export default App;
