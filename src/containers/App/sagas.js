import { takeEvery } from 'redux-saga';
import { put, fork, take } from 'redux-saga/effects';

import { APP_TYPE } from './constants';

import home from '../TestPage/sagas';

const {
  LOGINDING_APP,
} = APP_TYPE;

export function* incrementAsync(type) {
  yield put({ type: LOGINDING_APP, loading: type });
}

export function* app() {
  while (yield take(LOGINDING_APP)) {
    const { loading } = yield take(LOGINDING_APP);
    yield takeEvery('INCREMENT_ASYNC', incrementAsync, loading);
  }
}

export default app;
