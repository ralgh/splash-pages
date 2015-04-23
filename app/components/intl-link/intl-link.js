import React, { PropTypes } from 'react';
import IntlMessage from '../intl-message/intl-message';
import { Link } from 'react-router';

export default class IntlLink extends React.Component {

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Link {...this.props}><IntlMessage message={this.props.message} /></Link>
    );
  }
}
