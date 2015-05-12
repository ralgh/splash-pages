import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsSecurityEn from './faq-merchants-security.en';
import FaqMerchantsSecurityFr from './faq-merchants-security.fr';

export default class FaqMerchantsSecurity extends React.Component {
  displayName = 'FaqMerchantsSecurity'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsSecurityEn />
        <FaqMerchantsSecurityFr />
      </FaqMerchantsPage>
    );
  }
}
