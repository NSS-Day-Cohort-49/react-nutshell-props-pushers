import React from 'react'
import "./Task.css"


export const TaskCard= ( {task} ) => {
	return(
		<>
		<section className="task" key="tasks">
			<h1 className="task_header">{task.task}</h1>
			<div className="date">Expected completion: {task.date}</div>
			<div>Assigned to: {task.user.name}</div>
		</section>

		</>
	)
}