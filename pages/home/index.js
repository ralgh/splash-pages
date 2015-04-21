import React from 'react';
import Page from '../../components/page/page';
import Translation from '../../components/translation/translation';

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
        <HomeFr />
        <HomeEn />
      </Page>
    );
  }
}
