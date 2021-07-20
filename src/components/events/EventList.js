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
    <div className="button-events"><button className="addButton" onClick={() => history.push("/events/create")}>
          Add New Event
            </button>
      </div>
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </>
  );
};
