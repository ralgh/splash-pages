import assign from 'lodash/object/assign';
import each from 'lodash/collection/each';
import flatten from 'lodash/array/flatten';
import React from 'react';
import { validateLocaleOrLanguage } from '../locale-helper/locale-helper';

export const PropTypes = assign({}, React.PropTypes, {
  locale(props, propName) {
    each(flatten([props[propName]]), function(locale) {
      if (!validateLocaleOrLanguage(locale)) {
        throw new Error(`Locale invalid (${locale})`);
      }
    });
  },
});
