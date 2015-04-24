import _ from 'lodash';
import fs from 'fs';
import path from 'path';

import availableLocales from './available-locales';

var langLocales = {};

function langFromLocale(locale) {
  return locale.slice(0, 2);
}

var availableLanguages = availableLocales.map(langFromLocale);

availableLocales.concat(availableLanguages).map(function(locale) {
  var filePath = path.join(__dirname, '..', 'app', 'messages', locale + '.js');
  var exists;
  try {
    var stat = fs.statSync(filePath);
    exists = stat.isFile();
  } catch (e) {
    exists = false;
  }
  return [locale, filePath, exists];
}).filter(function(locale) {
  return locale[2];
}).forEach(function(locale) {
  langLocales[locale[0]] = require(locale[1]);
});

export default availableLocales.reduce(function(locales, locale) {
  var lang = langFromLocale(locale);
  locales[locale] = _.merge({}, langLocales[lang], langLocales[locale]);
  return locales;
}, {});
