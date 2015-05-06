import React from 'react';
import Page from '../../components/page/page';
import ProEn from './pro.en';
import ProFr from './pro.fr';

export default class Pro extends React.Component {
  displayName = 'Pro'

  render() {
    return (
      <Page>
        <ProEn />
        <ProFr />
      </Page>
    );
  }
}
