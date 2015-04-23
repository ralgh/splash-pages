import React from 'react';
import {RouteHandler} from 'react-router';

class App extends React.Component {
  displayName = 'App'

  static childContextTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired
    ]),
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired,
    ]),
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
  }

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

export default App;
