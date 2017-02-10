import { takeEvery } from 'redux-saga';
import { put, fork, take, call } from 'redux-saga/effects';
import { APP_TYPE } from '../App/constants';
import HOME_TYPE from './constants';
import api from '../../api';

const {
  LOGINDING_APP,
} = APP_TYPE;

const {
  TEST_HOME,
} = HOME_TYPE;

export function* incrementAsync() {
  yield put({ type: LOGINDING_APP, loading: true });
  try {
    const data = yield call(api.checkV2);
    yield put({ type: LOGINDING_APP, loading: false, data });
  } catch (error) {
    yield put({ type: LOGINDING_APP, loading: false });
  }
}

export function* watchIncrementAsync() {
  while (yield take(TEST_HOME)) {
    const { text } = yield take(TEST_HOME);
    yield takeEvery(TEST_HOME, incrementAsync, text);
  }
}

export default function* homeSaga() {
  yield fork(watchIncrementAsync);
}
