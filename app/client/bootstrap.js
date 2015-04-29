import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/routes';
import _ from 'lodash';

// Import the intl polyfill if we need it.
import intlPolyfill from '../helpers/intl-polyfill/intl-polyfill';

// Load CSS in dev mode dynamically.
if (process.env.BROWSER) {
  require('../css/main.scss');
  require('../css/greenhouse-forms.scss');
  require('../css/fonts.css');
}

function renderApp() {
  var appState = window.app;
  var routes = getRoutes(appState.locales, appState.availableLocales);
  var mountNode = document.getElementById('root');

  var router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
  });

  router.run(function(Handler, state) {
    var stateName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');
    var stateProps = _.extend(appState, {
      stateName: stateName,
    });

    React.render(<Handler {...stateProps} />, mountNode, () => {
      console.log('App has been mounted.');
    });
  });
}

intlPolyfill(window.app.availableLocales);

renderApp();
