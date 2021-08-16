import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
