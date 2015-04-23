import React from 'react';

import browseHappy from '../layout-static/browse-happy.js';
import createHTML5Tags from '../layout-static/create-html5-tags.js';
import GTM from '../layout-static/google-tag-manager.js';

import {getIntlMessage} from '../intl/intl';


class HtmlDocument extends React.Component {
  static propTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired,
    ]),
    language: React.PropTypes.string.isRequired,
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
    markup: React.PropTypes.string.isRequired,
    script: React.PropTypes.arrayOf(React.PropTypes.string),
    css: React.PropTypes.arrayOf(React.PropTypes.string),
    dataRender: React.PropTypes.object.isRequired,
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
    language: React.PropTypes.string.isRequired,
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
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

          <title>{ getIntlMessage(messages, `${stateName}.title`) } - { config.siteName }</title>

          <meta name='description' content={ getIntlMessage(messages, `${stateName}.description`) } />
          <meta property='og:type' content='website' />
          <meta name='og:image' content={ config.logoUrlSquare } />
          <meta name='og:image:secure_url' content={ config.logoUrlSquare } />
          <meta name='google-site-verification' content={ config.googleSiteVerification } />
          <link rel='canonical' href={ config.siteRoot + path } />

          { css.map((href, k) =>
            <link key={k} rel='stylesheet' type='text/css' href={href} />)
          }

          <script dangerouslySetInnerHTML={{__html: createHTML5Tags}} />
        </head>

        <body>
          { config.optimizely_id &&
            <script src='//cdn.optimizely.com/js/${config.optimizely_id}.js'></script>
          }
          <div dangerouslySetInnerHTML={{__html: browseHappy}} />

          <div id='root' dangerouslySetInnerHTML={{__html: markup}} />

          <script dangerouslySetInnerHTML={{__html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

          { script.map((src, k) => <script key={k} src={src} />) }

          { config.googleTagManagerIxd &&
            <div dangerouslySetInnerHTML={{__html: GTM.replace('{TAG_ID}', config.googleTagManagerId)}} />
          }
        </body>
      </html>
    );
  }
}

export default HtmlDocument;
