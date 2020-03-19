import {
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';
import {
  STARTED_TASK_CREATION,
  FINISHED_TASK_CREATION,
} from '../reducers/tasksManager/actions';

const removeStartTime = () => localStorage.removeItem('startLastTask');

function* removeStartTimeWorker() {
  yield call(removeStartTime);
}

function* uploadStartTimeWorker() {
  const start = yield select((state) => (
    state.tasksManager.tasks[state.tasksManager.tasks.length - 1].start
  ));
  localStorage.setItem('startLastTask', start);
}

function* uploadDataWatcher() {
  yield takeEvery(STARTED_TASK_CREATION, uploadStartTimeWorker);
  yield takeEvery(FINISHED_TASK_CREATION, removeStartTimeWorker);
}

export default uploadDataWatcher;
