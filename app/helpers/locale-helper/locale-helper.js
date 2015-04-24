import locale from 'locale';
import _ from 'lodash';

export var defaultLocale = 'en-GB';

export function pathLocale(testPath) {
  var localePath = (testPath || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})\//);
  //var foundLocale = locale.Locale.default;
  var foundLocale = new locale.Locale(defaultLocale);
  locale.Locale.default = foundLocale;
  if (localePath && localePath[1]) {
    foundLocale = new locale.Locale(localePath[1]);
  }
  return foundLocale;
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

