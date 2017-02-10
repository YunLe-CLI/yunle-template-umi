import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import HOME_TYPE from './constants';

const {
  TEST_HOME,
  FETCH_HOME,
} = HOME_TYPE;

const initialState = fromJS({
  text: 'button',
  data: {},
});

export default createReducer(initialState, {
  [TEST_HOME]: (state, action) => state.setIn(['text'], action.text),
  [FETCH_HOME]: (state, action) => state.setIn(['data'], action.data),
});
