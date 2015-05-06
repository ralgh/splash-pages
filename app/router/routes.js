import _ from 'lodash';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

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
import Pro from '../pages/pro/pro';
import ContactSales from '../pages/contact-sales/contact-sales';
import Features from '../pages/features/features';

import {defaultLocale} from '../helpers/locale-helper/locale-helper';

export var homeRoute = 'home';

var config = [
  [Home, { name: homeRoute }, {
      'en-GB': {
          path: '/',
      },
      'fr-FR': {
          path: '/',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      'en-GB': {
          path: '/pricing',
      },
      'fr-FR': {
          path: '/tarifs',
      },
    },
  ],
  [Pro, { name: 'pro' }, {
      'en-GB': {
          path: '/pro',
      },
      'fr-FR': {
          path: '/pro',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      'en-GB': {
          path: '/contact-sales',
      },
      'fr-FR': {
          path: '/contactez-nous',
      },
    },
  ],
  [Features, { name: 'features' }, {
      'en-GB': {
          path: '/features',
      },
    },
  ],
  [About, { name: 'about' }, {
      'en-GB': {
          path: '/about',
      },
      'fr-FR': {
          path: '/a-propos',
      },
    },
  ],
  [null, null, {
      'en-GB': {
          path: '/faq',
          redirectTo: 'faq_merchants',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants' }, {
      'en-GB': {
          path: '/faq/merchants',
      },
    },
  ],
];

function pathWithLocale(path, locale) {
  if (!path || path.indexOf('/') !== 0) {
    throw new TypeError('Path not valid, must begin with `/`');
  }
  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/\//g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  return '/' + localePath;
}

function validatePages(pages) {
  return (pages.length !== 0);
}

function validateLocale(locale, availableLocales) {
  if (!_.includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);
  return pages.reduce(function(pagesInner, page) {
    page = _.cloneDeep(page);
    if (locale in page[2]) {
      page[2] = page[2][locale];
      const matchOptionalSlash = '/?';
      page[2].path = pathWithLocale(page[2].path, locale) + matchOptionalSlash;
      if (_.isArray(page[3])) {
        page[3] = flattenPagesForLocale(page[3], locale, availableLocales);
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
          <Redirect
            from={page[2].path}
            to={page[2].redirectTo}
            key={page[2].redirectTo + '_redirect'}>
            {page[3] && getRoutesForPages(page[3], availableLocales) || null}
          </Redirect>
        ),
      ];
    } else {
      return [
        (
          <Route key={page[1].name}
            name={page[1].name}
            path={page[2].path}
            handler={page[0]}>
            {page[3] && getRoutesForPages(page[3], availableLocales) || null}
          </Route>
        ),
      ];
    }
  });
}

export function getLocalesForRouteName(routeName, givenConfig=config) {
  var foundPage;

  givenConfig.some(function(page, index) {
    if (page[1] && page[1].name === routeName) {
      foundPage = givenConfig[index];
    } else if (_.isArray(page[3])) {
      foundPage = getLocalesForRouteName(routeName, page[3]);
    }
    return !!foundPage;
  });

  if (foundPage) {
    foundPage = foundPage[2];
    foundPage = _.cloneDeep(foundPage);
    Object.keys(foundPage).forEach(function(locale) {
      const destPath = pathWithLocale(foundPage[locale].path, locale);
      foundPage[locale].path = destPath;
    });
  }

  return foundPage;
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  var pages = flattenPagesForLocale(givenConfig, locale, availableLocales);
  return (
    <Route path={pages[0][2].path} handler={App}>
      {getRoutesForPages(pages.slice(1), availableLocales)}

      <DefaultRoute handler={pages[0][0]} name={pages[0][1].name} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}
