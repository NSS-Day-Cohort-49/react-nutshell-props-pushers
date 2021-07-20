import React, { useContext, useEffect } from "react";
import "./User.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FriendContext } from "../friends/FriendProvider";

export const UserCard = ({ user }) => {
  
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
  const { friends, getFriends, addFriend, deleteFriend } =
    useContext(FriendContext);
  // add addFriends when provider is built

  useEffect(() => {
    getFriends();
  }, []);

  let foundFriend = friends.find((friend)=> (currentUser === friend.currentUserId && friend.userId === user.id))

  let friendStyling = "not-friend"
 if (foundFriend) {
   friendStyling = "friend"
 } 

  const addNewFriend = () => {
    const newFriendObj = {
      currentUserId: currentUser,
      userId: user.id,
    };

    addFriend(newFriendObj);
  };
  
  const unfriend = () => {
    deleteFriend(foundFriend.id);
  };


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
            <div>            
            { user.id === currentUser ? (
              <>
              </>
            ) : (
              <>
                {foundFriend ? "" : <button className={friendStyling} onClick={addNewFriend}>
                  Add Friend
                </button>}
              </>
            )}</div>
          </div>
        </div>
      </div>
    </>
  );
};
