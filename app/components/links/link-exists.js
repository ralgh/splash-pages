import React from 'react';

export default class LinkExists extends React.Component {
  var hasLink = !!this.context.router.makeHref(this.props.to, this.props.params, this.props.query);

  render() {
    return (
      { hasLink &&
        this.props.children
      }
    );
  }
}
