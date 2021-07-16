import React from "react";
import "./Event.css";

export const EventCard = ({ event }) => {
  return (
    <>
      <section className="card">
        <div className="events card-body">
          <div className="card-sender-wrapper">
            <h3 className="card-title">{event.eventName}</h3>
          </div>
          <h5 className="card-text">Date: {event.eventDate}</h5>
          <h6 className="card_text">Location: {event.eventLocation}</h6>
        </div>
      </section>
    </>
  );
};
