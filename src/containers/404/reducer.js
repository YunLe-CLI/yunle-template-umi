import { fromJS } from 'immutable';
import INDEXG_TYPE from './constants';

const {
  TEST_INDEXG,
} = INDEXG_TYPE;

const initialState = fromJS({
  text: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_INDEXG: {
      return state.setIn(['text'], action.text);
    }
    default: {
      return state;
    }
  }
};
