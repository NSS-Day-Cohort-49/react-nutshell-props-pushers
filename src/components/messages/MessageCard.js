import React, {useContext, useEffect} from "react";
import "./Message.css";
import { FriendContext } from "../friends/FriendProvider";
import "bootstrap/dist/css/bootstrap.min.css";

// Current user id 
// getFriends to check if current user is friends with the poster
// Conditionally render the button
// build in the id of the posting user 
// onclick for button to add the follow record
// create new object to send to provider

export const MessageCard = ({ message }) => {
  console.log(message.user.profile_pic);

  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
  const {friends , getFriends, addFriend, deleteFriend} = useContext(FriendContext)
// add addFriends when provider is built
  
  useEffect(() => {
    getFriends()
  },[])


  let foundFriend = friends.find((friend)=> (currentUser === friend.currentUserId && friend.userId === message.user.id) )
  console.log("friend Search", foundFriend)
  let friendStyling = "not-friend"
 if (foundFriend) {
   friendStyling = "friend"
 } 
 const addNewFriend = ()=> {

  const newFriendObj = {
    currentUserId: currentUser,
    userId: message.userId
  }

  addFriend(newFriendObj)

 }

 const unfriend = ()=>{
   
  deleteFriend(foundFriend.id)
 }

  return (
    <>
      <div className="card">
        <div className="messages card-body ">
          <div className="card-sender-wrapper">
            <img src={message.user.profile_pic} alt={message.user.name}></img>
            <div className="card-text" onClick={addNewFriend} >{message.user.name}</div>
            <div className="card-text">{message.user.email}</div>
          {foundFriend? <><button className={friendStyling} onClick={unfriend}>Unfriend</button></> : <><button className={friendStyling} onClick={addNewFriend}>Add Friend</button></>}
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
