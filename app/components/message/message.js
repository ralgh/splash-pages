import React from 'react';
import { getMessage } from '../intl/intl';

export default class Message extends React.Component {
  displayName = 'Message'

  static propTypes = {
    pointer: React.PropTypes.string.isRequired,
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <span>
        { getMessage(this.context.messages, this.props.pointer) }
      </span>
    );
  }
}
