import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Auth from './components/Auth/Auth'
import TaskListContainer from './components/TaskList/TaskListContainer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/today'>
        <TaskListContainer/>
      </Route>
      <Route exact path='/next-7-days'>
        <TaskListContainer/>
      </Route>
      <Route exact path='/inbox'>
        <TaskListContainer/>
      </Route>
      <Route path='/auth'>
        <Auth/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
