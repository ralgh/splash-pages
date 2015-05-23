import React from 'react';
import Page from '../../components/page/page';
import PricingEn from './pricing.en';
import PricingFr from './pricing.fr';
import PricingDe from './pricing.de';

export default class Pricing extends React.Component {
  displayName = 'Pricing'

  render() {
    return (
      <Page>
        <PricingEn />
        <PricingFr />
        <PricingDe />
      </Page>
    );
  }
}
