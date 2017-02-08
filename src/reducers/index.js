import { combineReducers } from 'redux';

import test from './test.reduce';
import routing from './router.reduce';

export default combineReducers({
  test,
  routing,
});
