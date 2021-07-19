import React, { useContext, useEffect, useState } from "react";
import { ArticleContext } from "./ArticleProvider";
import { useHistory } from "react-router-dom";
import "./Article.css";

export const ArticleForm = () => {
  const { addArticle } = useContext(ArticleContext);

  const [article, setArticle] = useState({
    title: "",
    synopsis: "",
    url: "",
  });

  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newArticle = { ...article };
    newArticle[event.target.id] = event.target.value;
    setArticle(newArticle);
  };
  const handleClickSaveArticle = (event) => {
    event.preventDefault();

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const ts = new Date();

    const newArticle = {
      title: article.title,
      synopsis: article.synopsis,
      url: article.url,
      timestamp: ts.toISOString(),
      userId: currentUser,
    };
    addArticle(newArticle).then(() => history.push("/"));
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Article</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Article Title:</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            placeholder="Article Title"
            value={article.newsTitle}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Synopsis: </label>
          <input
            type="text"
            id="synopsis"
            required
            autoFocus
            className="form-control"
            placeholder="Synopsis"
            value={article.synopsis}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Article URL: </label>
          <input
            type="text"
            id="url"
            required
            autoFocus
            className="form-control"
            placeholder="Article URL"
            value={article.url}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveArticle}>
        Save New Article
      </button>
    </form>
  );
};
