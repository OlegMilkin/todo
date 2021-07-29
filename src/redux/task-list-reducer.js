const ADD_NEW_TASK_TEXT = 'ADD-NEW-TASK-TEXT';
const CHANGE_NEW_TASK_TEXT = 'CHANGE-NEW-TASK-TEXT';
const REMOVE_TASK = 'REMOVE-TASK';
const ENABLE_EDIT_MODE = 'ENABLE-EDIT-MODE';
const DISABLE_EDIT_MODE = 'DISABLE-EDIT-MODE';
const CHANGE_EDIT_TASK_TEXT = 'CHANGE-EDIT-TASK-TEXT';
const CHANGE_TASK_TITLE = 'CHANGE-TASK-TITLE';

let initialState = {
  tasksData: [
    {
      id: 0,
      title: 'First task',
      isEditMode: false,
    },
    {
      id: 1,
      title: 'Second task',
      isEditMode: false,
    }
  ],
  newTaskText: '',
  afterEditText: '',
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
    case REMOVE_TASK:
      return {
        ...state,
        tasksData: state.tasksData.filter(task => task.id !== action.id)
      }
    case ENABLE_EDIT_MODE:
      return {
        ...state,
        tasksData:
          state.tasksData.map(
            task => {
              if (task.id === action.id) {
                return {
                  ...task,
                  isEditMode: true
                }
              }
              return {...task}
            })
      }
    case DISABLE_EDIT_MODE:
      return {
        ...state,
        tasksData: state.tasksData.map(
          task => {
            return {
              ...task,
              isEditMode: false
            }
          })
      }
    case CHANGE_EDIT_TASK_TEXT:
      return {
        ...state,
        afterEditText: action.text
      }
    case CHANGE_TASK_TITLE:
      return {
        ...state,
        tasksData:
          state.tasksData.map(
            task => {
              if (task.id === action.id) {
                return {
                  ...task,
                  title: state.afterEditText
                }
              }
              return {...task}
            })
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

export const removeTask = (id) => ({
  type: REMOVE_TASK, id
})

export const enableEditModeAction = (id) => ({
  type: ENABLE_EDIT_MODE, id
})

export const disableEditModeAction = (id) => ({
  type: DISABLE_EDIT_MODE, id
})

export const changeEditTaskText = (text) => ({
  type: CHANGE_EDIT_TASK_TEXT, text
})

export const changeTaskTitle = (id) => ({
  type: CHANGE_TASK_TITLE, id
})

export default taskListReducer;