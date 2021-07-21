import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./messages/MessageList";
import { MessageForm } from "./messages/MessageForm";
import { MessageProvider } from "./messages/MessageProvider";
import { EventForm } from "./events/EventForm"
import { EventList } from "./events/EventList";
import { EventProvider } from "./events/EventProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleForm } from "./article/ArticleForm";
import { TaskList } from "./tasks/TaskList";
import { TaskProvider } from "./tasks/TaskProvider";
import { TaskForm } from "./tasks/TaskForm";
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
        <FriendProvider><Route exact path="/">
          {/* Render the component for news articles */}
          <ArticleList />
        </Route>
        </FriendProvider>
        <Route exact path="/articles/create">
          <ArticleForm />
        </Route>
        <Route exact path="/articles/edit/:articleId(\d+)">
          <ArticleForm />
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
        <FriendProvider>
          <UserProvider>
            <Route exact path="/messages">
              {/* Render the component for the messages */}
              <MessageList />
            </Route>

            <Route exact path="/messages/new">
              <MessageForm />
            </Route>
            <Route exact path="/messages/edit/:messageId(\d+)">
              <MessageForm />
            </Route>
          </UserProvider>
        </FriendProvider>
      </MessageProvider>

      <TaskProvider>
        <UserProvider>
          <Route exact path="/tasks/create">
            <TaskForm />
          </Route>
          <Route exact path="/tasks/edit/:taskId(\d+)">
            <TaskForm />
          </Route>
        </UserProvider>

        <Route exact path="/tasks">
          {/* Render the component for the user's tasks */}
          <TaskList />
        </Route>
      </TaskProvider>

      <EventProvider>
        <UserProvider>
          <FriendProvider>
            <Route exact path="/events">
              {/* Render the component for the user's events */}
              <EventList />
            </Route>
            <Route path="/events/create">
              {/* Render the component for the user's events */}
              <EventForm />
            </Route>
          </FriendProvider>
        </UserProvider>
      </EventProvider>
    </>
  );
};
