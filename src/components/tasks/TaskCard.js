import React from 'react'
import "./Task.css"


export const TaskCard= ( {task} ) => {
	return(
		<>
		<section className="task" key="tasks">
			<h1>{task.task}</h1>
			<div>{task.user.name}</div>
		</section>

		</>
	)
}