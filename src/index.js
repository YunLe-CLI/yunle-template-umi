import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './containers';
import './index.html';

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
  () => {
    let index = 1;
    const time = setInterval(() => {
      const loading = document.getElementById('global-loading-wrap');
      if (!loading) return;
      if (index >= 0) {
        index -= 0.1;
        loading.style.opacity = index;
      } else {
        clearTimeout(time);
        loading.style.display = 'none';
      }
    }, 100);
  },
);
