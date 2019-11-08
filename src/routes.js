import Home from './pages/Home';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/profile',
    component: Profile
  }
];

export default routes;
