import React from "react";
import "./Article.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ArticleCard = ({ article }) => {
  return (
    <>
      {/* <section className="article">
        <h1>{article.title}</h1>
        <div>{article.synopsis}</div>
        <div>Posted by: {article.user.name}</div>
      </section> */}

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{article.synopsis}</h6>
          <div className="card-text">{article.user.name}</div>
          {/* <a href={article.url} class="card-link">Card link</a> */}
          {/* <a href="#" class="card-link">Posted By: {article.user.name}</a> */}
        </div>
      </div>
    </>
  );
};
