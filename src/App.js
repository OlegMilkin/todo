import { BrowserRouter, Route } from 'react-router-dom';
import TaskList from './TaskList/TaskList'
import Header from './Header/Header'
import History from "./History/History"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/task-list' component={TaskList} />
      <Route path='/history' component={History} />
    </BrowserRouter>
  );
}

export default App;
