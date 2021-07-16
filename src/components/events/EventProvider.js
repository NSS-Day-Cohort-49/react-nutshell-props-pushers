import React, { useState, createContext } from "react";
import "./Event.css";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch("http://localhost:8088/events?_expand=user")
      .then((res) => res.json())
      .then(setEvents);
  };
  console.log(events);

  return (
    <EventContext.Provider value={{ events, getEvents }}>
      {props.children}
    </EventContext.Provider>
  );
};
