import React from 'react';
import {getIntlMessage} from '../intl/intl';
import ReactIntl from 'react-intl';
var { FormattedMessage } = ReactIntl;

class IntlMessage extends React.Component {
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
