import React from 'react';
import PartnersPage from '../partners-page';

export default class PartnersClearBooks extends React.Component {
  displayName = 'PartnersClearBooks'

  render() {
    return (
      <PartnersPage
      title='ClearBooks'
      logoClass='clearbooks-header-logo'
      blurb={
        'Our Clear Books integration lets you automatically collect ' +
        'one-off and recurring payments from your customers.'
      }
      url='http://clearbooks.co.uk/'
      screenshot='/images/partners/clearbooks-frame@2x.jpg' />
    );
  }
}
