import TaskList from "./TaskList";
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

let TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList)
export default TaskListContainer;