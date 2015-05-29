import flatten from 'lodash/array/flatten';
import any from 'lodash/collection/any';
import partial from 'lodash/function/partial';
import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import { expandLangLocales } from '../../helpers/locale-helper/locale-helper';

function hasLocale(allowedLocales, currentLocale) {
  return any(allowedLocales, (locale) => currentLocale === locale);
}

function validateLocale(translationLocales, routeLocales, routeName) {
  const localesAllowed = any(translationLocales, partial(hasLocale, routeLocales));

  if (!localesAllowed) {
    throw new Error(
      `Translation locales not allowed (${translationLocales}), allowed: (${routeLocales}), route: ${routeName}`
    );
  }
}

export default class Translation extends React.Component {
  displayName = 'Translation'

  static propTypes = {
    locales: PropTypes.locale,
    children: PropTypes.node.isRequired,
    exclude: PropTypes.array,
    tagName: React.PropTypes.string,
  }

  static defaultProps = {
    tagName: 'span',
  }

  static contextTypes = {
    currentLocale: PropTypes.locale,
    routeLocales: PropTypes.array.isRequired,
    routeName: PropTypes.string.isRequired,
  }

  render() {
    const locales = flatten([this.props.locales]);
    const exclude = flatten([this.props.exclude]);
    const { currentLocale, routeLocales, routeName } = this.context;
    const translationLocales = expandLangLocales(locales, routeLocales);
    validateLocale(translationLocales, routeLocales, routeName);

    const isExcluded = hasLocale(exclude, currentLocale);
    const isVisible = !isExcluded && hasLocale(translationLocales, currentLocale);

    if (!isVisible) { return null; }
    return React.createElement(this.props.tagName, this.props, this.props.children);
  }
}
