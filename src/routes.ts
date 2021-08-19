import Shop from './pages/shop';
import Checkout from './pages/checkout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/products/:id', component: Product },
  { path: '/products', component: Shop },
  { path: '/checkout', component: Checkout },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

export default routes;
