export const TIMER_BTN_CHANGE_VALUE = 'TIMER_BTN_CHANGE_VALUE';
export const VERIFICATION_CAN_ADD_TASK = 'VERIFICATION_CAN_ADD_TASK';
export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const VARIFICATION_INPUT = 'VARIFICATION_INPUT';
export const ADD_TASK = 'ADD_TASK';
export const FINISH_TASK = 'FINISH_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TAB_CHANGE_ACTIVE = 'TAB_CHANGE_ACTIVE';
export const MODAL_CONTROLER = 'MODAL_CONTROLER';
export const GENERETE_TASKS = 'GENERETE_TASKS';

export const timerBtnChangeValue = (newToggle) => ({
  type: TIMER_BTN_CHANGE_VALUE,
  payload: newToggle,
});

export const verificationCanAddTask = (status) => ({
  type: VERIFICATION_CAN_ADD_TASK,
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

export const addNewTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const finishTask = (task) => ({
  type: FINISH_TASK,
  payload: task,
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
  let randomStart = new Date().getTime() - 43200000;
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
