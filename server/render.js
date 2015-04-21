import React from "react";
import HtmlDocument from "../components/html-document";
import Router from 'react-router';
import {getRoutes} from './routes';
import config from '../config';
import _ from 'lodash';

// todo move
var messages = {

};

var formats = {

};


var DEFAULT_LANGUAGE = 'en';
var DEFAULT_REGION = 'gb';

function getLocale(language, region) {
  language = language || DEFAULT_LANGUAGE;
  region = region || DEFAULT_REGION;
  return [language, region].join('-');
}

// end move

function LocaleObject(locale) {
  this.getMeta = function(a) {
    return 'hi :)';
  }
}


var scriptTags = ['vendor/systemjs/build/system.min.js', 'vendor/es6-module-loader/es6-module-loader.js'];
var cssLinks = ['css/main.css'];

function render(req, res, next) {
  var locale = req.path.match(/^\/([a-z]{2,2}\-[a-z]{2,2})\//);
  locale = locale && locale[1] || getLocale();
  var language = locale.slice(0, 2);
  var routes = getRoutes(locale);

  function appProps(props) {
    return _.extend({
      locales: locale,
      messages: messages,
      formats: formats,
      config: config
    }, props);
  }

  Router.run(routes, req.url, function(Handler, state) {

    const markup = React.renderToString(<Handler {...appProps(state)} />);

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
      <HtmlDocument
        locale={new LocaleObject(locale)}
        lang={language}
        markup={markup}
        script={scriptTags}
        css={cssLinks}
        config={config}
        path={req.path}
      />
    );
    const doctype = "<!DOCTYPE html>";
    res.send(doctype + html);
  });

}


export default render;
