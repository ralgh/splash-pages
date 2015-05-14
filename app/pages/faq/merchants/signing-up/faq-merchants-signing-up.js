import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsSigningUpEn from './faq-merchants-signing-up.en';
import FaqMerchantsSigningUpFr from './faq-merchants-signing-up.fr';

export default class FaqMerchantsSigningUp extends React.Component {
  displayName = 'FaqMerchantsSigningUp'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsSigningUpEn />
        <FaqMerchantsSigningUpFr />
      </FaqMerchantsPage>
    );
  }
}
