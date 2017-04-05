import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hashHistory, browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../router';

import configureStore from '../store';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
