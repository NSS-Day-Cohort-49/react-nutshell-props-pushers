import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageProvider";
import { UserContext } from "../user/UserProvider";
import "./Message.css";
import { useHistory } from "react-router-dom";

export const MessageForm = () => {

  const { addMessage } = useContext(MessageContext);
  const { users, getUsers } = useContext(UserContext);

  const history = useHistory()

  const [message, setMessage] = useState({
	  title: "",
	  message: "",
	  recipientId:"",
	  userId:parseInt(sessionStorage.getItem("nutshell_user"))
  })

  useEffect(() => {
    getUsers();
  }, []);
 
  const handleControlledInputChange = (event) => {
	/* When changing a state object or array,
	always create a copy, make changes, and then set state.*/
	const newMessage = { ...message }
	/* Animal is an object with properties.
	Set the property to the new value
	using object bracket notation. */
	newMessage[event.target.id] = event.target.value
	// update state
	setMessage(newMessage)
	
      }

  const handleNewMessage = () => {
		
   addMessage(message)
   .then(history.push("/messages"));
  };

  return (
    <>
      <form className="form">
        <label htmlFor="message-title">Title:</label>
        <input
          className="message-title"
          required
          type="text"
          id="title"
	  onChange={handleControlledInputChange}
        ></input>

        <label htmlFor="message-title">Message:</label>
        <input
          className="message-message"
          required
          type="text"
          id="message" 
	  onChange={handleControlledInputChange}
        ></input>
	<label htmlFor="message-recipient">Select a Recipient</label>
        <select
          value={users.id}
          name="messageId"
          id="recipientId"
          className="form-control"
	  onChange={handleControlledInputChange}
        >
          <option value="0">Select a Recipient</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>

        <button className="new-message-button" onClick={handleNewMessage}>
          Submit Message
        </button>
      </form>
    </>
  );
};
