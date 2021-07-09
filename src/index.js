import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './store';

const rerenderDomTree = (state) => {
  ReactDOM.render(
    <App
      store={state}
      changeNewTaskText={store.changeNewTaskText.bind(store)}
      addNewTaskText={store.addNewTaskText.bind(store)}
    />,
    document.getElementById('root')
  );
}

rerenderDomTree(store.getState());
store.subscribe(rerenderDomTree)