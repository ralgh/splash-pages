import React, { PropTypes } from 'react';

class LinkExists extends React.Component {

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  render() {
    var hasLink = !!(this.context.router.makeHref(this.props.to, this.props.params, this.props.query));
    return (
      <div>{ hasLink && this.props.children }</div>
    )
  }
}

export default LinkExists;
