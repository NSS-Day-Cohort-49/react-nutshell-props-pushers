import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./message/MessageList";
import { MessageProvider } from "./message/MessageProvider";
import { EventList } from "./event/EventList";
import { EventProvider } from "./event/EventProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { TaskList } from "./task/TaskList";
import { TaskProvider } from "./task/TaskProvider";

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

      <TaskProvider>
        <Route path="/tasks">
        {/* Render the component for the user's tasks */}
          <TaskList />
        </Route>
      </TaskProvider>

      <EventProvider>
        <Route path="/events">
          {/* Render the component for the user's events */}
          <EventList />
        </Route>
      </EventProvider>
    </>
  );
};
