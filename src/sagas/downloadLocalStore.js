import { takeLatest, select } from 'redux-saga/effects';
import {
  DOWNLOAD_LOCAL_STOREGE,
} from '../reducers/tasksManager/actions';

function* downloadTasksWorker() {
  const tasks = yield select((state) => state.tasksManager.tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function* downloadDataWatcher() {
  yield takeLatest(DOWNLOAD_LOCAL_STOREGE, downloadTasksWorker);
}

export default downloadDataWatcher;
