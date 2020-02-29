
import {
  TIMER_BTN_CHANGE_VALUE,
  VERIFICATION_CAN_ADD_TASK,
  CHANGE_ERROR_STATUS,
  VARIFICATION_INPUT,
  ADD_TASK,
  FINISH_TASK,
  DELETE_TASK,
  TAB_CHANGE_ACTIVE,
  MODAL_CONTROLER,
  GENERETE_TASKS,
} from './actions';

const startLastTaskLocal = JSON.parse(localStorage.getItem('startLastTask'));
const timerBtnValueLocal = localStorage.getItem('timerStatus');
const tasksLocal = JSON.parse(localStorage.getItem('tasks'));


const initialState = {
  timerBtnValue: (timerBtnValueLocal !== null ? timerBtnValueLocal : 'start'),
  canAddTask: false,
  error: false,
  tasks: (tasksLocal !== null ? tasksLocal : []),
  tabValue: 0,
  chartData: [],
  startLastTask: (startLastTaskLocal === null ? 0 : startLastTaskLocal),
  modalIsOpen: false,
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_BTN_CHANGE_VALUE:
      return { ...state, timerBtnValue: action.payload };
    case VERIFICATION_CAN_ADD_TASK:
      return { ...state, canAddTask: action.payload };
    case CHANGE_ERROR_STATUS:
      return { ...state, error: action.payload };
    case VARIFICATION_INPUT:
      return {
        ...state,
        error: action.error,
        canAddTask: action.canAddTask,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: action.payload.start,
          start: action.payload.start,
          end: 0,
          spend: 0,
          isCompleted: action.payload.isCompleted,
          hour: action.payload.hour,
        }],
        startLastTask: action.payload.start,
      };
    case FINISH_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === state.tasks.length - 1) {
            task.name = action.payload.name;
            task.end = action.payload.end;
            task.spend = action.payload.end - task.start;
            task.isCompleted = action.payload.isCompleted;
            return task;
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

export default rootReducer;
