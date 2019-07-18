import HomePage from './components/pages/HomePage';
import Home from './components/pages/Home';
import Swip from './components/pages/swip';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home/',
    component: Home,
  },
  {
    path: '/swip/',
    component: Swip,
  },
];
