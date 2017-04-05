import config from '../config';
import { fromJS } from 'immutable';
import {
  combineReducers,
} from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { APP_TYPE } from './constants';

const {
  LOGINDING_APP,
  OPENMENU_APP,
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
  switch (action.type) {
    case LOCATION_CHANGE: {
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    }
    default:
      return state;
  }
}

let f = {
	routing: routerReducer,
	app,
};
const d = config.map((item, index) => {
	const data = require(`../${item.root}/reducer`).default;
	f = Object.assign(f, { [item.root]: data })
	return data;
});

export default combineReducers(f);

function openMenuFunc(openMenu = [], menu, path) {
  const item = (() => {
    let index = 0;
    for (let j = 0; j < menu.length; j += 1) {
      for (let z = 0; z < menu[j].childMenu.length; z += 1) {
        if (menu[j].childMenu[z].path === path) {
          index = j;
          break;
        }
      }
    }
    return `item-${index}`;
  })();
  (() => {
    let e = false;
    for (let i = 0; i < openMenu.length; i += 1) {
      if (openMenu[i] === item) {
        e = true;
        break;
      }
    }
    if (!e) {
      openMenu.push(item);
    }
  })();
  return openMenu;
}
