import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsDeveloperApiEn from './faq-merchants-developer-api.en';
import FaqMerchantsDeveloperApiFr from './faq-merchants-developer-api.fr';

export default class FaqMerchantsDeveloperApi extends React.Component {
  displayName = 'FaqMerchantsDeveloperApi'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsDeveloperApiEn />
        <FaqMerchantsDeveloperApiFr />
      </FaqMerchantsPage>
    );
  }
}
