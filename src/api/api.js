import * as axios from 'axios'
import { getFromLocalStorage } from '../helpers/local-storage'

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const tasksAPI = {
  getTasks() {
    return instance.get('tasksData')
      .then(response => response.data)
  },
  removeTask(taskId) {
    return instance.delete(`tasksData/${taskId}`)
      .then(response => response.data)
  },
  addTaskItem(taskText) {
    return instance.post('tasksData',
      {
        "title": taskText,
        "completed": false,
        "userId": Number(getFromLocalStorage('userId'))
      })
      .then(response => response.data)
  },
  updateTaskStatus(taskItem) {
    return instance.patch(`tasksData/${taskItem.id}`,
      {
        completed: !taskItem.completed
      })
      .then(response => response.data)
  },
  changeTaskTitle(id, titleText) {
    return instance.patch(`tasksData/${id}`,
      {
        title: titleText
      })
      .then(response => response.data)
  }
}

export const authAPI = {
  loginUser(email, password) {
    return instance.post('/login', {email, password})
      .then(response => response.data)
  },
  registerUser(email, password) {
    return instance.post('/register', {email, password})
    .then(response => response.data)
  },
  setHeaderToken() {
    let authToken = localStorage.getItem('token')
    instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  },
  unSetHeaderToken() {
      delete instance.defaults.headers.common['Authorization']
  }
}