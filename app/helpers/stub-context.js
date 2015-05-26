import React from 'react';
import { PropTypes } from './prop-types/prop-types';

var stubContext = function(Component, { props, context }) {
  return class extends React.Component {
    static childContextTypes = {
      currentLocale: PropTypes.locale,
      routeLocales: PropTypes.array.isRequired,
      routeName: PropTypes.string.isRequired,
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
