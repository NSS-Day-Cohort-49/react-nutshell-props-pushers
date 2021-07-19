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


	const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(getTasks)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}?_embed=users`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }
	
	return(
		<TaskContext.Provider value={{tasks, getTasks, addTask, getTaskById}}>
			{props.children}
		</TaskContext.Provider>
	)

}