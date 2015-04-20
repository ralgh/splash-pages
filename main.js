import Intl from 'intl';
global.Intl = Intl;

import _ from 'lodash';

import React from 'react';
import Router from 'react-router';
import express from 'express';
import {getRoutes} from './routes';

var messages = {

};

var formats = {

};

var DEFAULT_LANGUAGE = 'en';
var DEFAULT_REGION = 'gb';

function getLocale(language, region) {
  language = language || DEFAULT_LANGUAGE;
  region = region || DEFAULT_REGION;
  return [language, region].join('-');
}

var app = express();

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function whenProduction(str) {
  return isProduction() ? str : '';
}

function getDescription(language) {
  return 'Direct Debit';
}

function getTitle(language) {
  return 'GoCardless';
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

app.use(express.static(__dirname));
app.get('/favicon.ico', (req, res) => { res.send('') });

app.use(function(req, res) {
  var locale = req.path.match(/^\/([a-z]{2,2}\-[a-z]{2,2})\//);
  locale = locale && locale[1] || getLocale();
  var language = locale.slice(0, 2);
  var routes = getRoutes(locale);

  function appProps(props) {
    return _.extend({
      locales: locale,
      messages: messages,
      formats: formats,
    }, props);
  }

  Router.run(routes, req.url, function (Handler, state) {
    res.send(`
      <!doctype html>
      <html class="no-js" lang=${language}>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">

            <title>${ getTitle(language) }</title>

            <meta name="description" content="${ getDescription(language) }">
            <meta name="og:image" content="${ metadata.LOGO_URL }">
            <meta name="og:image:secure_url" content="${ metadata.LOGO_URL }">
            <meta name="google-site-verification" content="${ metadata.GOOGLE_SITE_VERIFICATION }">
            <link href="${ metadata.SOCIAL_LINKS.GOOGLE }" rel="publisher">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="canonical" href="https://gocardless.com${req.path}">

            ${ alternateLanguages(req.path, language) }

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

          <script src="/js/main.js"></script>

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
