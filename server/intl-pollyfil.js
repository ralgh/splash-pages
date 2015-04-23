import {availableLocales} from '../config/locale';

var hasNativeIntl = !!global.Intl;

// `Intl` exists, but it doesn't have the data we need, so load the polyfill
// and replace the constructors with need with the polyfill's.
var hasNativeLocaleData = hasNativeIntl &&
  availableLocales.every(function(locale) {
    return Intl.NumberFormat.supportedLocalesOf(locale)[0] === locale;
  });

if (!hasNativeIntl) {
  global.Intl = require('intl');
} else if (!hasNativeLocaleData) {
  var IntlPolyfill = require('intl');
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
}
