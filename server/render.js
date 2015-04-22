import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import locale from 'locale';

import HtmlDocument from '../app/components/html-document';
import {getRoutes} from '../app/router/routes';
import localeMessages from '../config/messages';
import shared from '../config/shared';
import config from '../config';
import formats from '../config/formats';
import {availableLocales, defaultLocale} from '../config/locale';
import {getIntlMessage} from '../app/components/intl/intl';

process.env.LANG = defaultLocale;

var scriptTags = ['vendor/systemjs/build/system.min.js', 'vendor/es6-module-loader/es6-module-loader.js'];
var cssLinks = ['css/main.css'];

function pathLocale(path) {
  var localePath = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})\//);
  var foundLocale = locale.Locale['default'];
  if (localePath && localePath[1]) {
    foundLocale = new locale.Locale(localePath[1]);
  }
  return foundLocale;
}

var scriptTags = ['/vendor/system.js', 'js/loader.js'];
var cssLinks = ['/css/main.css'];

function normalizeLocale(locale) {
  locale = _.cloneDeep(locale);
  locale.normalized = locale.normalized.replace('_', '-');
  return locale;
}

function render(req, res, next) {
  var reqLocale = pathLocale(req.path);
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
      path: req.path,
    }, props);
  }

  Router.run(routes, req.url, function(Handler, state) {
    var stateName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');;
    var stateProps = {
      stateName: stateName,
    }

    const markup = React.renderToString(<Handler {...appProps(stateProps)} />);

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
      <HtmlDocument
        markup={markup}
        script={scriptTags}
        css={cssLinks}
        {...appProps(stateProps)}
      />
    );
    const doctype = '<!DOCTYPE html>';
    res.send(doctype + html);
  });
}

export default render;
