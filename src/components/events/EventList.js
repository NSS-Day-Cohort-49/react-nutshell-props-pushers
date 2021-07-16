import React, { useEffect, useContext } from "react";
import { EventCard } from "./EventCard";
import { EventContext } from "./EventProvider";
import "./Event.css";

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    console.log("useEffect: getEvents");
    getEvents();
  }, []);

  return (
    <>
      {console.log("EventList - Render: events", events)}
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </>
  );
};
