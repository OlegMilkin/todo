let rerenderDomTree = () => {}


let store = {
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
}

export const changeNewTaskText = (text) => {
  store.taskList.newTaskText = text;
  rerenderDomTree();
}

export const addNewTaskText = () => {
  let taskText = store.taskList.newTaskText
  if (taskText === '') return;
  store.taskList.tasksData.push({
    id: 2,
    title: taskText,
  })
  changeNewTaskText('');
  rerenderDomTree();
}

export default store;

export const subscribe = (observer) => {
  rerenderDomTree = observer
}

subscribe()
