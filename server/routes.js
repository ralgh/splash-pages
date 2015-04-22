import url from 'url';

import _ from 'lodash';
import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';

import App from '../components/app/app';
import NotFound from '../pages/not-found';
import FAQMerchants from '../pages/faq/merchants';

import Home from '../pages/home';

import About from '../pages/about';

import Pricing from '../pages/pricing';

// Route Signature:
// [routeName:String, {
//     /* routeOptions: handler */
// }:Object, { /* locale config */ }:Object, [nested routes]:Array]

var LOCALE_DEFAULTS = '*-*';
var EN_GB = 'en-gb';
var FR_FR = 'fr-fr';

var ALLOWED_LOCALES = [EN_GB, FR_FR];

var config = [
    [Home, {
        [LOCALE_DEFAULTS]: {
            path: '/',
        },
        [EN_GB]: {
            title: 'Home',
            description: 'Home',
        },
        [FR_FR]: {
            title: 'French home',
            description: 'French home',
        }
    }, [
        [Pricing, {
            [EN_GB]: {
                path: '/pricing',
                title: 'Pricing',
                description: 'Pricing',
            },
            [FR_FR]: {
                path: '/tarifs',
                title: 'French pricing',
                description: 'French pricing',
            }
        }]
    ]],
    [About, {
        [EN_GB]: {
            path: '/about',
            title: 'Home',
            description: 'Home',
        },
        [FR_FR]: {
            path: '/a-propos',
            title: 'French home',
            description: 'French home',
        }
    }],
    [null, {
        [EN_GB]: {
            path: '/faq',
            redirectTo: FAQMerchants,
        }
    }],
    [FAQMerchants, {
        [EN_GB]: {
            path: '/faq/merchants',
            title: 'FAQMerchants',
            description: 'FAQMerchants',
        }
    }],
];

function pathToLocale(path, locale) {
  if (locale === EN_GB) return url.resolve('/', path);
  return ['/', locale, path].join('/').replace(/\/\//g, '/');
}

function validatePages(pages) {
  return;
}

function validateLocale(locale) {
  if (!_.contains(ALLOWED_LOCALES, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${ALLOWED_LOCALES.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale) {
  validatePages(pages);
  validateLocale(locale);
  return pages.reduce(function(pages, page) {
    page = _.cloneDeep(page);
    if (locale in page[1]) {
      page[1] = _.extend(page[1][LOCALE_DEFAULTS ] || {}, page[1][locale]);
      page[1].path = pathToLocale(page[1].path, locale);
      if (_.isArray(page[2])) {
        page[2] = flattenPagesForLocale(page[2], locale);
      }
      pages.push(page);
    }
    return pages;
  }, []);
}

function getRoutesForPages(pages) {
  return pages.map(function(page) {
    if (page[0] === null) {
      return [(
        <Redirect from={page[1].path}
          to={page[1].redirectTo.name || page[1].redirectTo}
          key={page[1].path}>
          {page[2] && getRoutesForPages(page[2]) || null}
        </Redirect>
      )];
    } else {
      return [(
        <Route name={page[0].name}
               key={page[0].name}
               handler={page[0]}
               {...page[1]}>
          {page[2] && getRoutesForPages(page[2]) || null}
        </Route>
      )];
    }
  });
}

function defaultRouteParams(route) {
  route = _.cloneDeep(route);
  delete route.path;
  return route;
}

export function getRoutes(locale) {
  var pages = flattenPagesForLocale(config, locale);

  return (
    <Route name={pages[0][0].name} path={pages[0][1].path} handler={App}>
      {getRoutesForPages(pages.slice(1))}

      <DefaultRoute handler={pages[0][0]} {...defaultRouteParams(pages[0][1])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}
