import edit from '../EditPage/route';
import login from '../LoginPage/route';
import register from '../RegisterPage/route';
import notFound from '../404/route';

const routes = [
  {
    id: '/',
    name: '容器',
    path: '/',
  },
];

export default routes.concat(edit, login, register, notFound);
