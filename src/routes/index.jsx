import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';


/**
 * Route config
 *
 * @constant
 */
const routes = [
  {
    path: '/home',
    name: 'home',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home')),
  },
  {
    path: '/home/:id',
    name: 'home-with-id',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home')),
  },
  {
    path: '/about',
    about: 'about',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'about' */ '../pages/About')),
  },
  {
    name: 'not-found',
    component: lazy(() => import(/* webpackChunkName: 'not-found' */ '../pages/NotFound')),
  },
];

/**
 * Application Router
 *
 * @return {JSX.Element}
 */
function Routes () {
  const { PUBLIC_URL } = process.env;
  const history = createBrowserHistory({ basename: PUBLIC_URL, forceRefresh: false, keyLength: 6 });

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router history={history}>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          {routes.map((route, index) => (
            <Route
              key={route.name || index.toString()}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Routes;
