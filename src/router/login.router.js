const loginRoute = {
  path: 'login',
  getComponents(nextState, callback) {
    require.ensure([], (require) => {
      callback(null, require('../views/Login'));
    });
  },
};
export default loginRoute;
