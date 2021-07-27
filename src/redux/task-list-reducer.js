const ADD_NEW_TASK_TEXT = 'ADD-NEW-TASK-TEXT';
const CHANGE_NEW_TASK_TEXT = 'CHANGE-NEW-TASK-TEXT';

let initialState = {
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

export default taskListReducer;