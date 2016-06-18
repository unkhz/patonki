// @flow
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from 'app/reducers';

export const createWithMiddleware = applyMiddleware(Thunk)(createStore);

export default (): Function => createWithMiddleware(rootReducer, {});
