import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const TaskList = (
  {
    taskList,
    removeThunk,
    addTaskThunk,
    updateStatusThunk,
    changeTaskTitleThunk
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

  return (
    <div className="container">
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
            addTaskThunk={addTaskThunk}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskList