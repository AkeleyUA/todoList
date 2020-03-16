export const STARTED_TASK_CREATION = 'STARTED_TASK_CREATION';
export const FINISHED_TASK_CREATION = 'FINISHED_TASK_CREATION';
export const DELETE_TASK = 'DELETE_TASK';
export const PUT_TASKS = 'PUT_TASKS';
export const UPLOAD_LOCAL_STOREGE = 'UPLOAD_LOCAL_STOREGE';
export const DOWNLOAD_LOCAL_STOREGE = 'DOWNLOAD_LOCAL_STOREGE';
export const VERIFICATION_INPUT = 'VERIFICATION_INPUT';

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

export const uploadLocalStoreAction = () => ({
  type: UPLOAD_LOCAL_STOREGE,
});

export const downloadLocalStoreAction = () => ({
  type: DOWNLOAD_LOCAL_STOREGE,
});

export const verificationInputAction = (status) => ({
  type: VERIFICATION_INPUT,
  payload: status,
});
