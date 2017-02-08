import { combineReducers } from 'redux';
import { TEST } from '../constants';

function test(state = {}, action) {
  switch (action.type) {
    case TEST:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  test,
});
