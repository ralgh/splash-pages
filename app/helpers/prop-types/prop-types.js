import {validateLocaleOrLanguage} from '../locale-helper/locale-helper';
import _ from 'lodash';

export const PropTypes = {
  locale(props, propName) {
    return _.every(_.flatten([props[propName]]), function(locale) {
      return validateLocaleOrLanguage(locale);
    });
  },
};
