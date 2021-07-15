<<<<<<< HEAD
import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./message/MessageList";
import { MessageProvider } from "./message/MessageProvider";
import { EventList } from "./event/EventList";
import { EventProvider } from "./event/EventProvider";
=======
import React from "react"
import { Route } from "react-router-dom"
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { MessageList } from "./message/MessageList"
import { MessageProvider } from "./message/MessageProvider"
>>>>>>> main

export const ApplicationViews = () => {
  return (
    <>
<<<<<<< HEAD
=======
    <ArticleProvider>
>>>>>>> main
      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
      </Route>
      </ArticleProvider>

      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
<<<<<<< HEAD
      <MessageProvider>
        <Route path="/messages">
          {/* Render the component for the messages */}
          <MessageList />
        </Route>
=======

    <MessageProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
        <MessageList />
      </Route>
>>>>>>> main
      </MessageProvider>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
<<<<<<< HEAD
      <EventProvider>
        <Route path="/events">
          {/* Render the component for the user's events */}
          <EventList />
        </Route>
      </EventProvider>
=======

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
>>>>>>> main
    </>
  );
};
