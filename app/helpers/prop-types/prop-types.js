import {validateLocale} from '../locale-helper/locale-helper';

export const PropTypes = {
  locale(props, propName) {
    validateLocale(props[propName]);
  },
};
