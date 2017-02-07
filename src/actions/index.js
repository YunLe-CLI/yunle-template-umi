export const ADD_TRANSACTION = 'ADD_TRANSACTION';

function createTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    transaction
  };
}
