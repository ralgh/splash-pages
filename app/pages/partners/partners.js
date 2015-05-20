import React from 'react';
import Page from '../../components/page/page';
import PartnersEn from './partners.en';
import PartnersFr from './partners.fr';

export default class Partners extends React.Component {
  displayName = 'Partners'

  render() {
    return (
      <Page isInverted={false}>
        <PartnersEn />
        <PartnersFr />
      </Page>
    );
  }
}
