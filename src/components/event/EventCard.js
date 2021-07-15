import React from "react";
import "./Event.css";

export const EventCard = ({ event }) => {
  return (
    <>
      <section className="event">
        <h3 className="event_name">{event.name}</h3>
        <div className="event_date">Date: {event.date}</div>
        <div className="event_location">Location: {event.location}</div>
      </section>
    </>
  );
};
