import assign from 'lodash/object/assign';
import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import { getMessage } from '../../components/intl/intl';

export default class SchemaItemProp extends React.Component {
  displayName = 'SchemaItemProp'

  static propTypes = {
    pointer: PropTypes.string,
    itemProp: PropTypes.string.isRequired,
    tagName: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    tagName: 'span',
  }

  render() {
    const { messages } = this.context;
    var pointer;
    if (this.props.pointer) {
      pointer = getMessage(messages, this.props.pointer);
    }
    const tagName = this.props.tagName;
    const content = pointer || this.props.content;
    const props = assign({}, this.props, {
      content: content,
      tagName: null,
    });

    const child = tagName === 'meta' ? null : this.props.children || content;
    return React.createElement(this.props.tagName, props, child);
  }
}
