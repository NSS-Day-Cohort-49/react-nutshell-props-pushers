import React from "react";
import "./User.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserCard = ({ user }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            {/* <img
              src={user.user.profile_pic}
              className="card-img-top"
              alt={user.user.name}
            /> */}
            <h5 className="card-title">{user.name}</h5>
            <div className="card-text">{user.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
