import React, { PropTypes } from "react";

import browseHappy from "../layout-static/browse-happy.js";
import createHTML5Tags from "../layout-static/create-html5-tags.js";
import GTM from "../layout-static/google-tag-manager.js";

import {getIntlMessage} from '../intl/intl';

import Header from '../header/header';
import Footer from '../footer/footer';

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

          <title>{ getIntlMessage(messages, `${stateName}.title`) } - { config.site_name }</title>

          <meta name="description" content={ getIntlMessage(messages, `${stateName}.description`) } />
          <link href={ config.social_links.google } rel="publisher" />
          <meta name="og:image" content={ config.logo_url_square } />
          <meta name="og:image:secure_url" content={ config.logo_url_square } />
          <meta name="google-site-verification" content={ config.google_site_verification } />
          <link rel="canonical" href={ config.site_root + path } />

          { css.map((href, k) =>
            <link key={k} rel="stylesheet" type="text/css" href={href} />)
          }

          <script dangerouslySetInnerHTML={{__html: createHTML5Tags}} />
        </head>

        <body>
          { config.optimizely_id &&
            <script src="//cdn.optimizely.com/js/${config.optimizely_id}.js"></script>
          }
          <div dangerouslySetInnerHTML={{__html: browseHappy}} />

          <Header />

          <div id="root" dangerouslySetInnerHTML={{__html: markup}} />

          <Footer />

          { script.map((src, k) => <script key={k} src={src} />) }

          { config.google_tag_manager_id &&
            <div dangerouslySetInnerHTML={{__html: GTM.replace("{TAG_ID}", config.google_tag_manager_id)}} />
          }
        </body>
      </html>
    );
  }
}

export default HtmlDocument;
