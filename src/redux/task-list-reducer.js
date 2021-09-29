import {tasksAPI} from '../api/api'

const ADD_NEW_TASK_TEXT = 'ADD-NEW-TASK-TEXT';
const CHANGE_NEW_TASK_TEXT = 'CHANGE-NEW-TASK-TEXT';
const REMOVE_TASK = 'REMOVE-TASK';
const ENABLE_EDIT_MODE = 'ENABLE-EDIT-MODE';
const DISABLE_EDIT_MODE = 'DISABLE-EDIT-MODE';
const CHANGE_EDIT_TASK_TEXT = 'CHANGE-EDIT-TASK-TEXT';
const CHANGE_TASK_TITLE = 'CHANGE-TASK-TITLE';
//const CHANGE_COMPLETED_STATUS = 'CHANGE-COMPLETED-STATUS';
const SET_TASKS_DATA = 'SET_TASKS_DATA';

let initialState = {
  tasksData: [],
  newTaskText: '',
  afterEditText: '',
}

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK_TEXT:
      let taskText = state.newTaskText
      if (taskText === '') return;

      return {
        ...state,
        tasksData: [...state.tasksData, {id: 2, title: taskText}]
      }
    case CHANGE_NEW_TASK_TEXT:
      return {
        ...state,
        newTaskText: action.text
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasksData: state.tasksData.filter(task => task.id !== action.id)
      }
    case ENABLE_EDIT_MODE:
      return {
        ...state,
        tasksData:
          state.tasksData.map(
            task => {
              if (task.id === action.id) {
                return {
                  ...task,
                  isEditMode: true
                }
              }
              return {...task}
            })
      }
    case DISABLE_EDIT_MODE:
      return {
        ...state,
        tasksData: state.tasksData.map(
          task => {
            return {
              ...task,
              isEditMode: false
            }
          })
      }
    case CHANGE_EDIT_TASK_TEXT:
      return {
        ...state,
        afterEditText: action.text
      }
    case CHANGE_TASK_TITLE:
      return {
        ...state,
        tasksData:
          state.tasksData.map(
            task => {
              if (task.id === action.id) {
                return {
                  ...task,
                  title: state.afterEditText
                }
              }
              return {...task}
            })
      }
    // case CHANGE_COMPLETED_STATUS:
    //   return {
    //     ...state,
    //     tasksData: state.tasksData.map(task => {
    //       if (task.id === action.id) {
    //         return {
    //           ...task,
    //           completed: !task.completed
    //         }
    //       }
    //       return {...task}
    //     })
    //   }
    case SET_TASKS_DATA:
      return {
        ...state,
        tasksData: [...action.tasks]
      }
    default:
      return state;
  }
}

export const addNewTaskText = () => ({
  type: ADD_NEW_TASK_TEXT
});
export const changeNewTaskTextAction = (text) => ({
  type: CHANGE_NEW_TASK_TEXT, text
});

export const removeTask = (id) => ({
  type: REMOVE_TASK, id
})

export const enableEditModeAction = (id) => ({
  type: ENABLE_EDIT_MODE, id
})

export const disableEditModeAction = (id) => ({
  type: DISABLE_EDIT_MODE, id
})

export const changeEditTaskText = (text) => ({
  type: CHANGE_EDIT_TASK_TEXT, text
})

export const changeTaskTitle = (id) => ({
  type: CHANGE_TASK_TITLE, id
})

// export const changeCompletedStatus = (id) => ({
//   type: CHANGE_COMPLETED_STATUS, id
// })

export const setTasksDataAC = (tasks) => ({
  type: SET_TASKS_DATA, tasks
})

export const getTasks = () => {
  return async (dispatch) => {
    try {
      let response = await tasksAPI.getTasks()
      dispatch(setTasksDataAC(response))
    } catch(error) {
      console.log(error)
    }
  }
}

export const removeThunk = (taskId) => {
  return async (dispatch) => {
    await tasksAPI.removeTask(taskId)
    dispatch(getTasks())
  }
}

export const addTaskThunk = (taskText) => {
  return async (dispatch) => {
    await tasksAPI.addTaskItem(taskText)
    dispatch(getTasks())
  }
}

export const updateStatusThunk = (taskItem) => {
  return async (dispatch) => {
    await tasksAPI.updateTaskStatus(taskItem)
    dispatch(getTasks())
  }
}

export default taskListReducer;