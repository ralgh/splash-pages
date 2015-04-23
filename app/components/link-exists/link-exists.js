import React, { PropTypes } from 'react';

class LinkExists extends React.Component {

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  render() {
    var hasLink;
    // If an exception is thrown, assume the link isn't found.
    try {
      hasLink = !!(this.context.router.makePath(this.props.to, this.props.params, this.props.query));
    } catch (e) {
      hasLink = false;
    }

    return (
      <div>{ hasLink && this.props.children }</div>
    );
  }
}

export default LinkExists;
