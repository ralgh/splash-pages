import React from 'react';
import _ from 'lodash';

import browseHappy from '../layout-static/browse-happy.js';
import createHTML5Tags from '../layout-static/create-html5-tags.js';
import GTM from '../layout-static/google-tag-manager.js';
import websiteSchema from '../layout-static/website-schema.js';

import {getIntlMessage} from '../intl/intl';
import localeMessages from '../../../config/messages';
import {getLocalesForRouteName} from '../../router/routes';
import {defaultLocale} from '../../helpers/locale-helper/locale-helper';
import {homeRoute} from '../../router/routes';

// Documentation from Google:
//   https://developers.google.com/structured-data/customize/overview
// Google's tool for validating the output:
//   https://developers.google.com/structured-data/testing-tool/
// Original Schema:
//   http://schema.org/Organization
function buildSchemaDotOrgOrganization(metadata, availableLocales) {
  var organization = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url: 'https://gocardless.com/',
    logo: metadata.logoUrlSquare,
    sameAs: [],
    contactPoint: [],
  };

  // Add social network links to sameAs
  Object.keys(metadata.socialLinks).forEach(function(network) {
    organization.sameAs.push(metadata.socialLinks[network]);
  });

  // Add contact details for office in each country
  // See https://support.google.com/webmasters/answer/4620709?hl=en for supported contactType
  availableLocales.map(function(locale) {
    return [locale.slice(3, 5), locale];
  }).forEach(function(countryCodeLocale) {
    var countryCode = countryCodeLocale[0];
    var locale = countryCodeLocale[1];
    var contactTypes = localeMessages[locale].contact_types;
    contactTypes.forEach(function(contactType) {
      organization.contactPoint.push(
        {
          '@type': 'ContactPoint',
          telephone: localeMessages[locale].phone_full,
          email: localeMessages[locale].email,
          contactType: contactType,
          areaServed: countryCode,
        }
      );
    });
  });

  return organization;
}

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
  };

  getChildContext() {
    const { locales, messages, formats, language, routeName, availableLocales, router, path } = this.props;

    return {
      locales: locales,
      messages: messages,
      formats: formats,
      language: language,
      routeName: routeName,
      availableLocales: availableLocales,
      router: router,
      path: path,
    };
  }

  render() {
    const { messages, routeName, markup, script, css, language, config, path, availableLocales } = this.props;
    const isHome = routeName === homeRoute;
    const metadata = _.merge({}, messages, config);
    const schemaDotOrgOrganisation = buildSchemaDotOrgOrganization(metadata, availableLocales);
    const routeLocales = getLocalesForRouteName(routeName);
    const pageHref = config.siteRoot + path;

    var title;
    var description;
    if (!isHome && routeName) {
      title = getIntlMessage(messages, `${routeName}.title`) + `- ${ config.siteName }`;
    } else {
      title = config.siteName;
    }
    if (routeName) {
      description = getIntlMessage(messages, `${routeName}.description`);
    }

    return (
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

          <title>{ title }</title>

          <meta name='description' content={ description } />
          <link href={ config.socialLinks.google } rel='publisher' />
          <meta name='og:image' content={ config.logoUrlSquare } />
          <meta name='og:image:secure_url' content={ config.logoUrlSquare } />
          <meta name='google-site-verification' content={ config.googleSiteVerification } />
          <link rel='canonical' href={ pageHref } />

          { relAlternateLinks(config.siteRoot, path, routeLocales) }

          { css.map((href, k) =>
            <link key={k} rel='stylesheet' type='text/css' href={href} />)
          }

          <script dangerouslySetInnerHTML={{ __html: createHTML5Tags }} />
        </head>

        <body>
          { config.optimizelyId &&
            <script src='//cdn.optimizely.com/js/${config.optimizelyId}.js'></script>
          }
          <div dangerouslySetInnerHTML={{ __html: browseHappy }} />

          <div id='root' dangerouslySetInnerHTML={{ __html: markup }} />

          <script dangerouslySetInnerHTML={{__html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

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
