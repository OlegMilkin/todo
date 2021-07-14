import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/store';

const rerenderDomTree = (state) => {
  ReactDOM.render(
    <App
      store={state}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
}

rerenderDomTree(store.getState());
store.subscribe(rerenderDomTree)