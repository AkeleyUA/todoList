import { takeEvery, select } from 'redux-saga/effects';
import {
  DOWNLOAD_LOCAL_STOREGE, DELETE_TASK, PUT_TASKS,
} from '../reducers/tasksManager/actions';

function* downloadTasksWorker() {
  const tasks = yield select((state) => state.tasksManager.tasks);
  localStorage.removeItem('tasks');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function* downloadDataWatcher() {
  yield takeEvery(DOWNLOAD_LOCAL_STOREGE, downloadTasksWorker);
  yield takeEvery(DELETE_TASK, downloadTasksWorker);
  yield takeEvery(PUT_TASKS, downloadTasksWorker);
}

export default downloadDataWatcher;
