import React, {useContext} from "react";
import { FriendContext } from "./FriendProvider";
import "./Friend.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const FriendCard = ({ friend }) => {
	const { deleteFriend} = useContext(FriendContext)
	const unfriend = () => {
		deleteFriend(friend.id)
	}

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
	    <button onClick={unfriend}>Unfriend</button>
          </div>
        </div>
      </div>
    </>
  );
};
