import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/routes';
import _ from 'lodash';

function renderApp(){
  var appState = window.app;
  var routes = getRoutes(appState.locales);
  var mountNode = document.getElementById('root');

  /*
  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler {...appState} />, mountNode, () => {
      console.log('Application has been mounted.');
    });
  });
  */

  var router = Router.create({
    onAbort: function(abortReason){
      var destination = router.makePath(abortReason.to, abortReason.params, abortReason.query);
      console.log('Redirecting to:', destination);
      window.location.href = destination;
    },
    onError: function(err){
      throw err;
    },
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

renderApp();
