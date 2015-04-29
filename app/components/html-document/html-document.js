import React from 'react';

import browseHappy from '../layout-static/browse-happy.js';
import createHTML5Tags from '../layout-static/create-html5-tags.js';
import GTM from '../layout-static/google-tag-manager.js';
import websiteSchema from '../layout-static/website-schema.js';

import {getIntlMessage} from '../intl/intl';
import localeMessages from '../../../config/messages';
import {getLocalesForRouteName} from '../../router/routes';
import {defaultLocale} from '../../helpers/locale-helper/locale-helper';
import {homeRoute} from '../../router/routes';
import {buildSchemaDotOrgForOrganization} from '../../../config/schema-dot-org';

function relAlternateLinks(root, path, locales) {
  var defaultPath = locales[defaultLocale].path;

  var alternates = Object.keys(locales).map(function(locale) {
    var localePath = locales[locale].path;
    return <link rel='alternate' hrefLang={locale} href={ root + localePath } key={locale} />;
  });

  if (defaultPath) {
    alternates.unshift(
      <link rel='alternate' href={root + defaultPath} hrefLang='x-default' key='x-default' />
    );
  }

  return alternates;
}

class HtmlDocument extends React.Component {
  displayName = 'HtmlDocument'

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
    router: React.PropTypes.func.isRequired,
    path: React.PropTypes.string.isRequired,
    dataRender: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
    markup: React.PropTypes.string.isRequired,
    script: React.PropTypes.arrayOf(React.PropTypes.string),
    css: React.PropTypes.arrayOf(React.PropTypes.string),
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
    messages: React.PropTypes.object.isRequired,
    formats: React.PropTypes.object.isRequired,
    language: React.PropTypes.string.isRequired,
    routeName: React.PropTypes.string.isRequired,
    availableLocales: React.PropTypes.array.isRequired,
    router: React.PropTypes.func.isRequired,
    path: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired,
  };

  getChildContext() {
    const { locales, messages, formats, language, routeName, availableLocales, router, path, config } = this.props;

    return {
      locales: locales,
      messages: messages,
      formats: formats,
      language: language,
      routeName: routeName,
      availableLocales: availableLocales,
      router: router,
      path: path,
      config: config,
    };
  }

  render() {
    const { messages, routeName, language, config, path, availableLocales, markup, script, css } = this.props;
    const isHome = routeName === homeRoute;
    const schemaDotOrgOrganisation = buildSchemaDotOrgForOrganization(localeMessages, availableLocales, config);
    const routeLocales = getLocalesForRouteName(routeName);
    const pageHref = config.siteRoot + path;
    const title = isHome ? config.siteName : `${getIntlMessage(messages, `${routeName}.title`)} - ${ config.siteName }`;

    return (
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

          <title>{ title }</title>

          <meta name='description' content={ getIntlMessage(messages, `${routeName}.description`) } />
          <link href={ config.socialLinks.google } rel='publisher' />
          <meta name='og:image' content={ config.logoUrlSquare } />
          <meta name='og:image:secure_url' content={ config.logoUrlSquare } />
          <meta name='google-site-verification' content={ config.googleSiteVerification } />
          <link rel='canonical' href={ pageHref } />

          { routeLocales &&
              relAlternateLinks(config.siteRoot, path, routeLocales) }

          { css.map((href, k) => <link key={k} rel='stylesheet' href={href} />) }

          <script dangerouslySetInnerHTML={{ __html: createHTML5Tags }} />
        </head>

        <body>
          { config.optimizelyId &&
              <script src='//cdn.optimizely.com/js/{config.optimizelyId}.js'></script>
          }
          <div dangerouslySetInnerHTML={{ __html: browseHappy }} />

          <div id='root' dangerouslySetInnerHTML={{ __html: markup }} />

          <script dangerouslySetInnerHTML={{ __html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

          { script.map((src, k) => <script key={k} src={src} />) }

          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: websiteSchema.replace('{PAGE}', path) }} />
          }

          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: schemaDotOrgOrganisation }} />
          }

          { config.googleTagManagerId &&
              <div dangerouslySetInnerHTML={{__html: GTM.replace('{TAG_ID}', config.googleTagManagerId) }} />
          }
        </body>
      </html>
    );
  }
}

export default HtmlDocument;
