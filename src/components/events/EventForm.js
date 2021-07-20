import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { UserContext } from "../user/UserProvider";
import { FriendContext } from "../friends/FriendProvider"
import { useHistory } from 'react-router-dom';
import "./Event.css";
import "bootstrap/dist/css/bootstrap.min.css";

// addEvent form input: event name, date, location, zipcode
// save button adds event to db, history.push events list

export const EventForm = () => {
    const { getEvents, addEvent } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)
    const { friends, getFriends } = useContext(FriendContext)
    const [event, setEvent] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    useEffect (() => {
        getEvents().then(getUsers).then(getFriends).then(() => {
        
        }
        )
    }, [])


    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEvent = { ...event }
        /* Event is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        event[event.target.id] = event.target.value
        // update state
        setEvent(newEvent)
      }
      
    const handleAddEvent = () => {
      event.preventDefault() // Prevent browser from submitting the form and refreshing the page
    // if input = "", window alert: "Please complete all fields"
    const newEventObj = {
        currentUserId: currentUser,
        eventName: "",
        eventDate: "",
        eventLocation: "",
        eventZipcode: ""
    }
  
    handleAddEvent(newEventObj)
    .then(() => history.push("/events"))
   }

   return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">event name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="event name" value={event.eventName} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">event date:</label>
          <input type="date" id="date" required autoFocus className="form-control" placeholder="mm/dd/yyyy" value={event.eventDate} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">event location: </label>
          <input type="text" name="location" id="location" className="form-control" placeholder="street address" value={event.eventLocation} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="zipcode">event zipcode: </label>
          <input type="text" name="zipcode" id="zipcode" className="form-control" placeholder="5-digit code" value={event.zipcode} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick={newEventObj => {
          handleAddEvent()
        }}>
            <>Save New Event </>
      </button>
    </form>
  )
}

/* const handleSaveevent = () => {
    if (parseInt(event.locationId) === 0 || parseInt(event.customerId) === 0) {
        window.alert("Please select a location and a customer")
        */


        {/* {eventId ? <>Save event</> : <>Add event</>} */}