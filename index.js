require('babel/register');

var availableLocales = require('./config/available-locales');
require('./server/intl-polyfill')(availableLocales);

require('./server/server');
