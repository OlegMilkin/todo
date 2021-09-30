import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header/Header'
import History from './History/History'
import TaskListContainer from './TaskList/TaskListContainer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/'>
        <TaskListContainer/>
      </Route>
      <Route path='/history'>
        <History/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
