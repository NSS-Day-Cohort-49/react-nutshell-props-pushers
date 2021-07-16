import React from "react";
import "./Friend.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const FriendCard = ({ friend }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            {/* <img
              src={friend.user.profile_pic}
              className="card-img-top"
              alt={friend.user.name}
            /> */}
            <h5 className="card-title">{friend.user.name}</h5>
            <div className="card-text">{friend.user.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
