import { BrowserRouter, Route } from 'react-router-dom';
import TaskList from './TaskList/TaskList'
import Header from './Header/Header'
import History from "./History/History"

function App(props) {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/'>
        <TaskList
          taskList={props.store.taskList.tasksData}
          newTaskText={props.store.taskList.newTaskText}
          changeNewTaskText={props.changeNewTaskText}
          addNewTaskText={props.addNewTaskText}
        />
      </Route>
      <Route path='/history'>
        <History/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
