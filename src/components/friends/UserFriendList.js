import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../user/UserProvider";
import { FriendCard } from "./FriendCard";
import "./Friend.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

export const UserFriendList = () => {
  const { friends, getFriends, searchTerms } = useContext(FriendContext);
  const { users, getUsers} =useContext(UserContext)
  const [filteredFriends, setFiltered] = useState([]);
 
  const history = useHistory();

  useEffect(() => {
    getUsers()
    .then(getFriends())
  }, []);

  // const currentUserFilteredFriends = friends.filter(
  //   (friend) => friend.currentUserId === currentUser
  // );
  
  useEffect(() => {
    
    if (searchTerms !== "") {
      // If the search field is not blank, display matching Users
      
      const subset = friends.filter((friend) =>
        friend.user.name.toLowerCase().includes(searchTerms)
      );

      setFiltered(subset);
    } else {
      // If the search field is blank, display all friends
      setFiltered(friends);
   
    }
  }, [searchTerms, friends]);

  return (
    <>
    <section className="user-friend-buttons">
      <button onClick={() => history.push("/friends")}>My Friends</button>
      <button onClick={() => history.push("/users")}> All Users </button>
        </section>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredFriends.map((friend) => {
          
          return <FriendCard key={friend.id} friend={friend} />;
        })}
      </div>
    </>
  );
};
