import { bindActionCreators } from 'redux';

export const CHANGE_RUN_TIME = 'CHANGE_RUN_TIME';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const VARIFICATION_CAN_ADD_TASK = 'VARIFICATION_CAN_ADD_TASK';
export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const VARIFICATION_INPUT = 'VARIFICATION_INPUT';
export const TICK = 'TICK';
export const ADD_TASK = 'ADD_TASK';
export const FINISH_TASK = 'FINISH_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TAB_CHANGE_ACTIVE = 'TAB_CHANGE_ACTIVE';
export const MODAL_CONTROLER = 'MODAL_CONTROLER';
export const GENERETE_TASKS = 'GENERETE_TASKS';
// import store from '../../App'


export const changeRunTime = (newToggle) => ({
  // localStorage.setItem(store.getState().timeRunning, JSON.stringify(newToggle));
  type: CHANGE_RUN_TIME,
  payload: newToggle,
});

export const removeCounter = () => ({
  type: REMOVE_COUNTER,
  payload: 0,
});

export const verificationCanAddTask = (status) => ({
  type: VARIFICATION_CAN_ADD_TASK,
  payload: status,
});

export const changeErrorStatus = (status) => ({
  type: CHANGE_ERROR_STATUS,
  payload: status,
});

export const varificationInput = (event) => {
  let mustReturn = {};
  if (event.target.value !== '' && event.target.value !== ' ') {
    mustReturn = {
      type: VARIFICATION_INPUT,
      error: false,
      canAddTask: true,
    };
  } else {
    mustReturn = {
      type: VARIFICATION_INPUT,
      error: true,
      canAddTask: false,
    };
  }
  return mustReturn;
};

export const tick = (start) => ({
  type: TICK,
  start,
});

export const addNewTask = (task) => ({
  type: ADD_TASK,
  start: task.start,
  id: task.start,
  hour: task.hour,
});

export const finishTask = (task) => ({
  type: FINISH_TASK,
  isCompleted: task.isCompleted,
  name: task.name,
  end: task.end,
  spend: task.spend,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const changeTabActive = (value) => ({
  type: TAB_CHANGE_ACTIVE,
  value,
});


export const modalControler = (status) => ({
  type: MODAL_CONTROLER,
  modalIsOpen: status,
});

export const tasksGenerator = () => {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);
  let newTasksArray = [];
  let randomStart = new Date().getTime();
  for (let i = 0; i < random(10, 15); i++) {
    const randomSpend = random(600000, 5400000);
    const randomEnd = randomStart + randomSpend;
    newTasksArray = [...newTasksArray, {
      id: randomStart,
      start: randomStart,
      end: randomEnd,
      spend: randomSpend,
      isCompleted: true,
      hour: new Date(randomStart).getHours(),
      name: `random task №${i + 1}`,
    }];
    randomStart = randomEnd + random(0, 600000);
  }
  return {
    type: GENERETE_TASKS,
    newTasks: newTasksArray,
  };
};


export const mapStateToProps = (state) => ({
  timeRunning: state.timeRunning,
  counter: state.counter,
  canAddTask: state.canAddTask,
  error: state.error,
  tasks: state.tasks,
  tabValue: state.tabValue,
  modalIsOpen: state.modalIsOpen,
  isCompleted: state.isCompleted,
  startLastTask: state.startLastTask,
});

export const mapDispathToProps = (dispatch) => ({
  changeRunTime: bindActionCreators(changeRunTime, dispatch),
  removeCounter: bindActionCreators(removeCounter, dispatch),
  verificationCanAddTask: bindActionCreators(verificationCanAddTask, dispatch),
  changeErrorStatus: bindActionCreators(changeErrorStatus, dispatch),
  varificationInput: bindActionCreators(varificationInput, dispatch),
  tick: bindActionCreators(tick, dispatch),
  addNewTask: bindActionCreators(addNewTask, dispatch),
  finishTask: bindActionCreators(finishTask, dispatch),
  deleteTask: bindActionCreators(deleteTask, dispatch),
  changeTabActive: bindActionCreators(changeTabActive, dispatch),
  modalControler: bindActionCreators(modalControler, dispatch),
  tasksGenerator: bindActionCreators(tasksGenerator, dispatch),
});
