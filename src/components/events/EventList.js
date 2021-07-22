import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"
import { EventCard } from "./EventCard";
import { EventContext } from "./EventProvider";
import "./Event.css";


export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);
  const history = useHistory()

  useEffect(() => {
    console.log("useEffect: getEvents");
    getEvents();
  }, []);

  return (
    <>
    <section className="events">
    <h1 className="event-header">Events</h1>
    <div className="button-events">
      <button className="addButton" onClick={() => history.push("/events/create")}>
          Add a New Event?
            </button>
      </div>
      {events.map((event) => {
        // if event is most recent one, style differently 
        return <EventCard key={event.id} event={event} />;
      })}
      </section>
    </>
  );
};
