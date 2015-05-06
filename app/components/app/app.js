import React from 'react';
import {PropTypes} from '../../helpers/prop-types/prop-types';
import {RouteHandler} from 'react-router';

class App extends React.Component {
  displayName = 'App'

  static childContextTypes = {
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    const { locales, messages, formats, routeName, availableLocales, config } = this.props;

    return {
      locales: locales,
      messages: messages,
      formats: formats,
      routeName: routeName,
      availableLocales: availableLocales,
      config: config,
    };
  }

  render() {
    return (
      <RouteHandler {...this.props} />
    );
  }
}

export default App;
