import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import taskListReducer from './task-list-reducer'
import authReducer from './auth-reducer'

const reducers = combineReducers({
  taskList: taskListReducer,
  auth: authReducer,
  form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store