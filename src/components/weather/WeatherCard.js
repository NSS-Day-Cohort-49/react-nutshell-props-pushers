import React, {useContext, useEffect} from 'react'
import { WeatherContext } from './WeatherProvider'

export const WeatherCard = ({w}) => {

	

	

	return(
		<>
		<section className="weather">
		<h3>Current Weather</h3>
		{console.log(w)}
		{/* <div>This is the forecast for {w.list.dt}</div> */}
		</section>
		</>
	)
}