import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider";
import { EventList } from "./events/EventList";
import { EventProvider } from "./events/EventProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";

export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
        <Route exact path="/">
          {/* Render the component for news articles */}
          <ArticleList />
        </Route>
      </ArticleProvider>

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
