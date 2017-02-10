import { APP_TYPE } from './constants';
import * as home from '../TestPage/actions';

const {
  LOGINDING_APP,
} = APP_TYPE;

export function testApp() {
  return {
    type: LOGINDING_APP,
    text: true,
  };
}

export default {
  ...home,
  testApp,
};
