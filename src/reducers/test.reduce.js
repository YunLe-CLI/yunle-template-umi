import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import ALL_TYPE from '../constants';

const { TEST } = ALL_TYPE;

const initialState = fromJS({
  name: 'test text',
});

export default createReducer(initialState, {
  [TEST.TEST_CLICK]: (state, action) => state.setIn(['name'], action.text),
});
