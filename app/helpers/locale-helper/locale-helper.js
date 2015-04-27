import locale from 'locale';
import _ from 'lodash';

export var defaultLocale = 'en-GB';

export function pathLocale(path) {
  var localePath = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})/);
  var foundLocale;
  if (localePath && localePath[1]) {
    foundLocale = new locale.Locale(localePath[1]);
  }
  return foundLocale || new locale.Locale(defaultLocale);
}

export function normalizeLocale(localeData) {
  localeData = _.cloneDeep(localeData);
  localeData.normalized = localeData.normalized.replace('_', '-');
  return localeData;
}

export function validateLocale(localeToValidate) {
  if (!localeToValidate.match(/[a-z]{2,2}\-[A-Z]{2,2}/)) {
    throw new Error(`Locale not valid ${localeToValidate}`);
  }
  return localeToValidate;
}

