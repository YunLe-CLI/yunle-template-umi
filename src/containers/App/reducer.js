import { fromJS } from 'immutable';
import {
  combineReducers,
} from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import login from '../LoginPage/reducer';
import { APP_TYPE } from './constants';

const {
  LOGINDING_APP,
  GLOBAL_MODAL_SHOW,
  GLOBAL_MODAL_HIDE,
} = APP_TYPE;

const initialState = fromJS({
  loading: false,
  loadingTxt: '',
  appName: 'editH5',
  globalModal: {
    type: '',
    title: '',
    content: '',
    onOk: null,
    onCancel: null,
  },
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case LOGINDING_APP: {
      return state.merge({
        loading: action.loading,
        loadingTxt: action.text,
      });
    }
    case GLOBAL_MODAL_SHOW: {
      return state.merge({
        globalModal: {
          type: action.info.type,
          title: action.info.title,
          content: action.info.content,
          onOk: action.info.onOk,
          onCancel: action.info.onCancel,
        },
      });
    }
    case GLOBAL_MODAL_HIDE: {
      return state.merge({
        globalModal: {
          type: '',
          title: '',
          content: '',
          onOk: null,
          onCancel: null,
        },
      });
    }
    default: {
      return state;
    }
  }
};

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

function routerReducer(state = routeInitialState, action) {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }
  return state;
}

export default combineReducers({
  routing: routerReducer,
  app,
  login,
});
