import React from 'react';
import PartnersPage from '../partners-page';

export default class PartnersKashflow extends React.Component {
  displayName = 'PartnersKashflow'

  render() {
    return (
      <PartnersPage
        title='Kashflow'
        logoClass='kashflow-header-logo'
        blurb={
          'KashFlow is incredibly easy to use and has attracted tens of thousands of users ' +
          'with its simple, jargon free system. KashFlow\'s integration with GoCardless allows ' +
          'you to collect one-off or recurring invoices automatically via Direct Debit.'
        }
        url='http://kashflow.com/'
        screenshot='/images/partners/kashflow-frame@2x.jpg' />
    );
  }
}
