import React from 'react'
import {Redirect} from 'react-router-dom'
import TaskItem from '../TaskItem/TaskItem'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import Loader from '../common/Loader/loader'


const TaskList = (
  {
    taskList,
    removeThunk,
    addTaskThunk,
    updateStatusThunk,
    changeTaskTitleThunk,
    isLogged,
    isLoadding
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

  const sortHighToLow = () => {
    console.log(taskList.sort((a, b) => a.endData > b.endData ? 1 : -1))
  }

  const sortLowToHigh = () => {
    console.log(taskList.sort((a, b) => a.endData < b.endData ? 1 : -1))
  }

  if (!isLogged) {
    return <Redirect to="/auth"/>
  }

  if (isLoadding) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mt-5">
            <Loader/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="dropdown mb-3 float-end">
            <button
              className="btn btn-secondary dropdown-toggle btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <span
                  className="dropdown-item"
                  onClick={ sortHighToLow }
                >
                  Data High to Low
                </span>
              </li>
              <li>
                <span
                  className="dropdown-item"
                  onClick={ sortLowToHigh }
                >
                  Data Low to High
                </span>
              </li>
            </ul>
          </div>
        </div>
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