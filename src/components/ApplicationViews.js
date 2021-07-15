import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./message/MessageList";
import { MessageProvider } from "./message/MessageProvider";
import { EventList } from "./event/EventList";
import { EventProvider } from "./event/EventProvider";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <MessageProvider>
        <Route path="/messages">
          {/* Render the component for the messages */}
          <MessageList />
        </Route>
      </MessageProvider>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <EventProvider>
        <Route path="/events">
          {/* Render the component for the user's events */}
          <EventList />
        </Route>
      </EventProvider>
    </>
  );
};
