import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from '../TestPage/reducer';
import { APP_TYPE } from './constants';

const {
  LOGINDING_APP,
} = APP_TYPE;

const initialState = fromJS({
  loading: false,
});

const app = createReducer(initialState, {
  [LOGINDING_APP]: (state, action) => state.setIn(['loading'], action.loading),
});

export default combineReducers({
  routing: routerReducer,
  app,
  home,
});
