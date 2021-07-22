import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { UserCard } from "./UserCard";
import "./User.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

export const UserList = () => {
  const { searchTerms, users, getUsers } = useContext(UserContext);
  const [filteredUsers, setFiltered] = useState([]);
  // const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching Users
      const subset = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerms)
      );
     
      setFiltered(subset);
    } else {
      // If the search field is blank, display all Users
      setFiltered(users);
    }
  }, [searchTerms, users]);

  // const filteredUsers = Users.filter(User => User.currentUserId !== currentUser)
  // console.log( filteredUsers, currentUser )
  
  return (
    <>
    <section className="user-friend-buttons">
      <button onClick={() => history.push("/friends")}>My Friends</button>
      <button onClick={() => history.push("/users")}> All Users </button>
      </section>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredUsers.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
};
