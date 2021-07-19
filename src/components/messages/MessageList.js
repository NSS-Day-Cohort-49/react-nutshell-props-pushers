import React, { useEffect, useContext } from "react";
import { MessageCard } from "./MessageCard";
import { MessageContext } from "./MessageProvider";
import "./Message.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext);

  useEffect(()=>{
	console.log("useEffect: getMessages");
	getMessages()
  },[])

  return (
    <>

    {console.log("MessageList - Render: messages", messages)}
      {messages.map((message) => {
        return <MessageCard key={message.id} message={message} />;
      
      })}
      
    </>
  );
};
