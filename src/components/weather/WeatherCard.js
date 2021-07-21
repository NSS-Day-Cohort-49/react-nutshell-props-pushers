import React, {useContext, useEffect} from 'react'
import { WeatherContext } from './WeatherProvider'

export const WeatherCard = ({w}) => {

	const date = Date(w.dt)

	return(
		<>
		<section className="weather">
		<h3>Current Weather</h3>
		{console.log(w)}
		<div>This is the forecast for this date {date.toString()}</div>
		</section>
		</>
	)
}