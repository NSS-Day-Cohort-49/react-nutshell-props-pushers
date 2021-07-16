import React, { useContext, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";

export const ArticleList = () => {
  const { articles, getArticles } = useContext(ArticleContext);

  useEffect(() => {
    console.log("useEffect - getArticles");
    getArticles();
  }, []);

  return (
    <>
      <div className="article_list">
        {console.log("ArticleList - Render", articles)}
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>
    </>
  );
};
