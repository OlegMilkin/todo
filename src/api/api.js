import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sZWcuaHRtQGdtYWlsLmNvbSIsImlhdCI6MTYzMzUzODI0MiwiZXhwIjoxNjMzNTQxODQyLCJzdWIiOiIyIn0.dm9SegM6k_uPNOzVY-pjaI5z7tfon33wy3FPh2CGcBY'
  },
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
        "completed": false
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
  registerUser(email, password) {
    return instance.post('/register', {email, password})
    .then(response => response.data)
  }
}