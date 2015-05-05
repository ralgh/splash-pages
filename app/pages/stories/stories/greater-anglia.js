import React from 'react';

import BigQuote from '../components/big-quote';
import StoryPage from '../components/story-page';
import Quote from '../components/quote';

export default class StoryGreaterAnglia extends React.Component {
  displayName = 'StoryGreaterAnglia'

  render() {
    return (
      <StoryPage
        title='Greater Anglia'
        tagline='Greater Anglia saved £21,000 by switching to online Direct Debit with GoCardless'
        tips={[
            'We helped them save 26 hours of management time a month',
            'We removed the need for paper mandates, saving £300 per month',
            'We helped them avoid a £21,000 upgrade to their server infrastructure',
        ]}
        >
        <Quote tag='Collecting payments was complicated and very manual'>
        <p>
          <a href="http://www.greateranglia.co.uk" className="u-link-color-p u-text-underline" target="_blank">Greater Anglia</a>, the East Anglia rail franchise, uses Direct Debit to take monthly payments allowing commuters to spread the cost of an annual season ticket.
        </p>
        <p>
          Before using GoCardless, they managed their Direct Debit in-house for eight years. “Collecting payments was complicated and very manual, and keeping up with Direct Debit scheme rule changes was very time-consuming.” It was also hard for the team to link their legacy Direct Debit management processes with their online offering.
        </p>
        </Quote>
        <BigQuote heroClass='story-hero--greater-anglia' img='/images/testimonials/greater-anglia__avatar.png' person='Graham Beton' position='Greater Anglia Railways'>
          “GoCardless have taken all of the pain out of setting up and managing Direct Debit”
        </BigQuote>
        <Quote tag='Customers can now set up new season tickets entirely online'>
          <p>Greater Anglia realised they needed an outsourced solution that could adapt to their growing online sales. They quickly identified GoCardless as “by far the best option for online Direct Debit”.</p>
          <p>One key advantage was that because of our superior technology, GoCardless was the only provider who could enable Greater Anglia’s customers to set up new season ticket customers entirely online and link this back to their CRM and accounts.</p>
        </Quote>
        <Quote tag='Switching to GoCardless has saved us time and money'>
          <p>
            Switching to GoCardless' online system eliminated the need for paper mandates and statements, saving Greater Anglia <strong>£300 every month</strong> and reducing management time by <strong>26 hours</strong>. Greater Anglia also avoided a costly upgrade to their server infrastructure otherwise needed to comply with the new Direct Debit rules.
          </p>
          <p>
            Greater Anglia have been delighted with the service since making the switch: “Their system is incredibly simple and their expertise is second to none."
          </p>
          <a href="/subscriptions" className="u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Txl">
              See how GoCardless works for subscriptions
          </a>
        </Quote>
      </StoryPage>
    );
  }
}
