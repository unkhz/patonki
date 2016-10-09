// @flow
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './createStore';
import createReducer from './createReducer';
import styles from './index.scss';

import App, * as app from 'src/app';
import * as example from 'src/example';

/**
 * Mount App to DOM with redux store
 */
export function mount(rootNode: Node) {
  const store = createStore(createRootReducer());

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootNode
  );
}

/**
 * Unmount App from DOM
 */
export function unmount(rootNode: Node) {
  ReactDOM.unmountComponentAtNode(rootNode);
}

/**
 * Combine module reducers into a root reducer
 */
export function createRootReducer(): Function {
  return createReducer({
    example: example.reducer
  });
}

/**
 * Mount on load
 */
const rootNode = document.getElementById('main');
if (rootNode) {
  mount(rootNode);
}
