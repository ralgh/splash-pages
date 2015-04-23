import React from 'react';
import Page from '../../components/page/page';
import Translation from '../../components/translation/translation';
import IntlMessage from '../../components/intl-message/intl-message';

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
        <IntlMessage message='cta.pro' />
        <HomeFr />
        <HomeEn />
      </Page>
    );
  }
}
