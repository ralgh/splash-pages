import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';

export default class FaqMerchantsReferrals extends React.Component {
  displayName = 'FaqMerchantsReferrals'

  render() {
    return (
      <FaqMerchantsPage>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Referral scheme</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What is the GoCardless Referral scheme?
        </h3>
        <p className='para'>
          The referral scheme lets you earn money by recommending GoCardless. Refer anyone to GoCardless and we will
          give you both £50 credit each towards your GoCardless fees.
        </p>
        <p className='para'>
          Find out more <a href='/refer' className='u-link-color-p u-text-underline'>here</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Who is eligible to make a referral?
        </h3>
        <p className='para'>
          Anyone with a GoCardless account can make referrals. It doesn't matter if you're a merchant or a reseller.
        </p>
        <p className='para'>
          You can find your referral link <a href='https://dashboard.gocardless.com/referrals'
          className='u-link-color-p u-text-underline'>here</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What qualifies as a successful referral?
        </h3>
        <p className='para'>
          A referral just needs to click your referral link and sign-up. We will immediately give both of
          you £50 of GoCardless fee credits.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How will I know how many referrals I have made?
        </h3>
        <p className='para'>
          Everyone who signs up after clicking your referral link will be displayed in the referrals section of
          your account. We'll show when they signed-up and how much commission they've earned you. We'll also email
          you the moment someone signs up.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Is there a limit to the number of referrals I can make?
        </h3>
        <p className='para'>
          No. But referrals are most effective when they are relevant.
        </p>
        <p className='para'>
          Find out more about the best <a href='https://gocardless.com/direct-debit/use-cases/'
          className='u-link-color-p u-text-underline'>Direct Debit use cases</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How do I share my referral link?
        </h3>
        <p className='para'>
          However you want. Feel free to email it out to people, tell them about it in person, or blog about it
          to a wider audience.
        </p>
        <p className='para'>
          Please don't try to abuse the system though - this is in contravention of our <a href='/legal/restrictions'
          className='u-link-color-p u-text-underline'>Terms of Service</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Where can I find my referral link?
        </h3>
        <p className='para'>
          Your unique referral code will be displayed in the <a href='https://dashboard.gocardless.com/referrals'
          className='u-link-color-p u-text-underline'>referral section</a> of your GoCardless account. It is accessible
          from your dashboard settings and does not expire.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How do I get my credit?
        </h3>
        <p className='para'>
          We'll collect your fees as usual, and will pay you a rebate every month up to your £50 credit. We will send
          you an email summary at the same time. You can check how much commission you have earned anytime in
          your <a href='https://dashboard.gocardless.com/referrals' className='u-link-color-p u-text-underline'>account settings</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I send the referral to a different page on the site?
        </h3>
        <p className='para'>
           Yes. By default your referral link will go to the GoCardless home page. To send people to a different page,
           take the query string from the end of the referral link and add it to the end of any GoCardless URL.
          </p>
        <p className='para'>
          The query string is the bit that looks like this: '?r=1ABC23DE45'. For example, to send them to the sign-up
          page you would change the URL to: https://gocardless.com/merchants/new?r=1ABC23DE45.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Does my link expire?
        </h3>
        <p className='para'>
          No - your link will not expire.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What if someone I refer forgets to use my link?
        </h3>
        <p className='para'>
          Just let us know if someone you refer forgets to use your referral link, or the referral is not tracked for
          any reason - we can activate the referral link for you.
        </p>
      </FaqMerchantsPage>
    );
  }
}
