import React, { useContext, useEffect } from "react";
import { WeatherCard } from "./WeatherCard";
import { WeatherContext } from "./WeatherProvider";

export const WeatherList = () => {
  const zipCode = 37215;
  const { weather, getWeather } = useContext(WeatherContext);

//   const list = weather.filter(list)
// console.log(list)
  useEffect(() => {
    getWeather(zipCode)
    .then(console.log(weather));
  }, []);

  return (
    <>
    <h3>Im here</h3>
      {weather.list.map((w) => {
        return <WeatherCard  weather={w} />;
      })}
    </>
  );
};
