import TaskList from "./TaskList";
import {connect} from "react-redux";
import {
  addText,
  updateText,
  removeTask,
  enableEditMode,
  disableEditMode,
  changeEditTaskText,
  changeTaskTitle,
  changeCompletedStatus,
  setTasksData,
  toggleLoader,
} from "../redux/task-list-reducer";

let mapStateToProps = (state) => {
  return {
    taskList: state.taskList.tasksData,
    newTaskText: state.taskList.newTaskText,
    afterEditText: state.taskList.afterEditText,
    isLoading: state.taskList.isLoading,
  }
};

let TaskListContainer = connect(
  mapStateToProps,
  {
    addText,
    updateText,
    removeTask,
    enableEditMode,
    disableEditMode,
    changeEditTaskText,
    changeTaskTitle,
    changeCompletedStatus,
    setTasksData,
    toggleLoader,
  }
  )(TaskList)
export default TaskListContainer;