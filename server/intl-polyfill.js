/* global Intl */

import { hasBuiltInLocaleData } from '../app/helpers/intl-polyfill/intl-polyfill.js';

module.exports = function(locales) {
  if (locales) {
    if (global.Intl) {
      if (!locales.every(hasBuiltInLocaleData)) {
        const IntlPolyfill = require('intl');
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
      }
    } else {
      global.Intl = require('intl');
    }
  }
};
