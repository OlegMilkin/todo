import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import TaskItem from '../TaskItem/TaskItem'
import Loader from '../common/Loader/loader'

const TaskList = (
  {
    taskList,
    removeThunk,
    updateStatusThunk,
    changeTaskTitleThunk,
    isLogged,
    isLoadding
  }
) => {

  let [tasks, setTasks] = useState(taskList)
  let [isCompletedFilterActive, setIsCompletedFilterActive] = useState(false)

  useEffect(() => {
    if(isCompletedFilterActive) {
      setTasks(taskList.filter((task) => {return task.completed}))
    } else {
      setTasks(taskList)
    }
  }, [taskList, isCompletedFilterActive])

  const sortHighToLow = () => {
    let sortedTasks = [...tasks].sort((a, b) => a.endData < b.endData ? 1 : -1)
    setTasks(sortedTasks)
  }

  const sortLowToHigh = () => {
    let sortedTasks = [...tasks].sort((a, b) => a.endData > b.endData ? 1 : -1)
    setTasks(sortedTasks)
  }

  const toggleCompletedStatus = () => {
    setIsCompletedFilterActive(!isCompletedFilterActive)
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
    <>
      <div className="row">
        <div className="col-lg-12">
          <button className="btn btn-success" onClick={ toggleCompletedStatus }>Completed</button>&nbsp;
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
              tasks.length > 0
                ?

                tasks.map((task) => {
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
                :
                <div className="mt-5 alert alert-secondary text-center">
                  You don't have any tasks
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskList