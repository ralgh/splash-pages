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

import {availableLocales, defaultLocale} from '../helpers/locale-helper/locale-helper';

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
  if (locale === defaultLocale) {
    return path;
  }
}

function pathToLocale(path, locale) {
  if (locale === defaultLocale) { return path; }
  return ['/', locale.toLowerCase(), path].join('/').replace(/\/\//g, '/');
}

function validatePages(pages) {
  return (pages.length !== 0);
}

function validateLocale(locale) {
  if (!_.contains(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale) {
  validatePages(pages);
  validateLocale(locale);
  return pages.reduce(function(pagesInner, page) {
    page = _.cloneDeep(page);
    if (locale in page[1]) {
      page[1] = page[1][locale];
      page[1].path = pathToLocale(page[1].path, locale);
      page[1].path = page[1].path.replace(/^\/|\/$/g, '');
      page[1].path = '/' + page[1].path;
      if (_.isArray(page[2])) {
        page[2] = flattenPagesForLocale(page[2], locale);
      }
      pagesInner.push(page);
    }
    return pagesInner;
  }, []);
}

function getRoutesForPages(pages) {
  return pages.map(function(page) {
    if (page[0] === null) {
      return [
        (
          <Redirect from={page[1].path}
            to={page[1].redirectTo.name || page[1].redirectTo}
            key={page[1].path}>
            {page[2] && getRoutesForPages(page[2]) || null}
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
            {page[2] && getRoutesForPages(page[2]) || null}
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
