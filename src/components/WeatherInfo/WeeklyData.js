import React from "react";

const WeeklyData = ({weekData, index , img}) => {
    return (
       <>
            <div key={index} className="day-box">
            <h4>
              {new Date(weekData.datetime).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </h4>
            <img
              src={img}
              className="weather-icon-small"
              alt="weather icon"
            />
            <p>
              {Math.round(weekData.tempmax)}°C / {Math.round(weekData.tempmin)}°F
            </p>
          </div>
       </>
    );
};

export default WeeklyData;