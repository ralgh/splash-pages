import React from 'react';
import BigQuote from '../big-quote';
import StoryPage from '../story-page';
import Quote from '../quote';

export default class StoryRockClubStory extends React.Component {
  displayName = 'StoryRockClubStory'

  render() {
    return (
      <StoryPage
        title='Rock Choir'
        tagline='Rock Choir cut failed payments to 1% by switching to online Direct Debit with GoCardless'
        tips={[
          'GoCardless helped them reduce payment failure rates to 1%',
          'GoCardless helped them retry failed payments instantly',
          'We helped them grow past 16,000 members',
        ]}>
        <Quote tag='I seemed to spend all my time chasing people'>
          <p>
            <a href='http://www.rockchoir.com/' className='u-link-color-p u-text-underline'
            target='_blank'>Rock Choir</a> is the UK’s leading contemporary choir group.
            With members all around the country, collecting regular monthly payments became a
            logistical nightmare. “We originally asked members to pay by card, but the failure
            rates on these approached 5% every month.”
            This was largely due to card expiry &amp; cancellation.
          </p>
          <p>
            “I seemed to spend all my time chasing people to update their card details -
            there was no way of retrying these payments,” explained director David Lusher.
          </p>
        </Quote>
        <BigQuote heroClass='story-hero--rock-choir' img='/images/testimonials/rock-choir__avatar.png'
        person='Dave Lusher' position='Rock Choir'>
          “GoCardless have taken all of the pain out of setting up and managing Direct Debit”
        </BigQuote>
        <Quote tag='Members can now easily set up and manage their payments'>
          <p>
            Rock Choir realised that the high retention rates associated with Direct Debit may
            offer the solution they needed. After considering various providers, Rock Choir
            integrated GoCardless into their website. “Members can now easily set up and manage
            their payments from our custom CRM.”
          </p>
        </Quote>
        <Quote tag='The whole payments process is much less time consuming'>
          <p>
            Thanks to GoCardless, recurring failure rates were slashed to around 1%, dramatically
            reducing the administrative burden. Retrying failed payments also became much simpler.
            “Rather than chasing people to update their details, we can now retry failed payments at the click of a button”.
          </p>
          <p>
            “Since using GoCardless, the whole payments process is much less time consuming and has
            allowed us to focus on strategy and expansion.”
          </p>
          <a href='/membership' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Txl'>
              See how GoCardless works for membership
          </a>
        </Quote>
      </StoryPage>
    );
  }
}
