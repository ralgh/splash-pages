import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsEn from './faq-merchants-overview.en';
import FaqMerchantsFr from './faq-merchants-overview.fr';

export default class FaqMerchants extends React.Component {
  displayName = 'FaqMerchants'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsEn />
        <FaqMerchantsFr />
      </FaqMerchantsPage>
    );
  }
}
