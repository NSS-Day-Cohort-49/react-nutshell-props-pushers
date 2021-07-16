import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./messages/MessageList";
import { MessageProvider } from "./messages/MessageProvider";
import { EventList } from "./events/EventList";
import { EventProvider } from "./events/EventProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { TaskList } from "./tasks/TaskList";
import { TaskProvider } from "./tasks/TaskProvider";
import { FriendProvider } from "./friends/FriendProvider";
import { UserFriendList } from "./friends/UserFriendList";
import { UserList } from "./user/UserList";
import { FriendSearch } from "./friends/SearchFriends";
import { UserProvider } from "./user/UserProvider";
import { UserSearch } from "./user/SearchUsers";

export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
        <Route exact path="/">
          {/* Render the component for news articles */}
          <ArticleList />
        </Route>
      </ArticleProvider>

      <FriendProvider>
        <UserProvider>
          <Route path="/friends">
            {/* Render the component for list of friends */}
            <FriendSearch />
            <UserFriendList />
          </Route>

          <Route path="/users">
            <UserSearch />
            <UserList />
          </Route>
        </UserProvider>
      </FriendProvider>

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
