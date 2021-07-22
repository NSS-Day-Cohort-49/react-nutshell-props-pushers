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

  const sortedArticles = articles.sort((a, b) => {
    return (
      parseInt(b.timestamp.split("/").join("")) -
      parseInt(a.timestamp.split("/").join(""))
    );
  });
  // repeat the same logic to find a friend and style the Articles accordingly

  return (
    <>
      <section className="news_articles">
        <h1 className="article_header">News Articles</h1>

        <button className="new_article_button"
          onClick={() => {
            history.push("/articles/create");
          }}
        >
          Add New Article
        </button>

        <div className="article_list">
          {console.log("ArticleList - Render", sortedArticles)}
          {sortedArticles.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </div>
      </section>
    </>
  );
};
