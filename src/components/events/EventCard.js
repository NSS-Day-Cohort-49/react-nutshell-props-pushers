import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import "./Event.css";
import "bootstrap/dist/css/bootstrap.min.css";

// √ render event card when invoked by EventList
// √ map through events, render those filtered current user and by friend
// √ addNewEvent function renders EventForm on click
// when events <= 1, style next event
// delete button deletes event from db. redirects to event list
// "show weather" button displays weather for date of event when clicked


export const EventCard = ({ event }) => {
  // console.log("page render")
  const { events, getEvents, addEvent } = useContext(EventContext)
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
 

  useEffect(() => {
    getEvents()
  },[])

  return (
    <>
      <section className="card">
        <div className="events card-body">
          <div className="card-sender-wrapper">
            <h3 className="card-title">{event.eventName}</h3>
          </div>
          <h5 className="card-text">Date: {event.eventDate}</h5>
          <h6 className="card_text">Location: {event.eventLocation}</h6>
          <h6 className="card-text">Zipcode: {event.eventZipcode}</h6>
        </div>
      </section>
    </>
  );
  }




/* ======= MESSAGE CARD =============== */
/*export const MessageCard = ({ message }) => {
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
          // {/* <a href={article.url} class="card-link">Card link</a> */
          // {/* <a href="#" class="card-link">Posted By: {article.user.name}</a> */}
    //       </div>
    //       </div>
    //     </>
    //   );
    // };