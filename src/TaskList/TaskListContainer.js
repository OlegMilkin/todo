import TaskList from "./TaskList";
import {connect} from "react-redux";
import {addNewTaskText, changeNewTaskTextAction} from "../redux/task-list-reducer";

let mapStateToProps = (state) => {
  return {
    taskList: state.taskList.tasksData,
    newTaskText: state.taskList.newTaskText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addText: () => {
      dispatch(addNewTaskText())
    },
    updateText: (text) => {
      dispatch(changeNewTaskTextAction(text))
    }
  }
};

let TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList)
export default TaskListContainer;