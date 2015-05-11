import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/routes';
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

  router.run(function(Handler, state) {
    const mountNode = document.getElementById('root');
    const routeName = _.result(_.findLast(state.routes.slice(), 'name'), 'name');
    const stateProps = _.extend(appState, {
      routeName: routeName || 'not_found',
    });

    React.render(<Handler {...stateProps} />, mountNode, () => {
      console.log('App has been mounted. Logging pageview.');
      pushDataLayer({
        event: 'pageview',
        title: document.title,
        virtualUrl: state.pathname
      });
    });
  });
}

renderApp();

