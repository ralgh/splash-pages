import React from 'react';
import Page from '../../components/page/page';
import PricingEn from './pricing.en';
import PricingEnGb from './pricing.en-GB';
import PricingFr from './pricing.fr';
import PricingDe from './pricing.de';

export default class Pricing extends React.Component {
  displayName = 'Pricing'

  render() {
    return (
      <Page>
        <PricingEn />
        <PricingEnGb />
        <PricingFr />
        <PricingDe />
      </Page>
    );
  }
}
