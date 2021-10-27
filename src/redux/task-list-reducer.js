import { tasksAPI } from '../api/api'
import { getFromLocalStorage } from '../helpers/local-storage'

const taskSectionPrefix = 'TASK_SECTION'

const SET_TASKS_DATA = `${taskSectionPrefix}/SET_TASKS_DATA`

let initialState = {
  tasksData: [],
}

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS_DATA:
      return {
        ...state,
        tasksData: [...action.tasks]
      }
    default:
      return state;
  }
}

export const setTasksDataAC = (tasks) => ({
  type: SET_TASKS_DATA, tasks
})

export const getTasks = (pathName) => {
  return async (dispatch) => {
    try {
      let response = await tasksAPI.getTasks(pathName)
      let userId = Number(getFromLocalStorage('userId'))
      let tasks = response.filter(task => task.userId === userId)
      dispatch(setTasksDataAC(tasks))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeThunk = (taskId) => {
  return async (dispatch) => {
    try {
      await tasksAPI.removeTask(taskId)
      dispatch(getTasks())
    } catch (error) {
      console.log(error)
    }
  }
}

export const addTaskThunk = (taskText, endData) => {
  return async (dispatch) => {
    try {
      const [month, day, year] = [endData.getMonth() + 1, endData.getDate(), endData.getFullYear()];
      await tasksAPI.addTaskItem(taskText, `${month}-${day}-${year}`)
      dispatch(getTasks())
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateStatusThunk = (taskItem) => {
  return async (dispatch) => {
    try {
      await tasksAPI.updateTaskStatus(taskItem)
      dispatch(getTasks())
    } catch (error) {
      console.log(error)
    }
  }
}

export const changeTaskTitleThunk = (id, titleText) => {
  return async (dispatch) => {
    try {
      await tasksAPI.changeTaskTitle(id, titleText)
      dispatch(getTasks())
    } catch (error) {
      console.log(error)
    }
  }
}

export default taskListReducer