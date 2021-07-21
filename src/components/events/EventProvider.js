import React, { useState, createContext } from "react";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);



  const getEvents = () => {
    return fetch("http://localhost:8088/events")
      .then((res) => res.json())
      .then(setEvents)
  };

  const addEvent = (newEventObj) => {
    return fetch("http://localhost:8088/events",{
      method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEventObj)})
        .then(getEvents)
      }

  return (
    <EventContext.Provider value={{ events, getEvents, addEvent }}>
      {props.children}
    </EventContext.Provider>
  );
};

// return fetch("http://localhost:8088/currentUsers/${id}/events?_expand=user")