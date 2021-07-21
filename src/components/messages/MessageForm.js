import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageProvider";
import { UserContext } from "../user/UserProvider";
import "./Message.css";
import { useHistory, useParams } from "react-router-dom";

export const MessageForm = () => {
  const { getMessageById, addMessage, updateMessage } =
    useContext(MessageContext);
  const { users, getUsers } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { messageId } = useParams();

  const history = useHistory();
  //   const [isLoading, setIsLoading] = useState(true);

  const [message, setMessage] = useState({
    title: "",
    message: "",
    recipientId: "",
    userId: parseInt(sessionStorage.getItem("nutshell_user")),
  });

  useEffect(() => {
    getUsers().then(() => {
      if (messageId) {
        getMessageById(messageId).then((message) => {
          setMessage(message);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
	always create a copy, make changes, and then set state.*/
    const newMessage = { ...message };
    /* Animal is an object with properties.
	Set the property to the new value
	using object bracket notation. */
    newMessage[event.target.id] = event.target.value;
    // update state
    setMessage(newMessage);
  };

  const handleSaveMessage = () => {
    if (messageId) {
      updateMessage(message).then(history.push("/messages"));
    } else {
      addMessage(message).then(history.push("/messages"));
    }
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
          value={message.title}
          onChange={handleControlledInputChange}
        ></input>

        <label htmlFor="message-title">Message:</label>
        <input
          className="message-message"
          required
          type="text"
          id="message"
          value={message.message}
          onChange={handleControlledInputChange}
        ></input>
        <label htmlFor="message-recipient">PRIVATE MESSAGE ONLY:</label>
        <select
          name="messageId"
          id="recipientId"
          value={message.recipientId}
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

        <button className="new-message-button" onClick={handleSaveMessage}>
          {messageId ? "Save Message" : "Add Message"}
        </button>
      </form>
    </>
  );
};
