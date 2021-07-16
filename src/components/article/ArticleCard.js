import React from "react";
import "./Article.css";

export const ArticleCard = ({ article }) => {
  return (
    <>
      <section className="article">
        <h1>
	<a href={article.url} rel="noreferrer">{article.title}</a>
	</h1>
        <div>{article.synopsis}</div>
        <div>Posted by: {article.user.name}</div>
      </section>

    </>
  );
};
