import React from "react"
import TaskItem from '../TaskItem/TaskItem'

const TaskList = () => {

  const tasksData = [
    {
      id: 0,
      title: 'First task',
    },
    {
      id: 1,
      title: 'Second task',
    }
  ]

  const tasksEl = tasksData.map((task) => {
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
    </div>
  )
}

export default TaskList