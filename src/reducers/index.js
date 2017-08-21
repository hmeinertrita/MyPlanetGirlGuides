import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import username from './username';

export default combineReducers({
  user,
  runtime,
  username,
});
