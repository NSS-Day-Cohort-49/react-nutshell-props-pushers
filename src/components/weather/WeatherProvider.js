import React, { useState, createContext } from "react";
import { APIKey } from "./WeatherKey";
export const WeatherContext = createContext();



export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState({
	  list:[]
  });

  const getWeather = (zipCode) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then(setWeather).then(console.log(weather));
  };

  return (
    <WeatherContext.Provider value={{ weather, getWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
