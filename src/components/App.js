import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Layout from './Layout';

const App = () => (
  <Layout>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </Layout>
);

export default App;
