import url from 'url';

import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import {pathToLocale} from '../app/helpers/locale-helper/locale-helper';
import HtmlDocument from '../app/components/html-document/html-document';
import {getRoutes} from '../app/router/routes';
import localeMessages from '../config/messages';
import availableLocales from '../config/available-locales';
import config from '../config';
import formats from '../config/formats';

const scriptTags = ['/vendor/system.js', '/jspm.config.js', '/client/loader.js'];
const cssLinks = ['/css/main.css', '/css/fonts.css'];

function normalizeUrl(urlStr) {
  var parsedUrl = url.parse((urlStr || '').toLowerCase());
  parsedUrl.pathname = parsedUrl.pathname.replace(/^\/|\/$/g, '');
  parsedUrl.pathname = '/' + parsedUrl.pathname;
  return url.format(parsedUrl);
}

function render(req, res, next) {
  if (!req.headers['accept'] || !req.accepts('html')) {
    return next();
  }

  const reqUrl = normalizeUrl(req.url);
  const reqPath = url.parse(reqUrl).path;
  const reqLocale = pathToLocale(reqPath, availableLocales);
  const routes = getRoutes(reqLocale.normalized, availableLocales);
  const messages = _.cloneDeep(localeMessages[reqLocale.normalized]);

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

  const router = Router.create({
    onAbort: function(abortReason) {
      const destination = router.makePath(abortReason.to,
        abortReason.params, abortReason.query);
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
    const routeName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');
    const stateProps = {
      routeName: routeName || 'not_found',
    };

    const markup = React.renderToString(<Handler {...appProps(stateProps)} />);

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
      <HtmlDocument
        markup={markup}
        script={scriptTags}
        css={cssLinks}
        router={router}
        dataRender={appProps(stateProps)}
        {...appProps(stateProps)} />
    );
    const doctype = '<!DOCTYPE html>';
    res.send(doctype + html);
  });
}

export default render;
