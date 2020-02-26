import { createStore } from 'redux';
import {
  CHANGE_RUN_TIME,
  REMOVE_COUNTER,
  VARIFICATION_CAN_ADD_TASK,
  CHANGE_ERROR_STATUS,
  VARIFICATION_INPUT,
  TICK,
  ADD_TASK,
  FINISH_TASK,
  DELETE_TASK,
  TAB_CHANGE_ACTIVE,
  MODAL_CONTROLER,
  GENERETE_TASKS,
} from './actions';

const checkLocal = JSON.parse(localStorage.getItem('state'));

const initialState = (
  checkLocal !== null
    ? checkLocal
    : {
      timeRunning: 'start',
      counter: 0,
      canAddTask: false,
      error: false,
      tasks: [],
      tabValue: 0,
      chartData: [],
      startLastTask: 0,
      modalIsOpen: false,
    }
);


const rootReducer = (state = initialState, action) => {
  localStorage.setItem('state', JSON.stringify(state));
  switch (action.type) {
    case CHANGE_RUN_TIME:
      return { ...state, timeRunning: action.payload };
    case REMOVE_COUNTER:
      return { ...state, counter: action.payload };
    case VARIFICATION_CAN_ADD_TASK:
      return { ...state, canAddTask: action.payload };
    case CHANGE_ERROR_STATUS:
      return { ...state, error: action.payload };
    case VARIFICATION_INPUT:
      return {
        ...state,
        error: action.error,
        canAddTask: action.canAddTask,
      };
    case TICK:
      return { ...state, counter: new Date().getTime() - action.start };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: action.id,
          start: action.start,
          end: 0,
          spend: 0,
          isCompleted: action.isCompleted,
          hour: action.hour,
        }],
        startLastTask: action.start,
      };
    case FINISH_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => {
          if (index === state.tasks.length - 1) {
            const newTask = task;
            newTask.name = action.name;
            newTask.end = action.end;
            newTask.spend = action.spend;
            newTask.isCompleted = action.isCompleted;
            return newTask;
          }
          return task;
        }),
      };
    case DELETE_TASK:
      return {
        ...state, tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case TAB_CHANGE_ACTIVE:
      return {
        ...state, tabValue: action.value,
      };
    case MODAL_CONTROLER:
      return {
        ...state, modalIsOpen: action.modalIsOpen,
      };
    case GENERETE_TASKS:
      return {
        ...state, tasks: action.newTasks,
      };
    default: return state;
  }
};

export default createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
