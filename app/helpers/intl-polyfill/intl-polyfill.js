import {availableLocales} from '../locale-helper/locale-helper';

var polyfillGlobal;
if (typeof global === 'undefined') {
  polyfillGlobal = window;
} else {
  polyfillGlobal = global;
}

var hasNativeIntl = !!polyfillGlobal.Intl;

// `Intl` exists, but it doesn't have the data we need, so load the polyfill
// and replace the constructors with need with the polyfill's.
var hasNativeLocaleData = hasNativeIntl &&
  availableLocales.every(function(locale) {
    return Intl.NumberFormat.supportedLocalesOf(locale)[0] === locale;
  });

if (!hasNativeIntl) {
  polyfillGlobal.Intl = System.import('intl');
} else if (!hasNativeLocaleData) {
  var IntlPolyfill = System.import('intl');
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
}
