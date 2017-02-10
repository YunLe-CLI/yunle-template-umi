// import { APP_TYPE } from '../App/constants';
import HOME_TYPE from './constants';

const {
  TEST_HOME,
} = HOME_TYPE;

export function testClick(text) {
  return {
    type: TEST_HOME,
    text,
  };
}
