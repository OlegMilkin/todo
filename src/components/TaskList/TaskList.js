import React, {useEffect, useState} from 'react'
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

  let [tasks, setTasks] = useState(taskList)
  let [searchString, setSearchString] = useState('')

  useEffect(() => {
    setTasks(taskList)
  }, [taskList])

  const sortHighToLow = () => {
    let sortedTasks = [...tasks].sort((a, b) => a.endData < b.endData ? 1 : -1)
    setTasks(sortedTasks)
  }

  const sortLowToHigh = () => {
    let sortedTasks = [...tasks].sort((a, b) => a.endData > b.endData ? 1 : -1)
    setTasks(sortedTasks)
  }

  const filterCompleted = () => {
    let filteredTasks = tasks.filter((task) => {return task.completed})
    setTasks(filteredTasks)
  }

  const resetFilters = () => {
    setTasks(taskList)
    setSearchString('')
  }

  const onSearchChange = () => {
    let searchValue = searchInput.current.value
    setSearchString(searchValue)
    sortIncludedString(searchValue)
  }

  const sortIncludedString = (value) => {

    let filteredTasks = tasks.filter((task) => {
      return task.title.toLowerCase().includes(value.toLowerCase())
    })

    setTasks(filteredTasks)
  }

  let searchInput = React.createRef();

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
        <div className="col-lg-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Find some task"
            value={ searchString }
            onChange={ onSearchChange }
            ref={ searchInput }
          />
        </div>
        <div className="col-lg-12">
          <button className="btn btn-success" onClick={ filterCompleted }>Completed</button>&nbsp;
          <button className="btn btn-success" onClick={ resetFilters }>Reset</button>
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