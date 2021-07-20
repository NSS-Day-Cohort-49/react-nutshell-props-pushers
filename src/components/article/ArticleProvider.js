import React, { createContext, useState } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    return fetch("http://localhost:8088/articles?_expand=user")
      .then((res) => res.json())
      .then(setArticles);
  };

  const addArticle = (articleObj) => {
    return fetch("http://localhost:8088/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleObj),
    }).then(getArticles);
  };

  const deleteArticle = (articleId) => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
      method: "DELETE",
    }).then(getArticles);
  };

  return (
    <>
      <ArticleContext.Provider
        value={{
          articles,
          getArticles,
          deleteArticle,
          addArticle,
        }}
      >
        {props.children}
      </ArticleContext.Provider>
    </>
  );
};
