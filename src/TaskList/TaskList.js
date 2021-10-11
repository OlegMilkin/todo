import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import { Redirect } from "react-router-dom";

const TaskList = (
  {
    taskList,
    removeThunk,
    addTaskThunk,
    updateStatusThunk,
    changeTaskTitleThunk,
    isLogged
  }
) => {

  let tasksEl = taskList.map((task) => {
    return (
      <TaskItem
        taskItem={task}
        key={task.id}
        title={task.title}
        isTaskCompleted={task.completed}
        removeThunk={removeThunk}
        updateStatusThunk={updateStatusThunk}
        changeTaskTitleThunk={changeTaskTitleThunk}
      />
    )
  })

  if (!isLogged) {
    return <Redirect to="/auth" />
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="list-group">
            {
              tasksEl.length > 0
                ?
                tasksEl
                :
                <div className="mt-5 alert alert-secondary text-center">
                  You don't have any tasks
                </div>
            }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5">
          <NewTaskForm
            addTaskThunk={addTaskThunk}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskList