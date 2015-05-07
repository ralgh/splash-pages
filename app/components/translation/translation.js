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
    const hasLocale = _.includes(locales, this.context.locales);

    return (
      <div>
        { hasLocale &&
            this.props.children }
      </div>
    );
  }
}
