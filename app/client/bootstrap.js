import result from 'lodash/object/result';
import find from 'lodash/collection/find';
import includes from 'lodash/collection/includes';
import findLast from 'lodash/collection/findLast';
import assign from 'lodash/object/assign';
import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/route-helpers';
import {pushDataLayer} from '../helpers/gtm-tracker/gtm-tracker';

// Load CSS in dev mode dynamically.
if (process.env.BROWSER) {
  require('../css/main.scss');
  require('../css/fonts.css');
}

function renderApp() {
  const appState = window.app;
  const routes = getRoutes(appState.locales, appState.availableLocales);
  const router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
  });

  // TODO: Remove this after some time, fix all incoming links
  const redirects = {
    '/about#jobs': '/about/jobs',
    '/about#team': '/about/team',
  };

  const href = document.location.href;
  const matchedRedirect = find(Object.keys(redirects), includes.bind(null, href));
  if (matchedRedirect) {
    document.location.replace(redirects[matchedRedirect]);
  }

  router.run(function(Handler, state) {
    const mountNode = document.getElementById('root');
    const routeName = result(findLast(state.routes.slice(), 'name'), 'name');
    const stateProps = assign({}, appState, {
      routeName: routeName || 'not_found',
      pathname: state.pathname,
    });

    React.render(<Handler {...stateProps} />, mountNode, () => {
      console.log('App has been mounted. Logging pageview.');
      pushDataLayer({
        event: 'pageview',
        title: document.title,
        virtualUrl: state.pathname,
      });
    });
  });
}

renderApp();

