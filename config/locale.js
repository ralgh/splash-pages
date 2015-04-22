import glob from 'glob';
import path from 'path';

export var defaultLocale = 'en-GB';

function validateLocale(locale) {
  if (!locale.match(/[a-z]{2,2}\-[A-Z]{2,2}/)) {
    throw new Error(`Locale not valid ${locale}`);
  }
  return locale;
}

export var availableLocales = glob.sync(path.join(__dirname, '..', 'app', 'messages', '*-*.js'))
  .map(function (file) {
    return path.basename(file, '.js');
  })
  .map(validateLocale);
