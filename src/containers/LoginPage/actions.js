// import { APP_TYPE } from '../App/constants';
import LOGIN_TYPE from './constants';

const {
	SETIPT_LOGIN,
  LOGIN_REQUESTED_EDIT,
	LOGOUT_REQUESTED_EDIT,
} = LOGIN_TYPE;

export function setIptLogin({ v, k }) {
  return {
    type: SETIPT_LOGIN,
	  v,
	  k,
  };
}
export function handleLogin(query) {
  return {
    type: LOGIN_REQUESTED_EDIT,
    query,
  };
}
export function handleLogout(query) {
	return {
		type: LOGOUT_REQUESTED_EDIT,
		query,
	};
}