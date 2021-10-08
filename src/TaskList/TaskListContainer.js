import React from 'react'
import {connect} from 'react-redux'
import {
  getTasks,
  removeThunk,
  addTaskThunk,
  updateStatusThunk,
  changeTaskTitleThunk
} from '../redux/task-list-reducer'
import TaskList from './TaskList'
import { Redirect } from 'react-router-dom'

class TaskListContainer extends React.Component {

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    const {
      taskList,
      removeThunk,
      addTaskThunk,
      updateStatusThunk,
      changeTaskTitleThunk,
      isLogged
    } = this.props

    if (!isLogged) {
      return <Redirect to="/auth" />
    }

    return (
      <TaskList
        taskList={taskList}
        removeThunk={removeThunk}
        addTaskThunk={addTaskThunk}
        updateStatusThunk={updateStatusThunk}
        changeTaskTitleThunk={changeTaskTitleThunk}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    taskList: state.taskList.tasksData,
  }
};

export default connect(mapStateToProps, {
  getTasks,
  removeThunk,
  addTaskThunk,
  updateStatusThunk,
  changeTaskTitleThunk
})(TaskListContainer)
