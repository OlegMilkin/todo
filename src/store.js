const ADD_NEW_TASK_TEXT = 'ADD-NEW-TASK-TEXT';
const CHANGE_NEW_TASK_TEXT = 'CHANGE-NEW-TASK-TEXT';

export const addNewTaskText = () => ({ type: ADD_NEW_TASK_TEXT });
export const changeNewTaskTextAction = (text) => ({ type: CHANGE_NEW_TASK_TEXT, text});

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
    if (action.type === ADD_NEW_TASK_TEXT) {
      let taskText = this._state.taskList.newTaskText
      if (taskText === '') return;
      this._state.taskList.tasksData.push({
        id: 2,
        title: taskText,
      })
      changeNewTaskTextAction('');
      this.rerenderDomTree(this._state);
    } else if (action.type === CHANGE_NEW_TASK_TEXT) {
      this._state.taskList.newTaskText = action.text;
      this.rerenderDomTree(this._state);
    }
  },
}

