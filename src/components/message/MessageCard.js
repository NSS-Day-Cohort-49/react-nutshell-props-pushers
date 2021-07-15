import React from "react";
import "./Message.css";

<<<<<<< HEAD
export const MessageCard = ({ message }) => {
  return (
    <>
      <section className="message">
        <h3 className="message_title">{message.title}</h3>
        <div>From: {message.user.name}</div>
        <div className="message_message">{message.message}</div>
      </section>
    </>
  );
};
=======

export const MessageCard = ({message}) => {
	return(
		<>
		<section className="message">
			<h3 className="message_title">{message.title}</h3>
			<div>From: {message.user.name}</div>
			<div className="message_message">{message.message}</div>
		</section>

		</>
	)
}
>>>>>>> main
