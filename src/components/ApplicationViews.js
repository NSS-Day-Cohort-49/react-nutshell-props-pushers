import React from "react"
import { Route } from "react-router-dom"
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { MessageList } from "./message/MessageList"
import { MessageProvider } from "./message/MessageProvider"

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

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
