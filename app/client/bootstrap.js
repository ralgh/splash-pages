import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/routes';
import _ from 'lodash';

function renderApp() {
  var appState = window.app;
  var routes = getRoutes(appState.locales, appState.availableLocales);
  var mountNode = document.getElementById('root');

  var router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
  });

  router.run(function(Handler, state) {
    var routeName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');
    var stateProps = _.extend(appState, {
      routeName: routeName,
    });

    React.render(<Handler {...stateProps} />, mountNode, () => {
      console.log('App has been mounted.');
    });
  });
}

renderApp();
