import { takeEvery, select, call, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import {
  PUT_TO_LOCAL_STORAGE,
  LOAD_PAGE,
} from '../reducers/tasksManager/actions';

function* putTasksWorker() {
  yield select((state) => localStorage.setItem('tasks', JSON.stringify(state.tasksManager.tasks)));
}

function* channel() {
  try {
    const listenerUnload = yield call(() => (
      eventChannel((emitter) => {
        const windowListener = window.addEventListener('beforeunload', () => {
          emitter('page will unload');
          return true;
        });
        return () => {
          windowListener.remove();
          emitter(END);
        };
      })
    ));

    while (true) {
      yield take(listenerUnload);
      yield call(putTasksWorker);
    }
  } catch (event) {
    console.log('error with back handler', event);
  }
}

function* putTasksWatcher() {
  yield takeEvery(PUT_TO_LOCAL_STORAGE, putTasksWorker);
  yield takeEvery(LOAD_PAGE, channel);
}

export default putTasksWatcher;
