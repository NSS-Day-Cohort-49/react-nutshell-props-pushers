import React, {useContext, useEffect} from 'react'
import { WeatherContext } from './WeatherProvider'
import "./Weather.css"

export const WeatherCard = ({w}) => {

	

	return(
		<>
		<section className="card weather">
		
		<h3>Forecast for {w.dt_txt}</h3>
		<h4>{w.weather[0].description} with a Low of {parseInt(w.main.temp_min)} and a high of {parseInt(w.main.temp_max)}</h4>
		<div>Humidity: {w.main.humidity}%</div>
		</section>
		</>
	)
}