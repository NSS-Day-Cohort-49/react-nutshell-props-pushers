import React from "react";
import "./Event.css";

export const EventCard = ({ event }) => {
  return (
    <>
      <section className="event">
        <h3 className="event_name">{event.eventName}</h3>
        <div className="event_date">Date: {event.eventDate}</div>
        <div className="event_location">Location: {event.eventLocation}</div>
      </section>
    </>
  );
};
