import { all } from 'redux-saga/effects';

import uploadDataWatcher from './uploadLocalStore';
import downloadDataWatcher from './downloadLocalStore';

export default function* rootSaga() {
  yield all([
    downloadDataWatcher(),
    uploadDataWatcher(),
  ]);
}
