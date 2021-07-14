const ADD_NEW_TASK_TEXT = 'ADD-NEW-TASK-TEXT';
const CHANGE_NEW_TASK_TEXT = 'CHANGE-NEW-TASK-TEXT';

const taskListReducer = (state, action) => {
  if (action.type === ADD_NEW_TASK_TEXT) {
    let taskText = state.newTaskText
    if (taskText === '') return;
    state.push({
      id: 2,
      title: taskText,
    })
    //changeNewTaskTextAction('');
  } else if (action.type === CHANGE_NEW_TASK_TEXT) {
    state.newTaskText = action.text;
  }

  return state;
}

export const addNewTaskText = () => ({ type: ADD_NEW_TASK_TEXT });
export const changeNewTaskTextAction = (text) => ({ type: CHANGE_NEW_TASK_TEXT, text});

export default taskListReducer;