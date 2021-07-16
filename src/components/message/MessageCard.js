import React from "react";
import "./Message.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const MessageCard = ({ message }) => {
  console.log(message.user.profile_pic);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-sender-wrapper">
            <img href={message.user.profile_pic} alt={message.user.name}></img>
            <div className="card-text">{message.user.name}</div>
            <div className="card-text">{message.user.email}</div>
          </div>
          <div className="card-message-wrapper">
            <h5 className="card-title">{message.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{message.message}</h6>
          </div>
          {/* <a href={article.url} class="card-link">Card link</a> */}
          {/* <a href="#" class="card-link">Posted By: {article.user.name}</a> */}
        </div>
      </div>
    </>
  );
};
