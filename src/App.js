import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Auth from './components/Auth/Auth'
import Tasks from './components/pages/Tasks'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/today' component={Tasks} />
      <Route exact path='/next-7-days' component={Tasks} />
      <Route exact path='/inbox' component={Tasks} />
      <Route path='/auth' component={Auth} />
    </BrowserRouter>
  );
}

export default App;
