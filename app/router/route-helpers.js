import React from 'react';
import Immutable from 'immutable';
import { Route, Redirect } from 'react-router';
import { defaultLocale } from '../helpers/locale-helper/locale-helper';
import _ from 'lodash';

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
  if (pages.size < 1) {
    throw new TypeError('pages must not be empty');
  }
}

function validateLocale(locale, availableLocales) {
  if (!_.includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

export function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);

  function setLocaleConfigPath(page) {
    const path = page.getIn(['localeConfig', locale, 'path']);
    const matchOptionalSlash = '/?';

    return page.setIn(['localeConfig', 'path'], pathWithLocale(path, locale) + matchOptionalSlash);
  }

  function setLocaleConfigRedirectTo(page) {
    const redirectTo = page.getIn(['localeConfig', locale, 'redirectTo']);

    return page.setIn(['localeConfig', 'redirectTo'], redirectTo);
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
              .map(setLocaleConfigRedirectTo)
              .map(flattenChildConfig);
}

export function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    const handler = page.get('handler');
    const routeConfig = page.get('routeConfig');
    const localeConfig = page.get('localeConfig');
    const childConfig = page.get('childConfig');

    if (handler === null) {
      return (
        <Redirect
          from={localeConfig.get('path')}
          to={localeConfig.get('redirectTo')}
          key={localeConfig.get('redirectTo') + '_redirect'}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Redirect>
      );
    } else {
      return (
        <Route key={routeConfig.get('name')}
          name={routeConfig.get('name')}
          path={localeConfig.get('path')}
          handler={handler}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Route>
      );
    }
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
        return memo.setIn([locale, 'path'], pathWithLocale(localeSpecificConfig.get('path'), locale));
      }, Immutable.Map());
    });
  }

  return givenConfig.map(transformConfigItems)
                    .flatMap(expandChildConfig)
                    .map(setLocalePaths);
}

