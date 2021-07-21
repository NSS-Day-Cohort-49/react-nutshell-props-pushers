import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { useHistory, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// addEvent form input: event name, date, location, zipcode
// save button adds event to db, history.push events list

export const EventForm = () => {
  const { addEvent, getEventById, updateEvent } = useContext(EventContext)
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const [eventObj, setEventObj] = useState({
      userId: currentUser,
      eventName: "",
      eventDate: "",
      eventLocation: "",
      eventZipcode: ""
    },)

    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { eventId } = useParams();

    
     //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    const newEvent = { ...eventObj}
    newEvent[event.target.id] = event.target.value;
    setEventObj(newEvent)
  } 
  
  
  const handleClickSaveEvent = (event) => {
      // event.preventDefault() 
      if (eventId) {
        updateEvent(eventObj).then(history.push("/events"))
      } else {
        addEvent(eventObj)
        .then(history.push("/events"))
      }}
  
    useEffect (() => {
      if (eventId) {
        getEventById(eventId).then((event) => {
          setEventObj(event)
          console.log(event)
          setIsLoading(false)
        });
      } else {
        setIsLoading(false)
      }
    }, [])

      return (
        <form className="eventForm">
      <h1 className="eventForm__title event_header">{eventId ? "Update Event" : "New Event"}</h1>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">event name:</label>
          <input type="text" id="eventName" required autoFocus className="form-control" placeholder="event name" 
          value={eventObj.eventName} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">event date:</label>
          <input type="date" id="eventDate" required autoFocus className="form-control" placeholder="mm/dd/yyyy" 
          value={eventObj.eventDate} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">event location: </label>
          <input type="text" name="eventLocation" id="eventLocation" className="form-control" placeholder="street address" 
          value={eventObj.eventLocation} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="zipcode">event zipcode: </label>
          <input type="text" name="eventZipcode" id="eventZipcode" className="form-control" placeholder="5-digit code" 
          value={eventObj.eventZipcode} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <div className="buttons"><button className="btns" disabled={isLoading} 
              onClick={handleClickSaveEvent}
            >
                 {eventId ? "Update Event" : "Post New Event"}
            </button>
            </div>
    </form>
      )
    }

    // event.preventDefault()
      