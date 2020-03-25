import { all } from 'redux-saga/effects';

import putStartTimeWatcher from './putStartTime';
import putTasksWatcher from './putTasks';

export default function* rootSaga() {
  yield all([
    putStartTimeWatcher(),
    putTasksWatcher(),
  ]);
}
