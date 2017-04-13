import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';

import createSagaMiddleware from 'redux-saga';
import rootReducer from '../containers/App/reducer';
import rootSaga from '../containers/App/sagas';
import DevTools from '../components/DevTools';

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState) {
  /* global someFunction window:true */
  /* eslint-disable no-underscore-dangle */
  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(sagaMiddleware),
    );
  } else {
    enhancer = compose(
      applyMiddleware(sagaMiddleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    );
  }
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../containers/App/reducer', () =>
      store.replaceReducer(require('../containers/App/reducer').default),
    );
  }
  /* eslint-enable */

  return store;
}
