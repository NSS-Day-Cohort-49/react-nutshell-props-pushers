import React, { useEffect, useContext } from "react";
import { MessageCard } from "./MessageCard";
import { MessageContext } from "./MessageProvider";
import { useHistory } from "react-router";
import "./Message.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext);
  const history = useHistory()

  useEffect(()=>{
	console.log("useEffect: getMessages");
	getMessages()
  },[])

  const handleSendNewMessage = ()=>{
        history.push("./messages/new")
  }

  return (
    <>

    {console.log("MessageList - Render: messages", messages)}
    <button onClick={handleSendNewMessage}>Send New Message</button>
      {messages.map((message) => {
        return <MessageCard key={message.id} message={message} />;
      
      })}
      
    </>
  );
};
