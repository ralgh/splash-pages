import includes from 'lodash/collection/includes';
import React from 'react';
import Immutable from 'immutable';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import { defaultLocale } from '../helpers/locale-helper/locale-helper';
import NotFound from '../pages/not-found/not-found';
import App from '../components/app/app';
import { config } from './routes';

function pathWithLocale(path, locale) {
  if (!path || path.indexOf('/') !== 0) {
    throw new TypeError('Path not valid, must begin with `/`');
  }

  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/+/g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  return localePath ? `/${localePath}/` : '/';
}

function validatePages(pages) {
  if (pages.size < 1) {
    throw new TypeError('pages must not be empty');
  }
}

function validateLocale(locale, availableLocales) {
  if (!includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

export function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);

  function setLocaleConfigPath(page) {
    const path = page.getIn(['localeConfig', locale, 'path']);
    const matchOptionalSlash = '?';
    return page.setIn(['localeConfig', 'path'], pathWithLocale(path, locale) + matchOptionalSlash);
  }

  function flattenChildConfig(page) {
    if (Immutable.List.isList(page.get('childConfig'))) {
      return page.set('childConfig', flattenPagesForLocale(page.get('childConfig'), locale, availableLocales));
    } else {
      return page;
    }
  }

  return pages.filter((page) => page.get('localeConfig').has(locale))
              .map(setLocaleConfigPath)
              .map(flattenChildConfig);
}

export function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    const handler = page.get('handler');
    const routeConfig = page.get('routeConfig');
    const localeConfig = page.get('localeConfig');
    const childConfig = page.get('childConfig');

    return (
      <Route key={routeConfig.get('name')}
        name={routeConfig.get('name')}
        path={localeConfig.get('path')}
        handler={handler}>
        {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
      </Route>
    );
  });
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
export function transformConfigItems(arg) {
  const [handler, routeConfig, localeConfig, childConfig] = arg.toArray();

  if (Immutable.List.isList(childConfig) && Immutable.List.isList(childConfig.first())) {
    return transformConfigItems(Immutable.List([ handler, routeConfig, localeConfig, childConfig.map(transformConfigItems) ]));
  } else {
    return Immutable.Map({ handler, routeConfig, localeConfig, childConfig });
  }
}

export function expandConfig(givenConfig) {
  function expandChildConfig(page) {
    const childConfig = page.get('childConfig');

    if (Immutable.List.isList(childConfig)) {
      return childConfig.flatMap(expandChildConfig).push(page);
    } else {
      return Immutable.List([page]);
    }
  }

  function setLocalePaths(page) {
    return page.update('localeConfig', function(localeConfig) {
      return localeConfig.reduce(function(memo, localeSpecificConfig, locale) {
        const path = pathWithLocale(localeSpecificConfig.get('path'), locale);
        return memo.setIn([locale, 'path'], path);
      }, Immutable.Map());
    });
  }

  return givenConfig.map(transformConfigItems)
                    .flatMap(expandChildConfig)
                    .map(setLocalePaths);
}

export function getLocalesForRouteName(routeName, givenConfig=config) {
  const expanded = expandConfig(givenConfig);
  const foundPage = expanded.find((page) => page.getIn(['routeConfig', 'name']) === routeName);

  if (foundPage) {
    return foundPage.get('localeConfig').toJS();
  }
}

export function filterRouteByCategory(routeCategory, locale, givenConfig=config) {
  const expanded = expandConfig(givenConfig);
  const foundPages = expanded.filter((page) => {
    const category = page.getIn(['routeConfig', 'category']);
    if (!category) { return false; }
    const categoryParts = category.split('.');
    return routeCategory.split('.').every(function(part, i) {
      return part === categoryParts[i];
    });
  });

  return foundPages
    .filter((page) => page.get('localeConfig').has(locale))
    .map((page) => {
      return page.setIn(['localeConfig', 'path'], page.getIn(['localeConfig', locale, 'path']));
    })
    .toJS();
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  const flattenedRoutes = flattenPagesForLocale(givenConfig.map(transformConfigItems), locale, availableLocales);
  const homePage = flattenedRoutes.first();

  return (
    <Route path={homePage.getIn(['localeConfig', 'path'])} handler={App}>
      {getRoutesForPages(flattenedRoutes.rest(), availableLocales)}

      <DefaultRoute handler={homePage.get('handler')} name={homePage.getIn(['routeConfig', 'name'])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}

export function getAllPaths(givenConfig=config) {
  const expanded = expandConfig(givenConfig);

  return expanded.flatMap((page) => page.get('localeConfig').valueSeq())
                 .map((localeConfig) => localeConfig.get('path'));
}
