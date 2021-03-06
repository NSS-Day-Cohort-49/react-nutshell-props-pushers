import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Friend.css";

export const FriendContext = createContext();

export const FriendProvider = (props) => {
  const [friends, setFriends] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const id = parseInt(sessionStorage.getItem("nutshell_user"))

  const getFriends = () => {
    return fetch(`http://localhost:8088/currentUsers/${id}/friends?_expand=user`)
      .then((res) => res.json())
      .then(setFriends);
  };

  const addFriend = (newFriendObj) => {
	  return fetch("http://localhost:8088/friends",{
	  method: "POST",
	  headers:{
		  "Content-Type": "application/json"
	  },
	  body: JSON.stringify(newFriendObj)})
	  .then(getFriends)
	  
  }

  const deleteFriend = (id) => {
	  return fetch(`http://localhost:8088/friends/${id}`,
	  {method:"DELETE"})
	  .then(getFriends)
	
  }

  return (
    <>
      <FriendContext.Provider
        value={{
          friends,
          getFriends,
	  addFriend,
	  deleteFriend,
          searchTerms,
          setSearchTerms,
        }}
      >
        {props.children}
      </FriendContext.Provider>
    </>
  );
};
