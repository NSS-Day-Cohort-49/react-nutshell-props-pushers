import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import "./Task.css"
import { TaskContext } from './TaskProvider'


export const TaskCard = ( {task} ) => {

	const { completeTask, deleteTask} = useContext(TaskContext)
  
	const history = useHistory();
  

	const handleCompleteTask = () => {
		  const taskCompleted = {
			id: task.id,
			task: task.task,
			date: task.date,
			userId: parseInt(sessionStorage.getItem("nutshell_user")),
			isCompleted: true
		}
		completeTask(taskCompleted)
		  .then(() => history.push(`/tasks`))
		}
	

	const taskDelete = () => {
		deleteTask(task.id)
	}
	  
	return(
		<>
		<section className="task" key="tasks">
			<h2 className="task_header">{task.task}</h2>
			<div className="date">Expected completion: {task.date}</div>
			<section className="buttons">
			<button className="btns" onClick={taskDelete}>Delete</button><button className="btns" onClick={() => {
				history.push(`/tasks/edit/${task.id}`)
			}}>Edit</button><div className="checked">
			Completed<input type="checkbox" value={task.isCompleted} onChange={handleCompleteTask}/>
			</div>
			</section>
		</section>

		</>
	)
}