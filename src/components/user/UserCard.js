import React, { useContext, useEffect } from "react";
import "./User.css";
import { UserContext } from "./UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { FriendContext } from "../friends/FriendProvider";
import { useHistory, useParams } from "react-router";

export const UserCard = ({ user }) => {
  
  // const {users, addUser, deleteUser} = UseContext(UserContext);
  
  
  // const addNewUser = () => {
  //   const newUserObj = {
  //     currentUserId: parseInt(sessionStorage.getItem("nutshell_user")),
  //     userId: userId,
  //   };

  //   addUser(newUserObj);
  // };

  // const User = () => {
  //   deleteUser(foundUser.id);
  // };

  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
  const { friends, getFriends, addFriend, deleteFriend } =
    useContext(FriendContext);
  // add addFriends when provider is built

  const userId = useParams();
  const history = useHistory()

  useEffect(() => {
    getFriends();
  }, []);

  let foundFriend = friends.find((friend)=> (currentUser === friend.currentUserId && friend.userId === user.id) )
  
  let friendStyling = "not-friend"
 if (foundFriend) {
   friendStyling = "friend"
 } 
  const handleClickFriend = () => {
    if (userId) {
      deleteFriend(foundFriend.Id)
    } else {
      const newFriendObj = {
        currentUserId: currentUser,
        userId: userId,
      }
      addFriend(newFriendObj)
      .then(() => history.push("/friends"))
    }
  }


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
            <div><button onClick={handleClickFriend}>
              {foundFriend ? <>Unfriend</> : <>Add Friend</>}</button></div>
          </div>
        </div>
      </div>
    </>
  );
};
