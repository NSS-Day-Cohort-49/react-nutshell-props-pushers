import React, { useContext } from "react";
import { EventContext } from "./EventProvider";
import { useHistory } from "react-router-dom"
import "./Event.css";
import "bootstrap/dist/css/bootstrap.min.css";

// √ render event card when invoked by EventList
// √ map through events, render those filtered current user and by friend
// √ addNewEvent function renders EventForm on click
// when events <= 1, style next event
// delete button deletes event from db. redirects to event list
// "show weather" button displays weather for date of event when clicked


export const EventCard = ({ event }) => {
  // console.log("page render")
  const { deleteEvent } = useContext(EventContext)

  const handleDelete = () => {
    deleteEvent(event.id)
  }

  const history = useHistory()

  return (
    <>
      <section className="card">
        <div className="events card-body">
          <div className="card-sender-wrapper">
            <h3 className="card-title">{event.eventName}</h3>
          </div>
          <h5 className="card-text">Date: {event.eventDate}</h5>
          <h6 className="card_text">Location: {event.eventLocation}</h6>
          <h6 className="card-text">Zipcode: {event.eventZipcode}</h6>
        </div>
        <button className="button" onClick={handleDelete}>
          Delete Event
        </button>
      </section>
    </>
  );
  }