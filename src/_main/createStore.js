// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const defaultMiddlewares = [
  thunkMiddleware
];

export default function(rootReducer, middlewares = defaultMiddlewares, preloadedState = {}): Function {
  return createStore(rootReducer, preloadedState, composeEnhancer(applyMiddleware(
    ...middlewares,
  )));
}
