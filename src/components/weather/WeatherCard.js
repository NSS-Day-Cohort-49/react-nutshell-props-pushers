import React, {useContext, useEffect} from 'react'
import { WeatherContext } from './WeatherProvider'
import "./Weather.css"

export const WeatherCard = ({w}) => {

	

	return(
		<>
		<section className="card weather">
		
		<h3>Forecast for {w.dt_txt}</h3>
		<h4>{w.weather[0].description} with a Low of {parseInt((w.main.temp_min - 273.15)* 1.8000+ 32.00)} and a high of {parseInt((w.main.temp_max - 273.15)* 1.8000+ 32.00)}</h4>
		<div>Humidity: {w.main.humidity}%</div>
		</section>
		</>
	)
}