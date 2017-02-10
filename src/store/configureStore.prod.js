import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../containers/App/reducer';
import rootSaga from '../containers/App/sagas';

const sagaMiddleware = createSagaMiddleware(rootSaga);
const enhancer = compose(
  applyMiddleware(thunk, sagaMiddleware),
);
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
