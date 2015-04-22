import React, { PropTypes } from "react";

import browsehappy from "./layout-static/browsehappy.js";
import ieoldtags from "./layout-static/create-tags.js";
import googletagmanager from "./layout-static/google-tag-manager.js";

import {getIntlMessage} from './intl/intl';

import Header from './header';
import Footer from './footer';

class HtmlDocument extends React.Component {
  static propTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired,
    ]),
    language: PropTypes.string.isRequired,
    messages: PropTypes.object.isRequired,
    formats: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    markup: PropTypes.string.isRequired,
    script: PropTypes.arrayOf(PropTypes.string),
    css: PropTypes.arrayOf(PropTypes.string),
    path: React.PropTypes.string.isRequired,
    stateName: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    script: [],
    css: [],
  }

  static childContextTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired,
    ]),
    language: PropTypes.string.isRequired,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
  };

  getChildContext() {
    const { locales, messages, formats, language } = this.props;

    return {
      locales: locales,
      language: language,
      messages: messages,
      formats: formats,
    };
  }

  render() {
    const { messages, stateName, markup, script, css, language, config, path } = this.props;

    return (
      <html className="no-js" lang={language}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

          <title>{ getIntlMessage(messages, `${stateName}.title`) }</title>

          <meta name="description" content={ getIntlMessage(messages, `${stateName}.description`) } />
          <meta property="og:type" content="website" />
          <meta name="og:image" content={ config.logo_url } />
          <meta name="og:image:secure_url" content={ config.logo_url} />
          <meta property="og:site_name" content={ getIntlMessage(messages, `${stateName}.title`) } />
          <meta property="og:title" content={ getIntlMessage(messages, `${stateName}.title`) } />
          <meta property="og:description" content={ getIntlMessage(messages, `${stateName}.description`) } />
          <meta property="og:url" content={config.site_root + path} />
          <link rel="canonical" href={config.site_root + path} />

          { css.map((href, k) =>
            <link key={k} rel="stylesheet" type="text/css" href={href} />)
          }

          { config.google.trackingId &&
            <script dangerouslySetInnerHTML={{__html: ga.replace("{trackingId}", config.google.trackingId)}} />
          }

          <script dangerouslySetInnerHTML={{__html: ieoldtags}} />
        </head>

        <body>
          { config.optimizely &&
            <script src="//cdn.optimizely.com/js/${config.optimizely}.js"></script>
          }

          <Header />

          <div id="iewarn" dangerouslySetInnerHTML={{__html: browsehappy}} />

          <div id="root" dangerouslySetInnerHTML={{__html: markup}} />

          <Footer />

          { script.map((src, k) => <script key={k} src={src} />) }
          <script>
            System.import('app/js/main')
          </script>

          { config.google.tag_manager &&
            <div dangerouslySetInnerHTML={{__html: googletagmanager.replace("{TAG_ID}", config.google.tag_manager)}} />
          }

        </body>
      </html>
    );
  }
}

export default HtmlDocument;
