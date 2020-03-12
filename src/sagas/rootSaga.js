import { takeEvery, call, put, select, all } from 'redux-saga/effects';
import {
  UPLOAD_LOCAL_STOREGE,
  DOWNLOAD_LOCAL_STOREGE,
  STARTED_TASK_CREATION,
  FINISHED_TASK_CREATION,
  putTasks,
} from '../actions/actions';


const getLocalStorege = () => (localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : []);
const removeStartTime = () => localStorage.removeItem('startLastTask');

function* uploadTasksWorker() {
  const tasks = yield call(getLocalStorege);
  yield put(putTasks(tasks));
}

function* downloadTasksWorker() {
  const tasks = yield select((state) => state.tasksManager.tasks);
  localStorage.removeItem('tasks');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function* uploadStartTimeWorker() {
  const start = yield select((state) => (
    state.tasksManager.tasks[state.tasksManager.tasks.length - 1].start
  ));
  localStorage.setItem('startLastTask', start);
}

function* removeStartTimeWorker() {
  yield call(removeStartTime);
}

function* uploadDataWatcher() {
  yield takeEvery(UPLOAD_LOCAL_STOREGE, uploadTasksWorker);
  yield takeEvery(STARTED_TASK_CREATION, uploadStartTimeWorker);
  yield takeEvery(FINISHED_TASK_CREATION, removeStartTimeWorker);
}

function* downloadDataWatcher() {
  yield takeEvery(DOWNLOAD_LOCAL_STOREGE, downloadTasksWorker);
}

export default function* rootSaga() {
  yield all([
    downloadDataWatcher(),
    uploadDataWatcher(),
  ]);
}
