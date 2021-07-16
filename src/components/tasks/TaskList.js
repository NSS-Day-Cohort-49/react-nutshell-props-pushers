import React, {useContext, useEffect} from 'react'
import { TaskCard } from './TaskCard'
import "./Task.css"
import { TaskContext } from './TaskProvider'


export const TaskList= () => {

	const {tasks, getTasks } = useContext(TaskContext)

	useEffect(()=> {
		console.log("useEffect - getTasks")
		getTasks()
	},[])


	return(
		<>
		<div className="task_list">
			{console.log("TaskList - Render", tasks)}
		{tasks.map(task => {
			if (task.isComplete === false) {
			return(
				<TaskCard key={task.id} task={task} />
			)
		}})}
		</div>
		</>
	
	)
}

