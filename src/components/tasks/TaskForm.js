import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { TaskContext } from "./TaskProvider";
import "./Task.css"



export const TaskForm = () => {
  const { addTask, getTaskById, updateTask } = useContext(TaskContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [task, setTask] = useState({})

  const { taskId } = useParams();
  const history = useHistory();



  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newTask = { ...task }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newTask[event.target.id] = event.target.value
    // update state
    setTask(newTask)
  }

  const handleClickSaveTask = () => {
    if (task.task === undefined || task.date === undefined) {
        window.alert("Please complete the form")
    } else if (taskId) {
			updateTask({
			id: task.id,
			task: task.task,
			date: task.date,
			userId: parseInt(sessionStorage.getItem("nutshell_user")),
			isCompleted: false
			})
		.then(() => history.push("/tasks"))
		}
    else {
        const newTask = {
          task: task.task,
          date: task.date,
          userId: parseInt(sessionStorage.getItem("nutshell_user")),
          isCompleted: false
      }
      addTask(newTask)
        .then(() => history.push("/tasks"))
      }
    }

  useEffect(() => {
    if (taskId) {
        getTaskById(taskId)
            .then(task => {
                setTask(task)
                setIsLoading(false)
            })
    } else {
        setIsLoading(false)
    }
}, [])

return (
        <form className="taskForm">
            <h1 className="taskForm__title task_header">{taskId ? "Update Task" : "New task"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="task" required autoFocus className="form-control" placeholder="Enter a new task" value={task.task} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Expected Completion Date: </label>
                    <input type="date" id="date" required autoFocus className="form-control" placeholder="Enter task date" value={task.date} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveTask()
                }
            }>
                 {taskId ? "Update Task" : "Save Task"}
            </button>{taskId ? <button className="btns" onClick={() => history.push("/tasks")}>Cancel</button> :<button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
