import { APP_TYPE } from './constants';
import * as login from '../LoginPage/actions';

const {
  LOGINDING_APP,
  GLOBAL_MODAL_SHOW,
  GLOBAL_MODAL_HIDE,
} = APP_TYPE;

export function loadingApp({ loading = false, text }) {
  return {
    type: LOGINDING_APP,
    loading,
    text,
  };
}

export function gModalShowApp({ type, title, content, onOk, onCancel }) {
  return {
    type: GLOBAL_MODAL_SHOW,
    info: {
      type,
      title,
      content,
      onOk,
      onCancel,
    },
  };
}

export function gModalHideApp() {
  return {
    type: GLOBAL_MODAL_HIDE,
  };
}

export default {
  ...login,
  loadingApp,
  gModalShowApp,
  gModalHideApp,
};
