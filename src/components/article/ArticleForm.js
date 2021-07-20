import React, { useContext, useEffect, useState } from "react";
import { ArticleContext } from "./ArticleProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Article.css";

export const ArticleForm = () => {
  const { addArticle, getArticleById, updateArticle } =
    useContext(ArticleContext);

  const [isLoading, setIsLoading] = useState(true);

  const [article, setArticle] = useState({});

  const { articleId } = useParams();

  const history = useHistory();
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
  const ts = new Date();

  const handleControlledInputChange = (event) => {
    const newArticle = { ...article };
    newArticle[event.target.id] = event.target.value;
    setArticle(newArticle);
  };

  const handleClickSaveArticle = (event) => {
    event.preventDefault();
    if (article.title === "" || article.synopsis === "" || article.url === "") {
      window.alert("Please complete the form");
    } else if (articleId) {
      updateArticle(article).then(() => history.push("/"));
    } else {
      const newArticle = {
        title: article.title,
        synopsis: article.synopsis,
        url: article.url,
        timestamp: ts.toLocaleDateString(),
        userId: currentUser,
      };
      addArticle(newArticle).then(() => history.push("/"));
    }
  };

  useEffect(() => {
    if (articleId) {
      getArticleById(articleId).then((article) => {
        setArticle(article);
        console.log(article);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

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
            value={article.title}
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
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveArticle}
      >
        {articleId ? <>Update Article</> : <>Save Article</>}
      </button>
    </form>
  );
};
