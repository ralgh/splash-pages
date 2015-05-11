import _ from 'lodash';
import React from 'react';
import {PropTypes} from '../../helpers/prop-types/prop-types';

export default class Translation extends React.Component {
  displayName = 'Translation'

  static contextTypes = {
    locales: PropTypes.locale,
  }

  static propTypes = {
    locales: PropTypes.locale,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    const locales = _.flatten([this.props.locales]);
    const currentLocale = this.context.locales;
    const hasLocale = _.any(locales, function(localeToCheck) {
      if (localeToCheck.indexOf('-') === -1) {
        return currentLocale.indexOf(localeToCheck + '-') === 0;
      }
      return currentLocale === localeToCheck;
    });

    return (
      <div>
        { hasLocale &&
            this.props.children }
      </div>
    );
  }
}
