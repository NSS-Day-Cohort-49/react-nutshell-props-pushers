import React, { createContext, useState } from "react";

export const FriendContext = createContext();

export const FriendProvider = (props) => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    return fetch("http://localhost:8088/friends?_expand=user")
      .then((res) => res.json())
      .then(setFriends);
  };

  return (
    <>
      <FriendContext.Provider value={{ friends, getFriends }}>
        {props.children}
      </FriendContext.Provider>
    </>
  );
};
