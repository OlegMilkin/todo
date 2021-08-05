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
} from "../redux/task-list-reducer";
import React from "react";
import * as axios from "axios";
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
    changeCompletedStatus: (id) => {
      dispatch(changeCompletedStatus(id))
    },
    setTasksData: (tasks) => {
      dispatch(setTasksDataAC(tasks))
    }
  }
};

class TaskListAPI extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/tasksData')
      .then(response => {
        this.props.setTasksData(response.data)
      })
  }

  render() {
    return (
      <TaskList
        taskList={this.props.taskList}
        removeTask={this.props.removeTask}
        enableEditMode={this.props.enableEditMode}
        disableEditMode={this.props.disableEditMode}
        afterEditText={this.props.afterEditText}
        changeEditTaskText={this.props.changeEditTaskText}
        changeTaskTitle={this.props.changeTaskTitle}
        changeCompletedStatus={this.props.changeCompletedStatus}
        newTaskText={this.props.newTaskText}
        addText={this.props.addText}
        updateText={this.props.updateText}
      />
    )
  }
}


let TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListAPI)
export default TaskListContainer;