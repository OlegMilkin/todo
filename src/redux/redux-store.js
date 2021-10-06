import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import taskListReducer from './task-list-reducer'

const reducers = combineReducers({
  taskList: taskListReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store