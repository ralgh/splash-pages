import path from 'path';
import fs from 'fs';
import url from 'url';

import assign from 'lodash/object/assign';
import cloneDeep from 'lodash/lang/cloneDeep';
import result from 'lodash/object/result';
import findLast from 'lodash/collection/findLast';
import React from 'react';
import Router from 'react-router';
import { pathToLocale } from '../app/helpers/locale-helper/locale-helper';
import HtmlDocument from '../app/components/html-document/html-document';
import { getRoutes } from '../app/router/route-helpers';
import localeMessages from '../config/messages';
import availableLocales from '../config/available-locales';
import config from '../config';
import formats from '../config/formats';

function getWebpackPaths() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'app', 'bundles', 'webpack-stats.json')));
}

function normalizeUrl(urlStr) {
  var parsedUrl = url.parse((urlStr || '').toLowerCase());
  parsedUrl.pathname = parsedUrl.pathname.replace(/^\/|\/$/g, '');
  parsedUrl.pathname = parsedUrl.pathname ? `/${parsedUrl.pathname}/` : '/';
  return url.format(parsedUrl);
}

export function render(req, res, next) {
  const isHtml = req.headers.accept && req.accepts('html');

  // Skip not found assets
  if (!isHtml) { return next(); }

  const reqUrl = normalizeUrl(req.url);
  const reqPath = url.parse(reqUrl).path;
  const reqLocale = pathToLocale(reqPath, availableLocales);
  const routes = getRoutes(reqLocale.normalized, availableLocales);
  const messages = cloneDeep(localeMessages[reqLocale.normalized]);

  function appProps(props) {
    return assign({
      locales: reqLocale.normalized,
      language: reqLocale.language,
      messages: messages,
      formats: formats,
      config: config,
      availableLocales: availableLocales,
    }, props);
  }

  const router = Router.create({
    onAbort: function(abortReason) {
      next(abortReason);
    },
    onError: function(err) {
      next(err);
    },
    routes: routes,
    location: reqUrl,
  });

  router.run(function(Handler, state) {
    const routeName = result(findLast(state.routes.slice(), 'name'), 'name');
    const stateProps = {
      routeName: routeName || 'not_found',
      pathname: state.pathname,
    };

    const markup = React.renderToString(<Handler {...appProps(stateProps)} />);
    const webpackUrls = getWebpackPaths();

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
      <HtmlDocument
        markup={markup}
        script={webpackUrls.script}
        css={webpackUrls.css}
        router={router}
        dataRender={appProps(stateProps)}
        {...appProps(stateProps)} />
    );
    const doctype = '<!DOCTYPE html>';
    res.send(doctype + html);
  });
}
