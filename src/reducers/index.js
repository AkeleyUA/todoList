import { combineReducers } from 'redux';
import tasksManager from './tasksManager';
import wievUI from './wievUI';

export default combineReducers({
  tasksManager,
  wievUI,
});
