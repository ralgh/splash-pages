import React from 'react';

class LinkExists extends React.Component {
  var hasLink = !!this.context.router.makeHref(this.props.to, this.props.params, this.props.query);

  render() {
    return (
      { hasLink &&
        this.props.children
      }
    );
  }
}

export default LinkExists;
