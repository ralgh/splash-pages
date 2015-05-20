import locale from 'locale';
import cloneDeep from 'lodash/lang/cloneDeep';
import includes from 'lodash/collection/includes';
import flatten from 'lodash/array/flatten';
import uniq from 'lodash/array/uniq';

export const defaultLocale = 'en-GB';

function normalizeLocale(localeData) {
  const normalizedLocale = cloneDeep(localeData);
  normalizedLocale.normalized = (normalizedLocale.normalized || '').replace('_', '-');
  return normalizedLocale;
}

export function pathToLocale(path, availableLocales) {
  const pathLocale = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})/);
  const foundLocale = new locale.Locale(pathLocale && pathLocale[1]);
  const normalizedLocale = normalizeLocale(foundLocale);
  if (!includes(availableLocales, normalizedLocale.normalized)) {
    return normalizeLocale(new locale.Locale(defaultLocale));
  }
  return normalizedLocale;
}

export function validateLocale(localeStr) {
  if (!localeStr.match(/[a-z]{2,2}\-[A-Z]{2,2}/)) {
    throw new TypeError(`Locale not valid ${localeStr}`);
  }
  return localeStr;
}

export function validateLocaleOrLanguage(localeStr) {
  return !!(localeStr.match(/^[a-z]{2}$/) || validateLocale(localeStr));
}

export function localeToLanguage(localeStr) {
  return localeStr.slice(0, 2).toLowerCase();
}

export function localeToRegion(localeStr) {
  return localeStr.slice(3, 5).toUpperCase();
}

export function expandLangLocales(currentLocales, availableLocales) {
  return flatten(uniq(currentLocales.reduce(function(memo, currentLocale) {
    if (localeToRegion(currentLocale)) {
      memo.push(currentLocale);
    } else {
      const locales = availableLocales.filter(function(availableLocale) {
        return localeToLanguage(availableLocale) === currentLocale;
      });
      memo.push(locales);
    }
    return memo;
  }, [])));
}
