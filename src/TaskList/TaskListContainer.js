import {connect} from "react-redux";
import {
  addNewTaskText,
  changeNewTaskTextAction,
  removeTask,
  enableEditModeAction,
  disableEditModeAction,
  changeEditTaskText,
  changeTaskTitle,
  changeCompletedStatus,
  setTasksDataAC,
  getTasks,
} from "../redux/task-list-reducer";
import {removeThunk, addTaskThunk, updateStatusThunk} from '../redux/task-list-reducer';
import React from "react";
import TaskList from "./TaskList";

let mapStateToProps = (state) => {
  return {
    taskList: state.taskList.tasksData,
    newTaskText: state.taskList.newTaskText,
    afterEditText: state.taskList.afterEditText,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addText: () => {
      dispatch(addNewTaskText())
    },
    updateText: (text) => {
      dispatch(changeNewTaskTextAction(text))
    },
    removeTask: (id) => {
      dispatch(removeTask(id))
    },
    enableEditMode: (id) => {
      dispatch(enableEditModeAction(id))
    },
    disableEditMode: () => {
      dispatch(disableEditModeAction())
    },
    changeEditTaskText: (text) => {
      dispatch(changeEditTaskText(text))
    },
    changeTaskTitle: (id) => {
      dispatch(changeTaskTitle(id))
    },
    // changeCompletedStatus: (id) => {
    //   dispatch(changeCompletedStatus(id))
    // },
    setTasksData: (tasks) => {
      dispatch(setTasksDataAC(tasks))
    },
    getTasks: () => {
      dispatch(getTasks())
    },
    removeThunk: (id) => {
      dispatch(removeThunk(id))
    },
    addTaskThunk: (taskText) => {
      dispatch(addTaskThunk(taskText))
    },
    updateStatusThunk: (taskItem, status) => {
      dispatch(updateStatusThunk(taskItem, status))
    },
  }
};

class TaskListAPI extends React.Component {

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    return (
      <TaskList
        taskList={this.props.taskList}
        removeThunk={this.props.removeThunk}
        enableEditMode={this.props.enableEditMode}
        disableEditMode={this.props.disableEditMode}
        afterEditText={this.props.afterEditText}
        changeEditTaskText={this.props.changeEditTaskText}
        changeTaskTitle={this.props.changeTaskTitle}
        //changeCompletedStatus={this.props.changeCompletedStatus}
        newTaskText={this.props.newTaskText}
        updateText={this.props.updateText}
        addTaskThunk={this.props.addTaskThunk}
        updateStatusThunk={this.props.updateStatusThunk}
      />
    )
  }
}


let TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListAPI)
export default TaskListContainer;