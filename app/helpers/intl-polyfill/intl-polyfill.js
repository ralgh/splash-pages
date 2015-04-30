export function hasBuiltInLocaleData(locale) {
  return (Intl.NumberFormat.supportedLocalesOf(locale)[0] === locale &&
    Intl.DateTimeFormat.supportedLocalesOf(locale)[0] === locale);
}

export function loadIntlPolyfill(availableLocales) {
  return new Promise((resolve) => {
    var hasEveryLocale = availableLocales.every(hasBuiltInLocaleData);

    if (window.Intl && hasEveryLocale) {
      return resolve();
    }

    require.ensure(['intl'], (require) => {
      const IntlPolyfill = require('intl');

      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

      resolve();
    }, 'intl');
  });
}

