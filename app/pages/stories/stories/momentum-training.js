import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesMomentumTraining extends React.Component {
  displayName = 'StoriesMomentumTraining'

  render() {
    return (
      <StoryPage
        title='Momentum Training'
        tagline='Momentum Training and CrossFit Hackney cut payment costs by over 50% by switching to GoCardless'
        tips={[
          'GoCardless helped them cut the cost of taking payments by over 50%',
          'We helped them retry failed payments instantly',
          'GoCardless and TeamUp have helped them save hours in admin',
        ]}>
        <StoryQuote tag='We wanted to find a cheaper and easier way to take payments'>
          <p>
            <a href='http://www.momentum-training.com/' className='u-link-color-p u-text-underline' target='_blank'>
            Momentum Training and CrossFit Hackney</a> is one of the leading Crossfit gyms in the UK. Since
            opening in May 2013 it has grown to over 250 regular members and is currently looking at opening
            another site. Before GoCardless, they were using PayPal to collect their membership fees but were
            looking for a cheaper alternative that was easier to integrate with their membership system.
          </p>
          <p>
            Geoff Stewart, founder of Momentum Training and CrossFit Hackney explains, “PayPal fees were
            relatively high and it was difficult to integrate so our developers were keen to find a cheaper
            and easier alternative.”
          </p>
        </StoryQuote>
        <StoryBigQuote heroClass='story-hero--momentum' person='Geoff Stewart' position='Momentum Training'>
          Taking payments with GoCardless costs us less than half the price of using Paypal and the
          integration with TeamUp has reduced our admin
        </StoryBigQuote>
        <StoryQuote tag='GoCardless was super easy to integrate'>
          <p>Looking for a solution they came across TeamUp, a specialist management platform for fitness
          businesses who recommended using GoCardless to collect their payments. It took minutes to get started;
          “GoCardless was super easy to integrate. With Paypal we needed a developer to get us set up but we were
          able to get set up with GoCardless ourselves.”</p>
          <p>Momentum Training and CrossFit Hackney now collect their recurring membership fees using GoCardless
          and use GoCardless and Stripe for their one-off payments.</p>
        </StoryQuote>
        <StoryQuote tag={
          'Since moving to TeamUp and GoCardless our payment failures are lower than they were before – ' +
          'even though our members have more than doubled.'
        }>
          <p>
            Since using TeamUp and GoCardless, Momentum Training and Crossfit Hackney have been able to
            significantly reduce the time they spend on admin and the costs of taking payments from their members –
            savings which can go towards further growth and improving their business.
          </p>
          <p>
            Geoff explains: “Taking payments with GoCardless costs us less than half the price of using Paypal and
            the integration with TeamUp has definitely reduced our admin – particularly for dealing with failed payments.
            It used to be a complicated process to work out which payments had failed and to retry them.”
          </p>
          <p>
            “With GoCardless and TeamUp any failed payments show up on our dashboard each month and we just need to press a
            button to retry them instantly. What’s more since moving to TeamUp and GoCardless our payment failures are lower
            than they were before – even though our members have more than doubled.”
          </p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
