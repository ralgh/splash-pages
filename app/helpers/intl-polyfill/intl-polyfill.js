
export default function (availableLocales) {

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

  function doImport(name, cb) {
    if (typeof window === 'undefined') {
      return require(name);
    } else {
      return System.import(name).then(cb);
    }
  }

  if (!hasNativeIntl) {
     doImport('intl', (intlReq) => {
      polyfillGlobal.Intl = intlReq;
    });
  } else if (!hasNativeLocaleData) {
    doImport('intl', (IntlPolyfill) => {
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    });
  }
}
