import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../../router';

import DevTools from '../../components/DevTools';

import configureStore from '../../store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
/* global someFunction window:true */
/* eslint-disable no-underscore-dangle */
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          { window.__REDUX_DEVTOOLS_EXTENSION__ ? null : <DevTools /> }
        </div>
      </Provider>
    );
  }
}
