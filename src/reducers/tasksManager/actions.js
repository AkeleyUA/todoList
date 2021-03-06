export const STARTED_TASK_CREATION = 'STARTED_TASK_CREATION';
export const FINISHED_TASK_CREATION = 'FINISHED_TASK_CREATION';
export const DELETE_TASK = 'DELETE_TASK';
export const PUT_TASKS = 'PUT_TASKS';
export const BEFORE_UNLOAD = 'BEFORE_UNLOAD';
export const LOAD_PAGE = 'LOAD_PAGE';

export const startedTaskCreationAction = (task) => ({
  type: STARTED_TASK_CREATION,
  payload: task,
});

export const finishedTaskCreationAction = (task) => ({
  type: FINISHED_TASK_CREATION,
  payload: task,
});

export const deleteTaskAction = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const putTasksAction = (tasks) => ({
  type: PUT_TASKS,
  payload: tasks,
});

export const loadPageAction = () => ({
  type: LOAD_PAGE,
});
