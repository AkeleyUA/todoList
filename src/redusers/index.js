import { combineReducers } from 'redux';
import modalIsOpen from './modal';
import tabValue from './tabs';
import tasks from './tasks';
import timerBtnValue from './timer';
import canAddTask from './canAddTask';
import error from './error';

export default combineReducers({
  modalIsOpen,
  tabValue,
  tasks,
  timerBtnValue,
  canAddTask,
  error,
});
