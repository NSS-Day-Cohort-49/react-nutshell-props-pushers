import React, { useContext, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";
import { useHistory } from "react-router-dom";

export const ArticleList = () => {
  const { articles, getArticles } = useContext(ArticleContext);
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect - getArticles");
    getArticles();
  }, []);

  // const sortedArticles = articles.sort();
  // repeat the same logic to find a friend and style the Articles accordingly

  return (
    <>
      <h2>News Articles</h2>
      <button
        onClick={() => {
          history.push("/articles/create");
        }}
      >
        Add New Article
      </button>
      <div className="article_list">
        {console.log("ArticleList - Render", articles)}
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>
    </>
  );
};
