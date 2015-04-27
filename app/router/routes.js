import _ from 'lodash';
import Router from 'react-router';
var {Route, DefaultRoute, NotFoundRoute, Redirect} = Router;

// This is internally used within jsx, so ignore the unused error.
/*eslint-disable */
import React from 'react';
/*eslint-enable */

import App from '../components/app/app';

import NotFound from '../pages/not-found/not-found';
import FaqMerchants from '../pages/faq/merchants/merchants';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Pricing from '../pages/pricing/pricing';

import {defaultLocale} from '../helpers/locale-helper/locale-helper';

class Ball {}

var config = [
  [Home, {
      'en-GB': {
          path: '/',
      },
      'fr-FR': {
          path: '/',
      },
    },
  ],
  [Pricing, {
      'en-GB': {
          path: '/pricing',
      },
      'fr-FR': {
          path: '/tarifs',
      },
    },
  ],
  [About, {
      'en-GB': {
          path: '/about',
      },
      'fr-FR': {
          path: '/a-propos',
      },
    },
  ],
  [null, {
      'en-GB': {
          path: '/faq',
          redirectTo: FaqMerchants,
      },
    },
  ],
  [FaqMerchants, {
      'en-GB': {
          path: '/faq/merchants',
      },
    },
  ],
];

function pathToLocale(path, locale) {
  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/\//g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  localePath = '/' + localePath;
  return localePath;
}

function validatePages(pages) {
  return (pages.length !== 0);
}

function validateLocale(locale, availableLocales) {
  if (!_.contains(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);
  return pages.reduce(function(pagesInner, page) {
    page = _.cloneDeep(page);
    if (locale in page[1]) {
      page[1] = page[1][locale];
      page[1].path = pathToLocale(page[1].path, locale);
      if (_.isArray(page[2])) {
        page[2] = flattenPagesForLocale(page[2], locale, availableLocales);
      }
      pagesInner.push(page);
    }
    return pagesInner;
  }, []);
}

function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    if (page[0] === null) {
      return [
        (
          <Redirect from={page[1].path}
            to={page[1].redirectTo.name || page[1].redirectTo}
            key={page[1].path}>
            {page[2] && getRoutesForPages(page[2], availableLocales) || null}
          </Redirect>
        ),
      ];
    } else {
      return [
        (
          <Route name={page[0].name}
                 key={page[0].name}
                 handler={page[0]}
                 {...page[1]}>
            {page[2] && getRoutesForPages(page[2], availableLocales) || null}
          </Route>
        ),
      ];
    }
  });
}

function defaultRouteParams(route) {
  route = _.cloneDeep(route);
  delete route.path;
  return route;
}

function findRelatedForRouteName(pages, routeName) {
  var foundPage;
  pages.some(function(page, index) {
    if (page[0] && page[0].name === routeName) {
      foundPage = pages[index];
    } else if (_.isArray(page[2])) {
      foundPage = findRelatedForRouteName(page[2], routeName);
    }
    return !!(foundPage);
  });
  if (foundPage) {
    foundPage = foundPage[1];
    foundPage = _.cloneDeep(foundPage);
    Object.keys(foundPage).forEach(function(locale) {
      foundPage[locale].path = pathToLocale(foundPage[locale].path, locale);
    });
  }
  return foundPage;
}

export function getLocalesForRouteName(routeName) {
  return findRelatedForRouteName(config, routeName);
}

export function getRoutes(locale, availableLocales) {
  var pages = flattenPagesForLocale(config, locale, availableLocales);

  return (
    <Route name={pages[0][0].name} path={pages[0][1].path} handler={App}>
      {getRoutesForPages(pages.slice(1), availableLocales)}

      <DefaultRoute handler={pages[0][0]} {...defaultRouteParams(pages[0][1])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}
