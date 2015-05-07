import {validateLocale} from '../locale-helper/locale-helper';

export const PropTypes = {
  locale(props, propName) {
    if (!Array.isArray(props[propName])) {
      return validateLocale(props[propName]);
    }
    props[propName].forEach(function(locale) {
      validateLocale(locale);
    });
  },
};
