import React, { useContext, useEffect } from "react";
import { WeatherCard } from "./WeatherCard";
import { WeatherContext } from "./WeatherProvider";

export const WeatherList = () => {
  const zipCode = 37215;
  const { weather, getWeather } = useContext(WeatherContext);


  useEffect(() => {
    getWeather(zipCode)
    .then(console.log("useEffect" , weather));
  }, []);

  return (
    <>

	{
		weather?.list.slice(0,40).map(w=>{
			return(
				<WeatherCard key={w.dt} w={w} />
			)
		})
	}
    </>
  );
};
