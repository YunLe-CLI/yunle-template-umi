import keyMirror from 'keymirror';
import LOGIN_TYPE from '../LoginPage/constants';

export const APP_TYPE = keyMirror({
  LOGINDING_APP: null,
  GLOBAL_MODAL_SHOW: null,
  GLOBAL_MODAL_HIDE: null,
});

export default {
  APP_TYPE,
  LOGIN_TYPE,
};
