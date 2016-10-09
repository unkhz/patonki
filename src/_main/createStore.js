// @flow
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

export const createWithMiddleware = applyMiddleware(Thunk)(createStore);

export default function(rootReducer, initialState = {}): Function {
  return createWithMiddleware(rootReducer, initialState);
}
