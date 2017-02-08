import App from '../views/App';
import Home from '../views/Home';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [],
};

export default routes;
