export default function(availableLocales) {
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

  function doImport(name) {
    return require(name);
  }

  if (!hasNativeIntl) {
    var intlReq = require('intl');
    polyfillGlobal.Intl = intlReq;
  } else if (!hasNativeLocaleData) {
    var intlReq = require('intl');
    Intl.NumberFormat = intlReq.NumberFormat;
    Intl.DateTimeFormat = intlReq.DateTimeFormat;
  }
}
