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
      changeTaskTitleThunk
    } = this.props

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
