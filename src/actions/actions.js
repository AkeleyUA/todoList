export const TIMER_BTN_CHANGE_VALUE = 'TIMER_BTN_CHANGE_VALUE';
export const VERIFICATION_CAN_ADD_TASK = 'VERIFICATION_CAN_ADD_TASK';
export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const VERIFICATION_INPUT = 'VERIFICATION_INPUT';
export const STARTED_TASK_CREATION = 'STARTED_TASK_CREATION';
export const FINISHED_TASK_CREATION = 'FINISHED_TASK_CREATION';
export const DELETE_TASK = 'DELETE_TASK';
export const TAB_CHANGE_ACTIVE = 'TAB_CHANGE_ACTIVE';
export const MODAL_CONTROLER = 'MODAL_CONTROLER';
export const GENERETE_TASKS = 'GENERETE_TASKS';

export const timerBtnChangeValue = (newToggle) => ({
  type: TIMER_BTN_CHANGE_VALUE,
  payload: newToggle,
});

export const changeErrorStatus = (status) => ({
  type: CHANGE_ERROR_STATUS,
  payload: status,
});

export const varificationInput = (status) => ({
  type: VERIFICATION_INPUT,
  payload: status,
});

export const startedTaskCreation = (task) => ({
  type: STARTED_TASK_CREATION,
  payload: task,
});

export const finishedTaskCreation = (task) => ({
  type: FINISHED_TASK_CREATION,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const changeTabActive = (value) => ({
  type: TAB_CHANGE_ACTIVE,
  payload: value,
});


export const modalControler = (status) => ({
  type: MODAL_CONTROLER,
  payload: status,
});

export const tasksGenerator = (tasks) => ({
  type: GENERETE_TASKS,
  payload: tasks,
});