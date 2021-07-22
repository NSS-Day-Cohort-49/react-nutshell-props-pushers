import React, { useEffect, useContext } from "react";
import { MessageCard } from "./MessageCard";
import { MessageContext } from "./MessageProvider";
import { useHistory } from "react-router";
import "./Message.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext);
  const history = useHistory();

  const sortedMessages = messages.sort((a, b) => {
    return parseInt(b.id) - parseInt(a.id);
  });

  useEffect(() => {
    console.log("useEffect: getMessages");
    getMessages();
  }, []);

  const handleSendNewMessage = () => {
    history.push("./messages/new");
  };

  return (
    <>
    <section className="message_list">
    <h1 className="message_header">Messages</h1>
      {console.log("MessageList - Render: messages", messages)}
      <button className="new_message_button"onClick={handleSendNewMessage}>Send New Message</button>
      {sortedMessages.map((message) => {
        return <MessageCard key={message.id} message={message} />;
      })}
      </section>
    </>
  );
};
