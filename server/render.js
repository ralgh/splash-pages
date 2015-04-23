import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import {pathLocale, normalizeLocale} from '../app/helpers/locale-helper/locale-helper';
import HtmlDocument from '../app/components/html-document/html-document';
import {getRoutes} from '../app/router/routes';
import localeMessages from '../config/messages';
import config from '../config';
import formats from '../config/formats';
import {availableLocales} from '../app/helpers/locale-helper/locale-helper';


var scriptTags = ['vendor/systemjs/build/system.min.js', 'vendor/es6-module-loader/es6-module-loader.js'];
var cssLinks = ['css/main.css'];

var scriptTags = ['/vendor/system.js', '/jspm.config.js', '/client/loader.js'];
var cssLinks = ['/css/main.css'];

function render(req, res) {
  var reqPath = req.path.toLowerCase().replace(/^\/|\/$/g, '');
  reqPath = '/' + reqPath;
  var reqUrl = req.url.toLowerCase();

  var reqLocale = pathLocale(reqPath);
  reqLocale = normalizeLocale(reqLocale);
  var routes = getRoutes(reqLocale.normalized);
  var messages = _.cloneDeep(localeMessages[reqLocale.normalized]);

  function appProps(props) {
    return _.extend({
      locales: reqLocale.normalized,
      language: reqLocale.language,
      messages: messages,
      formats: formats,
      config: config,
      path: reqPath,
      availableLocales: availableLocales,
    }, props);
  }

  Router.run(routes, reqUrl, function(Handler, state) {
    var stateName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');
    var stateProps = {
      stateName: stateName,
    };

    const markup = React.renderToString(<Handler {...appProps(stateProps)} />);

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
      <HtmlDocument
        markup={markup}
        script={scriptTags}
        css={cssLinks}
        dataRender={appProps(stateProps)}
        {...appProps(stateProps)}
      />
    );
    const doctype = '<!DOCTYPE html>';
    res.send(doctype + html);
  });
}

export default render;
