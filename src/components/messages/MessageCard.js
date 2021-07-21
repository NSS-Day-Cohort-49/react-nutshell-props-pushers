import React, { useContext, useEffect } from "react";
import "./Message.css";
import { FriendContext } from "../friends/FriendProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { MessageContext } from "./MessageProvider";
import { useHistory } from "react-router";

// Current user id
// getFriends to check if current user is friends with the poster
// Conditionally render the button
// build in the id of the posting user
// onclick for button to add the follow record
// create new object to send to provider

export const MessageCard = ({ message }) => {
  
  const history = useHistory()
  const { deleteMessage } = useContext(MessageContext)
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
  const { friends, getFriends, addFriend, deleteFriend } =
    useContext(FriendContext);
  // add addFriends when provider is built

  useEffect(() => {
    getFriends();
  }, []);

  // let foundFriend = friends.find(
  //   (friend) =>
  //     currentUser === friend.currentUserId && friend.userId === message.user.id
  // );

  let isCurrentUser = null
    
  if (currentUser === message.userId){
    
      isCurrentUser = true
    }else{
      
      isCurrentUser = null
    }
  
 
  let foundFriend = friends.find((friend)=> (currentUser === friend.currentUserId && friend.userId === message.user.id) )
  
  let friendStyling = "not-friend"
 if (foundFriend) {
   friendStyling = "friend"
 } 
  const addNewFriend = () => {
    const newFriendObj = {
      currentUserId: currentUser,
      userId: message.userId,
    };

    addFriend(newFriendObj);
  };

  const unfriend = () => {
    deleteFriend(foundFriend.id);
  };

  const handleDeleteMessage = () => {
    deleteMessage(message.id)
  }

  const handleUpdateMessage = ()=> {
   
      history.push(`/messages/edit/${message.id}`)}
  
 

  return (
    <>{message.recipientId === undefined || message.userId === currentUser ? 
      <div className="card">
        <div className="messages card-body ">
          <div className="card-sender-wrapper">
          <h3>Sender</h3>
            <img src={message.user.profile_pic} alt="" className="profilepic"></img>
            <div className="card-text" onClick={addNewFriend}>
              {message.user.name}
            </div>
            <div className="card-text">{message.user.email}</div>
            { message.user.id === currentUser ? (
              <>
              </>
            ) : (
              <>
              {foundFriend ? (
              <>
                <button className={friendStyling} onClick={unfriend}>
                  Unfriend
                </button>
              </>
            ) : (
              <>
                <button className={friendStyling} onClick={() =>
                  {window.confirm(('Continue with adding friend?'))
                  {addNewFriend()}}}>
                  Add Friend
                </button>
              </>
            )}
            </>
            )}
          {isCurrentUser? (<><button key={message.id}onClick={handleDeleteMessage}>Delete Message</button><button key={message.id} value={message.id} onClick={handleUpdateMessage}>Edit Message</button></>):(<></>)}
          </div>
          <div className="card-message-wrapper">
          {message.recipientId === undefined ? " ": "Private"}
            <h5 className="card-title">{message.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{message.message}</h6>
          </div>
          {/* <a href={article.url} class="card-link">Card link</a> */}
          {/* <a href="#" class="card-link">Posted By: {article.user.name}</a> */}
        </div>
      </div> : ""}
    </>
  );
};
