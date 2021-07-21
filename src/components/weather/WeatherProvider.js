import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

const API = "0fa94eead86730921e2ff820f8be6cb0";

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState([]);

  const getWeather = (zipCode) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${API}`
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
