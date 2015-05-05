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
    return (
      <div>
        { this.context.locales === this.props.locales &&
            this.props.children }
      </div>
    );
  }
}
