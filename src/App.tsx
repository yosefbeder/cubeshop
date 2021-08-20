import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { fetchProducts } from './store/products';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchBag } from './store/bag';

const App = () => {
  const dispatch = useAppDispatch();
  const productsIsLoaded = useAppSelector(state => state.products.status);
  const products = useAppSelector(state => state.products.data);
  const bag = useAppSelector(state => state.bag.data);
  const bagIsLoaded = useAppSelector(state => state.products.status);

  const isLoaded = bagIsLoaded === 'loaded' && productsIsLoaded === 'loaded';

  useEffect(() => {
    (async () => {
      await dispatch(fetchProducts());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (productsIsLoaded === 'loaded') {
      (async () => {
        await dispatch(fetchBag(products!));
      })();
    }
  }, [productsIsLoaded, products, dispatch]);

  return isLoaded ? (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  ) : null;
};

export default App;
