import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsCustomerExperienceEn from './faq-merchants-customer-experience.en';
import FaqMerchantsCustomerExperienceFr from './faq-merchants-customer-experience.fr';

export default class FaqMerchantsCustomerExperience extends React.Component {
  displayName = 'FaqMerchantsCustomerExperience'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsCustomerExperienceEn />
        <FaqMerchantsCustomerExperienceFr />
      </FaqMerchantsPage>
    );
  }
}
