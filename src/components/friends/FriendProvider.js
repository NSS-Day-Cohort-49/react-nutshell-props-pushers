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

  return (
    <>
      <FriendContext.Provider
        value={{
          friends,
          getFriends,
          searchTerms,
          setSearchTerms,
        }}
      >
        {props.children}
      </FriendContext.Provider>
    </>
  );
};
