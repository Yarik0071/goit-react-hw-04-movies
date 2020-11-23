import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'


import Layout from './Layout.js';
import routes from '../utils/routes.js'

const App = () => (
  <>
    <Layout>
      <Suspense fallback={<h2>...</h2>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;