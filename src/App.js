import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header/Header'
import Auth from './Auth/Auth'
import TaskListContainer from './TaskList/TaskListContainer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/'>
        <TaskListContainer/>
      </Route>
      <Route path='/auth'>
        <Auth/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
