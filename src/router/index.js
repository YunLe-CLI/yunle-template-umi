import App from '../containers/App';
import TestPage from '../containers/TestPage';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: TestPage },
  childRoutes: [
    {
      path: 'login',
      component: TestPage,
    },
  ],
  // getIndexRoute(partialNextState, callback) {
  //   require.ensure([], (require) => {
  //     callback(null, {
  //       component: require('../containers/Home'),
  //     });
  //   });
  // },
  // getChildRoutes(partialNextState, callback) {
  //   require.ensure([], (require) => {
  //     callback(null, [
  //       require('./login.router'),
  //     ]);
  //   });
  // },
};

export default routes;
