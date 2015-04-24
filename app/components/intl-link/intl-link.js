import React from 'react';
import IntlMessage from '../intl-message/intl-message';
import Router from 'react-router';
var { Link } = Router;

export default class IntlLink extends React.Component {
  displayName = 'IntlLink'

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  };

  static propTypes = {
    message: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Link {...this.props}><IntlMessage message={this.props.message} /></Link>
    );
  }
}
