export const ADD_TRANSACTION = 'ADD_TRANSACTION';

import { TEST } from '../constants';

export function createTransaction(transaction) {
  return {
    type: TEST,
    transaction
  };
}
