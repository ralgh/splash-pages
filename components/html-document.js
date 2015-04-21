import React, { PropTypes } from "react";

import browsehappy from "./layout-static/browsehappy.js";
import ieoldtags from "./layout-static/create-tags.js";
import googletagmanager from "./layout-static/google-tag-manager.js";

import Header from './header';
import Footer from './footer';


class HtmlDocument extends React.Component {

  static propTypes = {
    locale: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
    markup: PropTypes.string.isRequired,
    script: PropTypes.arrayOf(PropTypes.string),
    css: PropTypes.arrayOf(PropTypes.string),
    path: React.PropTypes.string
  }

  static defaultProps = {
    script: [],
    css: []
  }

  render() {
    const { locale, markup, script, css, lang, config, path } = this.props;

    return (
      <html className="no-js" lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

          <title>{ locale.getMeta('site_title') }</title>

          <meta name="description" content={ locale.getMeta('meta_description') } />
          <meta property="og:type" content="website" />
          <meta name="og:image" content={ config.logo_url } />
          <meta name="og:image:secure_url" content={ config.logo_url} />
          <meta property="og:site_name" content={ locale.getMeta('site_name') } />
          <meta property="og:title" content={ locale.getMeta('site_title') } />
          <meta property="og:description" content={ locale.getMeta('meta_description') } />
          <meta property="og:url" content={config.site_root + path} />
          <link rel="canonical" href={config.site_root + path} />

          { css.map((href, k) =>
            <link key={k} rel="stylesheet" type="text/css" href={href} />)
          }

          { config.google.tracking_id &&
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

          { config.google.tag_manager &&
            <div id="iewarn" dangerouslySetInnerHTML={{__html: googletagmanager.replace("{TAG_ID}", config.google.tag_manager)}} />
          }

        </body>
      </html>
    );
  }
}

export default HtmlDocument;
