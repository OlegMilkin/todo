import {createStore, combineReducers} from "redux";
import taskListReducer from "./task-list-reducer";

let reducers = combineReducers({
  taskList: taskListReducer
})

let store = createStore(reducers);

export default store;