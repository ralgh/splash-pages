import React from 'react';
import _ from 'lodash';

import browseHappy from '../layout-static/browse-happy.js';
import createHTML5Tags from '../layout-static/create-html5-tags.js';
import GTM from '../layout-static/google-tag-manager.js';
import websiteSchema from '../layout-static/website-schema.js';

import {getIntlMessage} from '../intl/intl';
import {availableLocales} from '../../helpers/locale-helper/locale-helper';
import localeMessages from '../../../config/messages';

// Documentation from Google:
//   https://developers.google.com/structured-data/customize/overview
// Google's tool for validating the output:
//   https://developers.google.com/structured-data/testing-tool/
// Original Schema:
//   http://schema.org/Organization
function buildSchemaDotOrgOrganization(metadata) {
  var organization = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    'url': 'https://gocardless.com/',
    'logo': metadata.logo_url_square,
    'sameAs': [],
    'contactPoint': [],
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
          'telephone': localeMessages[locale].phone_full,
          'email': localeMessages[locale].email,
          'contactType': contactType,
          'areaServed': countryCode,
        }
      );
    });
  });

  return organization;
}

class HtmlDocument extends React.Component {
  displayName = 'HtmlDocument'

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
    const isHome = stateName === 'Home';
    const metadata = _.merge({}, messages, config);

    return (
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

          <title>{ getIntlMessage(messages, `${stateName}.title`) } - { config.siteName }</title>

          <meta name="description" content={ getIntlMessage(messages, `${stateName}.description`) } />
          <link href={ config.socialLinks.google } rel="publisher" />
          <meta name="og:image" content={ config.logoUrlSquare } />
          <meta name="og:image:secure_url" content={ config.logoUrlSquare } />
          <meta name="google-site-verification" content={ config.googleSiteVerification } />
          <link rel="canonical" href={ config.siteRoot + path } />

          { css.map((href, k) =>
            <link key={k} rel='stylesheet' type='text/css' href={href} />)
          }

          <script dangerouslySetInnerHTML={{__html: createHTML5Tags}} />
        </head>

        <body>
          { config.optimizelyId &&
            <script src='//cdn.optimizely.com/js/${config.optimizelyId}.js'></script>
          }
          <div dangerouslySetInnerHTML={{__html: browseHappy}} />

          <div id='root' dangerouslySetInnerHTML={{__html: markup}} />

          <script dangerouslySetInnerHTML={{__html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

          { script.map((src, k) => <script key={k} src={src} />) }

          { isHome &&
            <script type='application/ld+json'
              dangerouslySetInnerHTML={{__html: websiteSchema.replace('{PAGE}', path) }} />
          }

          { isHome &&
            <script type='application/ld+json'
              dangerouslySetInnerHTML={{__html: JSON.stringify(buildSchemaDotOrgOrganization(metadata)) }} />
          }

          { config.googleTagManagerId &&
            <div dangerouslySetInnerHTML={{__html: GTM.replace("{TAG_ID}", config.google_tag_manager_id)}} />
          }
        </body>
      </html>
    );
  }
}

export default HtmlDocument;
