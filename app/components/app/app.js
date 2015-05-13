import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import { getMessage } from '../intl/intl';
import { RouteHandler } from 'react-router';
import getSiteTitle from '../get-site-title/get-site-title';

function setTitle(props) {
  document.title = getSiteTitle(props);
}

function setMetaDescription({ messages, routeName }) {
  const message = getMessage(messages, `${routeName}.description`);
  const element = document.querySelector('meta[name=description]');

  if (element) {
    element.setAttribute('content', message);
  }
}

function setCanonicalHref(props) {
  const { config, pathname } = props;
  const href = config.siteRoot + pathname;
  const element = document.querySelector('link[rel="canonical"]');

  if (element) {
    element.setAttribute('href', href);
  }
}

class App extends React.Component {
  displayName = 'App'

  static childContextTypes = {
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    pathname: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    pathname: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  componentWillReceiveProps(newProps) {
    setTitle(newProps);
    setMetaDescription(newProps);
    setCanonicalHref(newProps);
  }

  getChildContext() {
    const { locales, messages, formats, routeName, availableLocales, config, pathname } = this.props;

    return {
      locales: locales,
      messages: messages,
      formats: formats,
      routeName: routeName,
      availableLocales: availableLocales,
      pathname: pathname,
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
