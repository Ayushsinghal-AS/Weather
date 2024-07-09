import React from "react";
import "./App.css"; // Importing the CSS file for styling
import { Route, Routes, BrowserRouter } from "react-router-dom"; // Importing routing components from react-router-dom
import Weather from "./components/Weather/Weather"; // Importing the Weather component
import Welcome from "./components/WelcomePage/Welcome"; // Importing the Welcome component

const App = () => {

  return (
    <div className="App">
      {/* Defining the routes for the application */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default App;
