import React from 'react';
import {getIntlMessage} from '../intl/intl';
import {FormattedMessage} from 'react-intl';

export default class IntlMessage extends React.Component {
  render() {
    return (
      <FormattedMessage message={getIntlMessage(this.context.messages, this.props.message)} />
    );
  }
}

IntlMessage.propTypes = {
  message: React.PropTypes.string.isRequired,
};

IntlMessage.contextTypes = {
  messages: React.PropTypes.object.isRequired,
};
