// @flow
import {combineReducers} from 'redux';

export default function(reducers: Object): Function {
  return combineReducers(reducers);
};
