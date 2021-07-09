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
  changeNewTaskText(text){
    this._state.taskList.newTaskText = text;
    this.rerenderDomTree(this._state);
  },
  addNewTaskText() {
    let taskText = this._state.taskList.newTaskText
    if (taskText === '') return;
    this._state.taskList.tasksData.push({
      id: 2,
      title: taskText,
    })
    this.changeNewTaskText('');
    this.rerenderDomTree(this._state);
  },
  subscribe(observer) {
    this.rerenderDomTree = observer
  }
}



//subscribe()
