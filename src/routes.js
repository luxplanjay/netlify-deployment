import Home from './pages/Home';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/blog',
    exact: false,
    component: Blog
  },
  {
    path: '/profile',
    exact: false,
    component: Profile
  }
];
