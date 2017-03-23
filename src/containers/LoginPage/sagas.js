import { takeLatest } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';
import HOME_TYPE from './constants';
import { login } from '../../api';

const {
  LOGIN_REQUESTED_EDIT,
  LOGIN_SUCCEEDED_EDIT,
  LOGIN_FAILED_EDIT,
} = HOME_TYPE;

function* callLogin({ query }) {
  try {
    const result = yield call(login, query);
    if (result.status >= 200 && result.status < 300 ) throw result;
    yield put({ type: LOGIN_SUCCEEDED_EDIT, result: JSON.parse(result) });
  } catch (err) {
    yield put({ type: LOGIN_FAILED_EDIT, err });
  }
}

export function* takeLogin() {
	yield* takeLatest(LOGIN_REQUESTED_EDIT, callLogin);
}

export default [
  fork(takeLogin),
];
