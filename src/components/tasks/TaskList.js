import React, {useContext, useEffect} from 'react'
import { TaskCard } from './TaskCard'
import "./Task.css"
import { TaskContext } from './TaskProvider'
import { useHistory } from 'react-router'

export const TaskList= () => {

	const {tasks, getTasks } = useContext(TaskContext)
	const history = useHistory()

	useEffect(()=> {
		console.log("useEffect - getTasks")
		getTasks()
	},[])


	return(
		<>
		<div className="newtaskbtn"><button className="btns" onClick={() => {history.push("/tasks/create")}}>
			Got a New Task?</button></div>
			<section className="task_group">
				<div className="task_list">
					{console.log("TaskList - Render", tasks)}
				{tasks.map(task => {
					if (task.isCompleted === false && task.userId === parseInt(sessionStorage.getItem("nutshell_user"))) {
					return(
						<TaskCard key={task.id} task={task} />
					)
				}})}
				</div>
			</section>
		</>
	
	)
}

