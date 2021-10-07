import {tasksAPI, authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const taskSectionPrefix = 'TASK_SECTION'

const SET_TASKS_DATA = `${taskSectionPrefix}/SET_TASKS_DATA`
const SET_AS_LOGGED = `${taskSectionPrefix}/SET_AS_LOGGINED`

let initialState = {
  tasksData: [],
  isLogged: !!localStorage.getItem('token')
}

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS_DATA:
      return {
        ...state,
        tasksData: [...action.tasks]
      }
    case SET_AS_LOGGED:
      return {
        ...state,
        isLogged: action.status
      }
    default:
      return state;
  }
}

export const toggleLoggedStatus = (status) => ({
  type: SET_AS_LOGGED, status
})

export const setTasksDataAC = (tasks) => ({
  type: SET_TASKS_DATA, tasks
})

export const getTasks = () => {
  return async (dispatch) => {
    try {
      let response = await tasksAPI.getTasks()
      dispatch(setTasksDataAC(response))
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

export const addTaskThunk = (taskText) => {
  return async (dispatch) => {
    try {
      await tasksAPI.addTaskItem(taskText)
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

export const registerThunk = (email, password) => {
  return async (dispatch) => {
    try {
      let response = await authAPI.registerUser(email, password)
      authAPI.setStorageToken(response.accessToken)
      authAPI.setHeaderToken()
      dispatch(toggleLoggedStatus(true))
    } catch (error) {
      let msg = error.response.data
      dispatch(stopSubmit('registration', {_error: msg}));
    }
  }
}

export const logoutThunk = () => {
  return (dispatch) => {
    authAPI.unSetHeaderToken()
    authAPI.unSetStorageToken()
    dispatch(toggleLoggedStatus(false))
  }
}

export default taskListReducer