# Weather Dashboard Application

## Overview

This web application offers specialized services in three primary categories: Farmers, Travelers, and Event Planning. Each category delivers targeted functionalities and information to meet the specific needs of the users.


## Application Design
![alt text](https://res.cloudinary.com/dltsmhfit/image/upload/v1720507763/weather_sketch_mgkmbz.jpg)

## Features

1. *Dropdown Menu on Welcome Page and Get started button*
   - A dropdown menu is available on the Welcome page with the following options:
     - Farmers
     - Travelers
     - Event Planning   
   - Get started button on Welcome Page to proceed on the next page
     
2. *Location/City Search in Search Bar on Weather Page*
   - Users can search for specific locations.
   - Search button for location search.
   - Reset button for all data reset.

3. *Weather Card Commponents Display*
   - For all categories, a weather card is displayed with weather relative images after a location search.
   - The weather card includes:
     - City Name
     - Temperature
     - Wind
     - Humidity Levels
     - Conditions Information
   - Weather data is provided for multiple time slots.

4. *Weekly Data Card Components Display*
   - Weekly data card is diplayed with weather relative images.
     - Temparature
     - Day (Weekly Days)
     - Weather Relative Images
    
## WeatherInfo Component
*Purpose:* Fetches weather data from an API based on the specified city and displays the current weather conditions and weekly forecast.
*Usage:* Renders multiple instances of the WeatherCard and WeeklyData components to display detailed weather information.

## WeatherCard Component
*Purpose:* Displays current weather information for a specific aspect (like current conditions, humidity, wind speed) in a card format.
*Usage:* Used by the WeatherInfo component to render different aspects of the current weather conditions.

## WeeklyData Component
*Purpose:* Displays weather forecast for each day of the week in a concise format.
*Usage:* Rendered by the WeatherInfo component to display the weekly weather forecast using data fetched from the API.

## Description of Props Used:

Props Passed to WeatherCard:
*weatherData:* An object containing address, conditions, temp, and img props to display specific weather information.
Props Passed to WeeklyData:
*weekData:* Contains daily weather data for a specific day, including datetime, tempmax, and tempmin.
*index:* Unique key for each day's forecast.
*img:* Weather icon corresponding to the conditions for that day.

These components collectively create a responsive and informative weather application interface, leveraging React's state management and reusable component architecture.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Ayushsinghal-AS/Weather.git
   ```
   
2. How to start:
   ```sh
   npm install
   ```
   
3. Clone the repository:
   ```sh
   npm start
   ```

## Technology
   - ReactJS
   - JavaScript
   - HTML5
   - CSS3

## Weather Sketch File 
   ```sh
   https://github.com/Ayushsinghal-AS/Weather/blob/main/weather_sketch.jpg
   ```
