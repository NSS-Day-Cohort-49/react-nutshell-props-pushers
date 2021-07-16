import React, {createContext, useState} from 'react'
import "./Task.css"


export const TaskContext = createContext()

export const TaskProvider= (props) => {

	const [tasks , setTasks]= useState([])

	const getTasks = () => {
		return fetch("http://localhost:8088/tasks?_expand=user")
		.then((res) => res.json())
		.then(setTasks)
	}
	console.log(tasks)
	
	return(
		<TaskContext.Provider value={{tasks, getTasks}}>
			{props.children}
		</TaskContext.Provider>
	)

}