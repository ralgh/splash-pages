import React from 'react';
import Page from '../../page';

function renderLocale(currentLocale, props) {
  if (currentLocale === props.locales) {
    return props.children;
  }
}

class Translation extends React.Component {
  render() {
    return (
      <div>
        {renderLocale(this.context.locales, this.props)}
      </div>
    );
  }
}

Translation.contextTypes = {
  locales: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.array.isRequired,
  ]),
};

class HomeEn extends React.Component {
  render() {
    return (
      <Translation locales="en-gb">
        <h1>Home en-gb</h1>
      </Translation>
    );
  }
}

class HomeFr extends React.Component {
  render() {
    return (
      <Translation locales="fr-fr">
        <h1>Home fr</h1>
      </Translation>
    );
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <Page>
        <div>
        </div>
        <HomeFr />
        <HomeEn />
      </Page>
    );
  }
}
