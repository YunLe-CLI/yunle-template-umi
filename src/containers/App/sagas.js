import login from '../LoginPage/sagas';

export default function* rootSaga() {
  const rootSagas = [];
  yield rootSagas.concat(login);
}
