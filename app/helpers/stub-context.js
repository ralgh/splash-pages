import React from 'react';
import {PropTypes} from './prop-types/prop-types';

var stubContext = function(Component, { props, context }) {
  return class extends React.Component {
    static childContextTypes = {
      locales: PropTypes.locale,
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
