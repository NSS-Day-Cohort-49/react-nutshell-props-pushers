import React, { useContext, useEffect } from "react";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";
import { useHistory } from "react-router-dom";
import { FriendContext } from "../friends/FriendProvider";

export const ArticleCard = ({ article }) => {
  const { deleteArticle, getArticles } = useContext(ArticleContext);
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
  const { friends, getFriends } = useContext(FriendContext);

  const handleDelete = () => {
    deleteArticle(article.id);
  };

  useEffect(() => {
    getFriends(friends)
    console.log(friends)
  }, [])

  let foundFriend = friends.find(friend => article.userId === friend.userId)
console.log(foundFriend)



  const history = useHistory();

  return (
    <>
      {article.userId === currentUser ? 
        <section className="article">
        <h1>
          <a href={article.url} rel="noreferrer">
            {article.title}
          </a>
        </h1>
        <div>{article.synopsis}</div>
        <div>Posted by: {article.user.name}</div>
        <div>{article.timestamp}</div>
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
      </section> : ""
}
{foundFriend ?  <section className="article friend_article">
        <h1>
          <a href={article.url} rel="noreferrer">
            {article.title}
          </a>
        </h1>
        <div>{article.synopsis}</div>
        <div>Posted by: {article.user.name}</div>
        <div>{article.timestamp}</div>
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
      </section> : "" }
</>
  );
};
