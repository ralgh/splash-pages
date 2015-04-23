import {availableLocales} from '../locale-helper/locale-helper';

var hasNativeIntl = !!global.Intl;

// Determine if the native `Intl` has the locale data we need.
var hasNativeLocaleData = hasNativeIntl &&
  availableLocales.every(function (locale) {
    return Intl.NumberFormat.supportedLocalesOf(locale)[0] === locale;
  });

if (!hasNativeIntl) {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require('intl');
} else if (!hasNativeLocaleData) {
  // `Intl` exists, but it doesn't have the data we need, so load the polyfill
  // and replace the constructors with need with the polyfill's.
  var IntlPolyfill = require('intl');
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
}
