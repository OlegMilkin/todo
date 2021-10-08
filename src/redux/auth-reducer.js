import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { setToLocalStorage, removeFromLocalStorage, getFromLocalStorage } from '../helpers/local-storage'

const authPrefix = 'AUTH_SECTION'

const SET_AS_LOGGED = `${authPrefix}/SET_AS_LOGGINED`

let initialState = {
  isLogged: !!getFromLocalStorage('token')
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const registerThunk = (email, password) => {
  return async (dispatch) => {
    try {
      let response = await authAPI.registerUser(email, password)
      setToLocalStorage('token', `Bearer ${response.accessToken}`)
      setToLocalStorage('userId', response.user.id)
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
    removeFromLocalStorage('token')
    removeFromLocalStorage('userId')
    dispatch(toggleLoggedStatus(false))
  }
}

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      let response = await authAPI.loginUser(email, password)
      setToLocalStorage('token', `Bearer ${response.accessToken}`)
      setToLocalStorage('userId', response.user.id)
      authAPI.setHeaderToken()
      dispatch(toggleLoggedStatus(true))
    } catch (error) {
      dispatch(stopSubmit('login', {_error: 'Email or password not correct'}));
    }
  }
}

export default authReducer