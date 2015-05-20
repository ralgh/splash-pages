import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import { getMessage } from '../intl/intl';
import { RouteHandler } from 'react-router';
import getSiteTitle from '../get-site-title/get-site-title';

import cookies from 'cookies-js';

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

  static contextTypes = {
    router: React.PropTypes.func,
  }

  static childContextTypes = {
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    routeLocales: React.PropTypes.array.isRequired,
    pathname: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    routeLocales: React.PropTypes.array.isRequired,
    pathname: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  componentWillReceiveProps(newProps) {
    setTitle(newProps);
    setMetaDescription(newProps);
    setCanonicalHref(newProps);
  }

  componentDidMount() {
    /*eslint-disable camelcase*/
    const { r: referral_code, gclid: google_ppc_click } = this.context.router.getCurrentQuery();

    if (referral_code) {
      cookies.set('referral_code', referral_code);
    }

    if (google_ppc_click) {
      cookies.set('google_ppc_click', google_ppc_click);
    }
    /*eslint-enable camelcase*/
  }

  getChildContext() {
    const { locales, messages, formats, routeName, availableLocales, routeLocales, config, pathname } = this.props;

    return {
      locales: locales,
      messages: messages,
      formats: formats,
      routeName: routeName,
      availableLocales: availableLocales,
      routeLocales: routeLocales,
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
