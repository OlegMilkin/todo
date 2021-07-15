import taskListReducer from "./task-list-reducer";

export let store = {
  _state: {
    taskList: {
      tasksData: [
        {
          id: 0,
          title: 'First task',
        },
        {
          id: 1,
          title: 'Second task',
        }
      ],
      newTaskText: ''
    }
  },
  getState() {
    return this._state;
  },
  rerenderDomTree(){},
  subscribe(observer) {
    this.rerenderDomTree = observer
  },
  dispatch(action) {
    this._state.taskList = taskListReducer(this._state.taskList, action);
    this.rerenderDomTree(this._state);
  },
}

