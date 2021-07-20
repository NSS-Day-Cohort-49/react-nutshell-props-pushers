import React, { useContext } from "react";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";

export const ArticleCard = ({ article }) => {
  const { deleteArticle } = useContext(ArticleContext);

  const handleDelete = () => {
    deleteArticle(article.id);
  };

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
        <button onClick={handleDelete}>Delete Article</button>
      </section>
    </>
  );
};
