import App from '../containers/App';
import Login from '../containers/LoginPage';
import NotFound from '../containers/404';

const routes = {
  name: 'app',
  path: '/',
  component: App,
  indexRoute: { component: Login },
  childRoutes: [
    {
      name: 'Login',
      breadcrumbName: '登录',
      path: 'login',
      component: Login,
    },
    {
      name: '404',
      breadcrumbName: '404',
      path: '*',
      component: NotFound,
    },
  ],
};

export default routes;
