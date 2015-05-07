import React from 'react';
import PartnersPage from '../partners-page';

export default class PartnersFreeagent extends React.Component {
  displayName = 'PartnersFreeagent'

  render() {
    return (
      <PartnersPage
        title='FreeAgent'
        logoClass='freeagent-header-logo'
        blurb={
          'FreeAgent helps small businesses with their finances, including ' +
          'invoicing, expense reporting, banking, accounting and taxes. ' +
          'Our integration lets you automatically collect one-off payments.'
        }
        url='http://freeagent.com/'
        screenshot='/images/partners/freeagent-frame@2x.jpg' />
    );
  }
}
