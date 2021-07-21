import React, { useContext } from "react";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";
import { useHistory } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const { deleteArticle } = useContext(ArticleContext);

  const handleDelete = () => {
    deleteArticle(article.id);
  };

  const history = useHistory();

  return (
    <>
      <section className="article">
        <h1>
          <a href={article.url} rel="noreferrer">
            {article.title}
          </a>
        </h1>
        <div>{article.synopsis}</div>
        <div>Posted by: {article.user.name}</div>
        <button
          className="button"
          onClick={() => {
            history.push(`/articles/edit/${article.id}`);
          }}
        >
          Edit Article
        </button>
        <button className="button" onClick={handleDelete}>
          Delete Article
        </button>
      </section>
    </>
  );
};
