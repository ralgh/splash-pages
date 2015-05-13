import assign from 'lodash/object/assign';
import every from 'lodash/collection/every';
import flatten from 'lodash/array/flatten';
import React from 'react';
import { validateLocaleOrLanguage } from '../locale-helper/locale-helper';

export const PropTypes = assign({}, React.PropTypes, {
  locale(props, propName) {
    return every(flatten([props[propName]]), function(locale) {
      return validateLocaleOrLanguage(locale);
    });
  },
});
