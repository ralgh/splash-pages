import React from 'react';
import Router from 'react-router';
import express from 'express';
import ReactIntl from 'react-intl';

var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;

var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var app = express();

class Header extends React.Component {
  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title dangerouslySetInnerHTML={{ __html: `${this.props.title}` }} />
      </head>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html: `
      <script>
        dataLayer = [];
      </script>
      <script src="//www.googletagmanager.com/gtm.js?id=GTM-PRFKNC" async></script>
      <script>
        (function(w,l){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window, 'dataLayer');
      </script>
    `}} />
  }
}

class Page extends React.Component {
  render() {
    return (
      <html html lang={this.props.params.lang}>
        <Header title={this.props.title} params={this.props.params} />
        <body>
          <header>
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </header>
          {this.props.children}
          <Footer />
        </body>
      </html>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <RouteHandler params={this.props.params} path={this.props.path} />
    );
  }
}

function renderLanguage(props) {
  if (props.params.lang === props.lang) {
    return props.children;
  }
}

class Translation extends React.Component {
  render() {
    return (
      <div>
        {renderLanguage(this.props)}
      </div>
    );
  }
}

class HomeEn extends React.Component {
  render() {
    return (
      <Translation lang="en" params={this.props.params}>
        <h1>Home</h1>
        <p>{this.props.params.lang}</p>
      </Translation>
    );
  }
}

class HomeFr extends React.Component {
  render() {
    return (
      <Translation lang="fr" params={this.props.params}>
        <h1>Home fr</h1>
        <p>{this.props.params.lang}</p>
      </Translation>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="Home">
        <HomeFr params={this.props.params} />
        <HomeEn params={this.props.params} />
      </Page>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="About">
        <h1>About</h1>
      </Page>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="Not Found">
        <h1>Not found</h1>
      </Page>
    );
  }
}

var paths = {
  '/': {
    en: '/',
    fr: '/'
  },
  '/about': {
    en: '/about',
    fr: '/a-propos'
  }
};

var DEFAULT_LANGUAGE = 'en';

function localizePath(path, lang) {
  return lang === DEFAULT_LANGUAGE ? paths[path][lang] : '/' + lang + paths[path][lang];
}

app.use(express.static(__dirname));
app.get('/favicon.ico', (req, res) => { res.send('') });

app.use(function(req, res) {
  var language = req.path.match(/^\/([a-z]{2,2})\//);
  language = language && language[1] || DEFAULT_LANGUAGE;
  var routes = (
    <Route name="home" path={localizePath('/', language)} handler={App}>
      <Route handler={About} name="about" path={localizePath('/about', language)} />

      <DefaultRoute handler={Home} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );

  Router.run(routes, req.url, function (Handler, state) {
    state.params.lang = language;
    res.send(`
      <!doctype html>
      ${React.renderToString(<Handler path={req.path} params={state.params} />)}
    `);
  });
});

const port = process.env.PORT || 5000;
console.log('Listening: (localhost:' + port + ')');
app.listen(port);
