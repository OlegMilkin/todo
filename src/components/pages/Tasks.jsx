import React, {useEffect, useState} from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Sidebar from "../Sidebar/Sidebar";
import TaskList from "../TaskList/TaskList";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../../redux/task-list-reducer";

const Tasks = () => {

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const taskList = useSelector((state) => state.taskList.tasksData)

  useEffect(() => {
    let promise = dispatch(getTasks())
    Promise.all([promise]).then(() => {
      setIsLoading(false)
    })
  },[dispatch])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-5">
          <NewTaskForm />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <Sidebar/>
        </div>
        <div className="col-lg-9 col-sm-12">
          <TaskList
            taskList={taskList}
            isLoadding={isLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default  Tasks