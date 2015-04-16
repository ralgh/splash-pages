import React from 'react';
import Page from '../../page';

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

export default class Home extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="Home">
        <HomeFr params={this.props.params} />
        <HomeEn params={this.props.params} />
      </Page>
    );
  }
}
