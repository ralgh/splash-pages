import React from 'react';
import PartnersPage from '../partners-page';

export default class PartnersXero extends React.Component {
  displayName = 'PartnersXero'

  render() {
    return (
      <PartnersPage
      title='Xero'
      logoClass='xero-header-logo'
      blurb={
        'Especially popular with accountants and bookkeepers, our Xero ' +
        'integration lets you automatically collect one-off and recurring payments.'
      }
      url='http://xero.com/'
      screenshot='/images/partners/xero-frame@2x.jpg' />
    );
  }
}
