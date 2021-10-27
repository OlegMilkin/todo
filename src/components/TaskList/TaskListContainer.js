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
import Sidebar from "../Sidebar/Sidebar";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

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
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <NewTaskForm
              addTaskThunk={addTaskThunk}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-sm-12">
              <TaskList
                taskList={taskList}
                removeThunk={removeThunk}
                addTaskThunk={addTaskThunk}
                updateStatusThunk={updateStatusThunk}
                changeTaskTitleThunk={changeTaskTitleThunk}
                isLogged={isLogged}
                isLoadding={this.state.isLoading}
              />
          </div>
        </div>
      </div>
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
