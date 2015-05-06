import React from 'react';
import { getIntlMessage } from '../intl/intl';
import { FormattedMessage } from 'react-intl';

class IntlMessage extends React.Component {
  displayName = 'IntlMessage'

  static propTypes = {
    message: React.PropTypes.string.isRequired,
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <FormattedMessage message={getIntlMessage(this.context.messages, this.props.message)} />
    );
  }
}

export default IntlMessage;
