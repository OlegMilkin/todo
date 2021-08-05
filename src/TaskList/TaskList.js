import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const TaskList = (props) => {

  let tasksEl = props.taskList.map((task) => {
    return (
      <TaskItem
        title={task.title}
        key={task.id}
        removeTask={props.removeTask}
        id={task.id}
        isEditMode={task.isEditMode}
        enableEditMode={props.enableEditMode}
        disableEditMode={props.disableEditMode}
        afterEditText={props.afterEditText}
        changeEditTaskText={props.changeEditTaskText}
        changeTaskTitle={props.changeTaskTitle}
        isTaskCompleted={task.completed}
        changeCompletedStatus={props.changeCompletedStatus}
      />
    )
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
            addText={props.addText}
            updateText={props.updateText}
          />
        </div>
      </div>
    </div>
  )
  
}

export default TaskList