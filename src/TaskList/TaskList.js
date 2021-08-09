import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import * as axios from 'axios';

class TaskList extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/tasksData')
      .then(response => {
        this.props.setTasksData(response.data)
        this.props.toggleLoader()
    })
  }

  render() {
    let tasksEl = this.props.taskList.map((task) => {
      return (
        <TaskItem
          title={task.title}
          key={task.id}
          removeTask={this.props.removeTask}
          id={task.id}
          isEditMode={task.isEditMode}
          enableEditMode={this.props.enableEditMode}
          disableEditMode={this.props.disableEditMode}
          afterEditText={this.props.afterEditText}
          changeEditTaskText={this.props.changeEditTaskText}
          changeTaskTitle={this.props.changeTaskTitle}
          isTaskCompleted={task.completed}
          changeCompletedStatus={this.props.changeCompletedStatus}
        />
      )
    })

    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="list-group"
              style={{paddingTop: '20px'}}
            >
              {
                this.props.isLoading
                ?
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-secondary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                : tasksEl
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <NewTaskForm
              newTaskText={this.props.newTaskText}
              addText={this.props.addText}
              updateText={this.props.updateText}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TaskList