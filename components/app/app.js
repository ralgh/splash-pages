import React from 'react';
import {RouteHandler} from 'react-router';

export default class App extends React.Component {
  getChildContext() {
    return {
      locales: this.props.locales,
      messages: this.props.messages,
      formats: this.props.formats,
    };
  }

  render() {
    return (
      <RouteHandler {...this.props} />
    );
  }
}

App.childContextTypes = {
  locales: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.array.isRequired
  ]),
  messages: React.PropTypes.object.isRequired,
  formats: React.PropTypes.object.isRequired,
};
