import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsDirectDebitEn from './faq-merchants-direct-debit.en';
import FaqMerchantsDirectDebitFr from './faq-merchants-direct-debit.fr';

export default class FaqMerchantsDirectDebit extends React.Component {
  displayName = 'FaqMerchantsDirectDebit'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsDirectDebitEn />
        <FaqMerchantsDirectDebitFr />
      </FaqMerchantsPage>
    );
  }
}
