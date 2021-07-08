import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, {changeNewTaskText, addNewTaskText, subscribe} from './store'

const rerenderDomTree = () => {
  ReactDOM.render(
    <App
      store={store}
      changeNewTaskText={changeNewTaskText}
      addNewTaskText={addNewTaskText}
    />,
    document.getElementById('root')
  );
}

rerenderDomTree();
subscribe(rerenderDomTree)