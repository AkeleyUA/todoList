import { takeEvery, select } from 'redux-saga/effects';
import {
  PUT_TO_LOCAL_STORAGE,
} from '../reducers/tasksManager/actions';

function* putTasksWorker() {
  yield select((state) => localStorage.setItem('tasks', JSON.stringify(state.tasksManager.tasks)));
}

// const unload = () => window.addEventListener('beforeunload', () => putTasksWorker);

function* putTasksWatcher() {
  yield takeEvery(PUT_TO_LOCAL_STORAGE, putTasksWorker);
}

export default putTasksWatcher;
