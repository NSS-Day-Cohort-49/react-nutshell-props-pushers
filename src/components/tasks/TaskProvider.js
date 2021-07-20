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

	const completeTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(task)
        })
          .then(getTasks)
      }

	const deleteTask = (id) => {
		return fetch(`http://localhost:8088/tasks/${id}`,
		{method: "DELETE"})
		.then(getTasks)
	}

	const updateTask = task => {
		return fetch(`http://localhost:8088/tasks/${task.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(task)
		})
		.then(getTasks)
	}
      
	
	return(
		<TaskContext.Provider value={{tasks, deleteTask, getTasks, addTask, getTaskById, updateTask, completeTask}}>
			{props.children}
		</TaskContext.Provider>
	)

}