import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/routes';

function renderApp(){
  var appState = window.app;
  var routes = getRoutes(appState.locales);
  var mountNode = document.getElementById('root');

  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler {...appState} />, mountNode, () => {
      console.log('Application has been mounted.');
    });
  });
}

renderApp();
