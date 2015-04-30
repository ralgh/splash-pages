import React from 'react';

var stubContext = function(Component, { props, context }) {
  return class extends React.Component {
    static childContextTypes = {
      locales: React.PropTypes.oneOfType([
        React.PropTypes.string.isRequired,
        React.PropTypes.array.isRequired,
      ]),
    }

    getChildContext() {
      return context;
    }

    render() {
      return <Component {...props}>{ this.props.children }</Component>;
    }
  };
};

export { stubContext };
