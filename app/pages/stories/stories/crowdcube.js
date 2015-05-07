import React from 'react';
import BigQuote from '../big-quote';
import StoryPage from '../story-page';
import Quote from '../quote';

export default class StoryCrowdCubeStory extends React.Component {
  displayName = 'StoryCrowdCubeStory'

  render() {
    return (
      <StoryPage
        title='Crowdcube'
        tagline='Crowdcube saved admin time and kept the FCA happy by switching to GoCardless'
        tips={[
            'GoCardless helped save at least 10 hours of admin time every week',
            'GoCardless helped comply with FCA regulations',
            'We helped them grow to 85,000 members',
        ]}
        bgimg='crowdcube-logo stories-item__logo--crowdcube'>
        <Quote tag='We were spending hours every day managing payments'>
          <p><a href='http://www.crowdcube.com' className='u-link-color-p u-text-underline' target='_blank'>
          Crowdcube</a> is the world’s leading investment crowdfunding site. It enables ordinary and professional
          investors to help entrepreneurs raise the finance they need to grow.</p>
          <p>Before switching to GoCardless, investments were made using bank deposits which were held
          until the relevant pitch had reached its target.</p>
          <p>Darren Westlake, CEO explains: “It wasn’t the most efficient way of doing things.
          Even though we were still quite small we were spending hours every day managing payments:
          checking our accounts, aligning statements and customers and moving funds to the relevant pitch.”</p>
        </Quote>
        <BigQuote person='Darren Westlake' position='Crowdcube'>
          Switching to GoCardless has helped us completely wipe out payments admin which means
          we now have extra time to work on other projects.
          What’s more, we never touch client money.
          Crowdfunding is now a regulated industry so this could’ve been a real issue but with
          GoCardless we completely bypassed it.
        </BigQuote>
        <Quote tag='GoCardless was simple to integrate into our systems'>
          <p>Looking for a more scalable solution Darren turned to Direct Debit with GoCardless.</p>
          <p>He explains, “We chose GoCardless because it let us set up payments without taking
          any money until the pitch has reached its target meaning we no longer had to spend hours
          checking accounts. It was simple to integrate into our systems and really intuitive and
          easy to use for our entrepreneurs and our customers.” </p>
          <p>Crowdcube now ask all customers to use GoCardless and each of their entrepreneurs has
          their own account so payments can be made directly to them. </p>
        </Quote>
        <Quote tag='Switching to GoCardless has helped us completely wipe out payments admin'>
          <p>Since joining GoCardless in November 2012, Crowdcube has grown 1000% to 85,000
          members but the time they have to spend managing payments has all but disappeared.</p>
          <p>“Switching to GoCardless has helped us completely wipe out payments admin which
          means we now have extra time to work on other projects. What’s more, we never touch
          client money. Crowdfunding is now a regulated industry so this could’ve been a real
          issue but with GoCardless we completely bypassed it.”</p>
        </Quote>
      </StoryPage>
    );
  }
}
