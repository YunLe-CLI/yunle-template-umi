import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import HOME_TYPE from './constants';

const {
  TEST_HOME,
} = HOME_TYPE;

const initialState = fromJS({
  text: false,
});

export default createReducer(initialState, {
  [TEST_HOME]: (state, action) => state.setIn(['text'], action.text),
});
