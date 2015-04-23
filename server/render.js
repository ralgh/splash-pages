import url from 'url';

import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import locale from 'locale';

import HtmlDocument from '../app/components/html-document/html-document';
import {getRoutes} from '../app/router/routes';
import localeMessages from '../config/messages';
import config from '../config';
import formats from '../config/formats';
import {defaultLocale} from '../config/locale';

process.env.LANG = defaultLocale;

function pathLocale(path) {
  var localePath = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})/);
  var foundLocale = locale.Locale.default;
  if (localePath && localePath[1]) {
    foundLocale = new locale.Locale(localePath[1]);
  }
  return foundLocale;
}

var scriptTags = ['/vendor/system.js', 'js/loader.js'];
var cssLinks = ['/css/main.css', '/css/fonts.css'];

function normalizeLocale(localeData) {
  localeData = _.cloneDeep(localeData);
  localeData.normalized = localeData.normalized.replace('_', '-');
  return localeData;
}

function normalizeUrl(urlStr) {
  urlStr = urlStr.toLowerCase() || '';
  var parsedUrl = url.parse(urlStr);
  parsedUrl.pathname = parsedUrl.pathname.replace(/^\/|\/$/g, '');
  parsedUrl.pathname = '/' + parsedUrl.pathname;
  return url.format(parsedUrl);
}

function render(req, res, next) {
  var reqUrl = normalizeUrl(req.url);
  var reqPath = url.parse(reqUrl).path;

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
    }, props);
  }

  var router = Router.create({
    onAbort: function(abortReason) {
      var destination = router.makePath(abortReason.to, abortReason.params, abortReason.query);
      console.log('Redirecting to:', destination);
      res.redirect(302, destination);
    },
    onError: function(err) {
      next(err);
    },
    routes: routes,
    location: reqUrl,
  });

  router.run(function(Handler, state) {
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
        {...appProps(stateProps)}
      />
    );
    const doctype = '<!DOCTYPE html>';
    res.send(doctype + html);
  });
}

export default render;
