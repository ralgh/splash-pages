import _ from 'lodash';
import path from 'path';

import React from 'react';
import Router from 'react-router';
import express from 'express';
import locale from 'locale';

import {getRoutes} from './routes';
import localeMessages from '../config/messages';
import shared from '../config/shared';
import formats from '../config/formats';
import {availableLocales, defaultLocale} from '../config/locale';
import {getIntlMessage} from '../components/intl/intl';

process.env.LANG = defaultLocale;

var app = express();

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function whenProduction(str) {
  return isProduction() ? str : '';
}

function alternateLanguages(path, language) {
  // given a page find all other versions
  // en-gb as x-default
  return `
    <link rel="alternate" href="https://gocardless.com/fr/path" hreflang="locale">
    <link rel="alternate" href="https://gocardless.com/path" hreflang="x-default">
  `;
}

var mixpanelProduction = '0ebe37c4ed96a0432e989cc20ca1db04';
var mixpanelTest = 'fa029f81daf1c512854b1345342c4e6c';
var mixpanelToken = isProduction() ? mixpanelProduction : mixpanelTest;

var metadata = {
  IS_PRODUCTION: isProduction(),
  MIXPANEL_TOKEN: mixpanelToken,
  CTA_BASIC: 'Start taking payments',
  CTA_PRO: 'Contact sales',
  LOGO_URL: 'https://gocardless.com/images/logos/gocardless-square.png',
  GOOGLE_SITE_VERIFICATION: 'Y80kah87ghJhwiDqw-5ap234p9wCcGt6kMRxvnamtHU',
  SOCIAL_LINKS: {
    FACEBOOK: 'https://www.facebook.com/GoCardless',
    TWITTER: 'https://twitter.com/gocardless',
    GOOGLE: 'https://plus.google.com/+Gocardless',
    LINKEDIN: 'https://www.linkedin.com/company/gocardless',
    GITHUB: 'http://github.com/gocardless'
  }
}

app.use(locale(availableLocales));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/favicon.ico', (req, res) => { res.send('') });

function pathLocale(path) {
  var locale = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})\//);
  if (locale && locale[1]) {
    locale = new locale.Locale(locale[1]);
  }
  return locale;
}

function normalizeLocale(locale) {
  locale = _.cloneDeep(locale);
  locale.normalized = locale.normalized.replace('_', '-');
  return locale;
}

app.use(function(req, res) {
  var reqLocale = pathLocale(req.path) || locale.Locale['default'];
  reqLocale = normalizeLocale(reqLocale);
  var routes = getRoutes(reqLocale.normalized);
  var messages = _.merge({}, shared, localeMessages[reqLocale.normalized]);

  function appProps(props) {
    return _.extend({
      locales: reqLocale.normalized,
      messages: messages,
      formats: formats,
    }, props);
  }

  Router.run(routes, req.url, function (Handler, state) {
    // Why so hard?
    var routeName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');

    res.send(`
      <!doctype html>
      <html class="no-js" lang=${reqLocale.language}>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">

            <title>${ getIntlMessage(messages, `${routeName}.title`) }</title>

            <meta name="description" content="${ getIntlMessage(messages, `${routeName}.description`) }">
            <meta name="og:image" content="${ metadata.LOGO_URL }">
            <meta name="og:image:secure_url" content="${ metadata.LOGO_URL }">
            <meta name="google-site-verification" content="${ metadata.GOOGLE_SITE_VERIFICATION }">
            <link href="${ metadata.SOCIAL_LINKS.GOOGLE }" rel="publisher">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="canonical" href="https://gocardless.com${req.path}">

            <!--[if lt IE 9]>
            <script>
              (function() {
                var elems = 'article aside details figcaption figure footer header hgroup main nav section summary'.split(' ');
                var length = elems.length;
                var index = 0;
                for(;index < length; index++){
                  document.createElement(elems[index]);
                }
              })();
            </script>
            <![endif]-->
            <link rel="stylesheet" href="/css/main.css">
          </head>
        <body>
          ${ whenProduction('<script src="//cdn.optimizely.com/js/125150657.js"></script>') }

          <!--[if lt IE 9]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser.
            Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
          <![endif]-->

          ${React.renderToString(<Handler {...appProps(state)} />)}

          <!-- Google Tag Manager -->
          <script>
            dataLayer = [];
          </script>
          <script src="//www.googletagmanager.com/gtm.js?id=GTM-PRFKNC" async></script>
          <script>
            (function(w,l){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window, 'dataLayer');
          </script>
        </body>
      </html>
    `);
  });
});

const port = process.env.PORT || 5000;
console.log('Listening: (localhost:' + port + ')');
app.listen(port);
