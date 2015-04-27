import React from 'react';
import Router from 'react-router';
var {RouteHandler} = Router;

class App extends React.Component {
  displayName = 'App'

  static childContextTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired
    ]),
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    language: React.PropTypes.string.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
  }

  static propTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired,
    ]),
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    language: React.PropTypes.string.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
  }

  getChildContext() {
    const { locales, messages, formats, language, routeName, availableLocales } = this.props;

    return {
      locales: locales,
      messages: messages,
      formats: formats,
      language: language,
      routeName: routeName,
      availableLocales: availableLocales,
    };
  }

  render() {
    return (
      <RouteHandler {...this.props} />
    );
  }
}

export default App;
