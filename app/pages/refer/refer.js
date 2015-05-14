import React from 'react';
import Page from '../../components/page/page';

export default class Refer extends React.Component {
  displayName = 'Refer'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl'>
          <h1 className='u-text-heading u-text-center u-color-invert u-text-xl u-text-light u-margin-Vxm'>
            Earn money by referring GoCardless
          </h1>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Txl'>
            <div className='grid grid--center'>
              <div className='grid__cell u-size-3of12 u-text-center'>
                <div className='pricing-disc u-text-xl u-text-heading u-color-primary u-text-light u-center'>£50</div>
                <p className='u-color-heading u-padding-Vxl'>
                  <strong>We give you</strong> a £50 credit towards your GoCardless fees
                </p>
              </div>
              <div className='grid__cell u-size-3of12 u-text-center'>
                <div className='pricing-disc u-text-xl u-text-heading u-color-primary u-text-light u-center'>£50</div>
                <p className='u-color-heading u-padding-Vxl'>
                  <strong>We give them</strong> the same £50 credit to help them get started
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-size-4of5 u-center u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <strong>
                  What is the GoCardless referral scheme?
                </strong>
              </div>
              <p className='u-color-p'>
                The scheme lets you earn money by recommending us. Refer anyone to GoCardless and
                you both get £50 off GoCardless fees.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <strong>
                  What qualifies as a successful referral?
                </strong>
              </div>
              <p className='u-color-p'>
                A referral just needs to click your referral link and sign up. We will immediately
                credit them with £50.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <strong>How many referrals can I make each month?</strong>
              </div>
              <p className='u-color-p'>
                There's no limit. We encourage relevant referrals: Direct Debit suits those taking
                recurring payments and subscriptions.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <strong>How do I share my referral code?</strong>
              </div>
              <p className='u-color-p'>
                From the <a href='https://dashboard.gocardless.com/referrals'
                className='u-link-color-p u-text-underline'>referral page inside Dashboard</a>.
                We encourage you to add it to your blog/website and Tweet about it as well!
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='u-color-heading'>
                <strong>How do I receive the referral credit?</strong>
              </div>
              <p className='u-color-p'>
                Fees are deducted as normal. At the end of the month, we credit the referral
                fees to you if there is at least £5 pending.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Lm'>
              <div className='u-color-heading'>
                <strong>How can I see how many referrals I've made?</strong>
              </div>
              <p className='u-color-p'>
                We send you an email whenever anyone signs up using your referral link, and we send
                you a list at the end of each month.
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
