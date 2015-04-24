require('babel/register');

var availableLocales = require('./config/available-locales');
require('./app/helpers/intl-polyfill/intl-polyfill')(availableLocales);

require('./server/server');
