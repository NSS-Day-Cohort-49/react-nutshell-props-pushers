import React from 'react'
import "./Message.css"


export const MessageCard = ({message}) => {
	return(
		<>
		<section className="message">
			<h3 className="message_title">{message.title}</h3>
			<di>From: {message.user.name}</di>
			<div className="message_message">{message.message}</div>
		</section>

		</>
	)
}