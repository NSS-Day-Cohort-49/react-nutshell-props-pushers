import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { useHistory } from 'react-router-dom';
import "./Event.css";
import "bootstrap/dist/css/bootstrap.min.css";

// addEvent form input: event name, date, location, zipcode
// save button adds event to db, history.push events list

export const EventForm = () => {
    const { addEvent } = useContext(EventContext)
    const [eventObj, setEventObj] = useState({
      currentUserId: "",
      eventName: "",
      eventDate: "",
      eventLocation: "",
      eventZipcode: ""
    },)

    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    
     //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEvent = { ...eventObj}
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEvent[event.target.id] = event.target.value;
    // update state
    setEventObj(newEvent)
  } 
  
  const handleClickSaveEvent = (event) => {
      // Prevent browser from submitting the form and refreshing the page
      event.preventDefault() 
        const newEvent = {
          currentUserId: currentUser,
          eventName: eventObj.eventName,
          eventDate: eventObj.eventDate,
          eventLocation: eventObj.eventLocation,
          eventZipcode: eventObj.eventZipcode
        }
        addEvent(newEvent)
        .then(() => history.push("/events"))
      }
  

    useEffect (() => {
      setIsLoading(false)
    }, [])
      
        
      

 // return ternary button syntax: {eventId ? <>Save event</> : <>Add event</>}

      return (
        <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
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
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick=
          {handleClickSaveEvent}>
            <>Save New Event </>
      </button>
    </form>
      )
    }
      

//  //when a field changes, update state. The return will re-render and display based on the values in state
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newTask = { ...task }
//     /* Animal is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newTask[event.target.id] = event.target.value
//     // update state

  // const handleSaveMessage = () => {
  //   if (messageId) {
  //     updateMessage(message).then(history.push("/messages"));
  //   } else {
  //     addMessage(message).then(history.push("/messages"));
  //   }
  // };
//     setTask(newTask)
//   }