import ALL_TYPE from '../constants';

const { TEST } = ALL_TYPE;

export function testClick() {
  return {
    type: TEST.TEST_CLICK,
    text: 'click',
  };
}
