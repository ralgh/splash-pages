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
import Security from '../pages/security/security';

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
      'fr-BE': {
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
      'fr-BE': {
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
      'fr-BE': {
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
      'fr-BE': {
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
  [Security, { name: 'security' }, {
      'en-GB': {
          path: '/security',
      },
      'fr-FR': {
          path: '/securite',
      },
      'fr-BE': {
          path: '/securite',
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
      'fr-BE': {
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
  if (pages.length < 1) {
    throw new TypeError('pages must not be empty');
  }
}

function validateLocale(locale, availableLocales) {
  if (!_.includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);

  function setLocaleConfigPath(page) {
    const matchOptionalSlash = '/?';

    return _.merge({}, page, {
      localeConfig: {
        path: pathWithLocale(page.localeConfig[locale].path, locale) + matchOptionalSlash,
      },
    });
  }

  function flattenChildConfig(page) {
    if (Array.isArray(page.childConfig)) {
      return _.merge({}, page, {
        childConfig: flattenPagesForLocale(page.childConfig, locale, availableLocales),
      });
    } else {
      return page;
    }
  }

  return pages.filter((page) => page.localeConfig.hasOwnProperty(locale))
              .map(setLocaleConfigPath)
              .map(flattenChildConfig);
}

function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    const { handler, routeConfig, localeConfig, childConfig } = page;

    if (handler === null) {
      return (
        <Redirect
          from={localeConfig.path}
          to={localeConfig.redirectTo}
          key={localeConfig.redirectTo + '_redirect'}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Redirect>
      );
    } else {
      return (
        <Route key={routeConfig.name}
          name={routeConfig.name}
          path={localeConfig.path}
          handler={handler}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Route>
      );
    }
  });
}

function findRouteByName(routeName, transformedConfig) {
  function fanOutConfig(page) {
    const { childConfig } = page;

    if (Array.isArray(childConfig)) {
      return childConfig.map(fanOutConfig).concat(page);
    } else {
      return page;
    }
  }

  return _.chain(transformedConfig)
          .map(fanOutConfig)
          .flatten()
          .find(({ routeConfig }) => routeConfig && routeConfig.name === routeName)
          .value();
}

/**
 * Returns an easier to work with version of a 'route config' entry, applying the same
 * transformation to any `childConfig`s
 * @param {Array} configItem e.g. [ReactComponent, Object, Object, [[ReactComponent, Object, Object], ...]]
 * @returns {Object} e.g.:
 *   {
 *     handler: ReactComponent,
 *     routeConfig: Object,
 *     localeConfig: Object,
 *     childConfig: [{
 *       handler: ReactComponent,
 *       routeConfig: Object,
 *       localeConfig: Object,
 *       childConfig: ...
 *     }, ...]
 *   }
 */
function transformConfig([handler, routeConfig, localeConfig, childConfig]) {
  if (Array.isArray(childConfig) && Array.isArray(childConfig[0])) {
    return transformConfig([ handler, routeConfig, localeConfig, childConfig.map(transformConfig) ]);
  } else {
    return { handler, routeConfig, localeConfig, childConfig };
  }
}

export function getLocalesForRouteName(routeName, givenConfig=config) {
  const transformedConfig = givenConfig.map(transformConfig);
  const page = findRouteByName(routeName, transformedConfig);
  if (!page) { return undefined; }

  const { localeConfig } = page;

  return _.reduce(localeConfig, function(memo, routeConfig, localeKey) {
    return _.extend(memo, {
      [localeKey]: { path: pathWithLocale(routeConfig.path, localeKey) },
    });
  }, {});
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  const transformedConfig = givenConfig.map(transformConfig);
  const [homePage, ...rest] = flattenPagesForLocale(transformedConfig, locale, availableLocales);

  return (
    <Route path={homePage.localeConfig.path} handler={App}>
      {getRoutesForPages(rest, availableLocales)}

      <DefaultRoute handler={homePage.handler} name={homePage.routeConfig.name} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}
