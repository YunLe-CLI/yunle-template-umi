import INDEXG_TYPE from './constants';

const {
  TEST_INDEXG,
} = INDEXG_TYPE;

export function testIndexG() {
  return {
    type: TEST_INDEXG,
    text: 'click',
  };
}
