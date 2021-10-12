import React from 'react'
import {connect} from 'react-redux'
import {
  getTasks,
  removeThunk,
  addTaskThunk,
  updateStatusThunk,
  changeTaskTitleThunk
} from '../../redux/task-list-reducer'
import TaskList from './TaskList'

class TaskListContainer extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    let promise = this.props.getTasks()
    Promise.all([promise]).then(() => {
      this.setState({
        isLoading: false
      })
    })
  }

  render() {
    const {
      taskList,
      removeThunk,
      addTaskThunk,
      updateStatusThunk,
      changeTaskTitleThunk,
      isLogged,
    } = this.props

    return (
      <TaskList
        taskList={taskList}
        removeThunk={removeThunk}
        addTaskThunk={addTaskThunk}
        updateStatusThunk={updateStatusThunk}
        changeTaskTitleThunk={changeTaskTitleThunk}
        isLogged={isLogged}
        isLoadding={this.state.isLoading}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    taskList: state.taskList.tasksData,
    isLogged: state.auth.isLogged
  }
};

export default connect(mapStateToProps, {
  getTasks,
  removeThunk,
  addTaskThunk,
  updateStatusThunk,
  changeTaskTitleThunk
})(TaskListContainer)
