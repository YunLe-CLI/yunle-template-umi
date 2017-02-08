import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../../router';

import configureStore from '../../store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
export default Root;
