import React from 'react';
import Page from '../../components/page/page';
import IntlMessage from '../../components/intl-message/intl-message';
import HomeEn from './home.en';
import HomeFr from './home.fr';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      <Page>
        <div>
          <IntlMessage message='cta.pro' />
          <HomeFr />
          <HomeEn />
        </div>
      </Page>
    );
  }
}
