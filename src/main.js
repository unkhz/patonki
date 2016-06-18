// @flow
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import createStore from './store';
import './main.scss';

export default function render(rootNode: Node) {
  ReactDOM.render(
    <Provider store={ createStore() }>
      <App />
    </Provider>,
    rootNode
  );
}

const rootNode = document.getElementById('main');
if (rootNode) {
  render(rootNode);
}
