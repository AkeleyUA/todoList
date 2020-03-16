import {
  takeEvery,
  call,
  put,
  select,
} from 'redux-saga/effects';
import {
  UPLOAD_LOCAL_STOREGE,
  STARTED_TASK_CREATION,
  FINISHED_TASK_CREATION,
  putTasksAction,
} from '../reducers/tasksManager/actions';

const getLocalStorege = () => (localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : []);
const removeStartTime = () => localStorage.removeItem('startLastTask');

function* removeStartTimeWorker() {
  yield call(removeStartTime);
}

function* uploadStartTimeWorker() {
  const tasks = yield select((state) => state.tasksManager.tasks);
  const start = yield select((state) => (
    state.tasksManager.tasks[state.tasksManager.tasks.length - 1].start
  ));
  localStorage.setItem('startLastTask', start);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function* uploadTasksWorker() {
  const tasks = yield call(getLocalStorege);
  yield put(putTasksAction(tasks));
}

function* uploadDataWatcher() {
  yield takeEvery(UPLOAD_LOCAL_STOREGE, uploadTasksWorker);
  yield takeEvery(STARTED_TASK_CREATION, uploadStartTimeWorker);
  yield takeEvery(FINISHED_TASK_CREATION, removeStartTimeWorker);
}

export default uploadDataWatcher;
