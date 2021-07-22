import React, { useContext,useEffect } from "react";
import { EventContext } from "./EventProvider";
import { useHistory } from "react-router-dom"
import "./Event.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FriendContext } from "../friends/FriendProvider";
import { WeatherContext } from "../weather/WeatherProvider";

// √ render event card when invoked by EventList
// √ map through events, render those filtered current user and by friend
// √ addNewEvent function renders EventForm on click
// when events <= 1, style next event
// delete button deletes event from db. redirects to event list
// "show weather" button displays weather for date of event when clicked


export const EventCard = ({ event }) => {
  // console.log("page render")
  const { deleteEvent } = useContext(EventContext)
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
  const { friends, getFriends } = useContext(FriendContext);
  const { weather, getWeather} = useContext(WeatherContext)

  const handleDelete = () => {
    deleteEvent(event.id)
  }

  useEffect(() => {
    getFriends(friends).then(getWeather(event.eventZipcode)).then(
    console.log(friends ,"weather", weather))
  }, [])

  let foundFriend = friends.find(friend => event.userId === friend.userId)
console.log(foundFriend)

const forecastList = weather.list
let foundWeatherArr = []

if (event){
  foundWeatherArr = forecastList.filter(w => {
    
   return w.dt_txt.startsWith(event.eventDate)})
}

let middleDayWeather = foundWeatherArr[5]


console.log( middleDayWeather)

  const history = useHistory()

  return (
    <>
    
      {event.userId === currentUser ? <section className="card">
        <div className="events card-body">
          <div className="card-sender-wrapper">
            <h3 className="card-title">{event.eventName}</h3>
          </div>
          <h5 className="card-text">Date: {event.eventDate}</h5>
          <h6 className="card_text">Location: {event.eventLocation}</h6>
          <h6 className="card-text">Zipcode: {event.eventZipcode}</h6>
       
        </div>
        <button
          className="button"
          onClick={() => {
            history.push(`/events/edit/${event.id}`);
          }}
        >
          Edit Event
        </button>
        <button className="button" onClick={handleDelete}>
          Delete Event
        </button>
      </section> : ""}
      {foundFriend ? <section className="card friend_event">
        <div className="events card-body">
          <div className="card-sender-wrapper">
            <h3 className="card-title">{event.eventName}</h3>
          </div>
          <h5 className="card-text">Date: {event.eventDate}</h5>
          <h6 className="card_text">Location: {event.eventLocation}</h6>
          <h6 className="card-text">Zipcode: {event.eventZipcode}</h6>
        </div>
        <section className="event_buttons">
        <button
          className="button"
          onClick={() => {
            history.push(`/events/edit/${event.id}`);
          }}
        >
          Edit Event
        </button>
        <button className="button" onClick={handleDelete}>
          Delete Event
        </button>
        </section>
      </section> : ""

      }
    </>
  );
  }