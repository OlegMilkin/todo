import React from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Auth from './components/pages/Auth'
import Tasks from './components/pages/Tasks'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/'>
        <Redirect to='/today' />
      </Route>
      <Route path='/today' component={Tasks} />
      <Route path='/next-7-days' component={Tasks} />
      <Route path='/inbox' component={Tasks} />
      <Route path='/auth' component={Auth} />
    </BrowserRouter>
  );
}

export default App;
