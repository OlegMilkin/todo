import React from "react"
import TaskItem from '../TaskItem/TaskItem'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const TaskList = (props) => {

  const {taskList} = props;

  const tasksEl = taskList.map((task) => {
    return <TaskItem title={task.title} key={task.id} />
  })

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-12">
          <div className="list-group">
            {tasksEl}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5">
          <NewTaskForm
            newTaskText={props.newTaskText}
            changeNewTaskText={props.changeNewTaskText}
            addNewTaskText={props.addNewTaskText}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskList