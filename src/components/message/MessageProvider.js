import React, {useState, createContext} from 'react'
import "./Message.css"

export const MessageContext = createContext()

export const MessageProvider= (props) => {

	const {messages , setMessages}= useState([])

	const getMessages = () => {
		return fetch("http://localhost:8088/messages")
		.then(res => res.json())
		.then(setMessages)
	}

	return(
		<MessageContext.Provider value={{messages, getMessages}} >
			{props.children}
		</MessageContext.Provider>
	)
}