import path from 'path';
import glob from 'glob';
import {validateLocale} from '../app/helpers/locale-helper/locale-helper';

var availableLocales = glob.sync(path.join(__dirname, '..', 'app', 'messages', '*-*.js'))
.map(function(file) {
  return path.basename(file, '.js');
})
.map(validateLocale);

export default availableLocales;
