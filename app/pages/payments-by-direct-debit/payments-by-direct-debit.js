import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import Link from '../../components/link/link';

export default class PaymentsByDirectDebit extends React.Component {
  displayName = 'PaymentsByDirectDebit'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl'>
          <div className='site-container u-padding-Vxm u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Take recurring payments online with Direct Debit
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Cheaper and more reliable than card networks, more flexible than standing orders
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  No more cashflow issues
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Make late payments a thing of the past. With Direct Debit, you control when you get paid.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Lower failure rates
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Monthly failure rates of less than 1% - that’s 3x lower than cards. Any failed payments can be retried quickly and easily.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Low cost, low admin
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Cheaper than card networks. With GoCardless, accepting Direct Debit is easy and effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Txxl'>
          <div className='u-padding-Txl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
              GoCardless makes getting paid easier than ever
            </h2>
            <div className='grid u-center u-text-center u-padding-Tl u-margin-Bl u-margin-Ts'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Really simple setup</h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Automate repeat payments and collect from account customers at the click of a button.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Ultra-low fees</h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Less than half the cost of Paypal. Competitive rates for everyone from individuals through to large corporations.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Integrates seamlessly</h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Through our RESTful API, GoCardless integrates perfectly with your website.</p>
              </div>
            </div>
            <div className='u-padding-Vm u-margin-Vm u-text-center'>
              <Link to='features' className='btn u-padding-Hl'>Learn more</Link>
              <Link to='pricing' className='btn u-padding-Hl btn--hollow u-margin-Lm'>View our pricing</Link>
            </div>
            <div className='u-padding-Txxl u-size-5of6 u-center'>
              <img src='/images/features/dashboard-frame.jpg' className='vertical-page__dashboard-image' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center u-center'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center u-margin-Bl'>
              The best way to learn more is to try it out
            </h2>
            <a href='/merchants/new' className='btn'>Start taking payments</a>
            <p className='u-color-p u-margin-Ts'>No set up costs, no monthly fees, no hidden charges</p>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-p'><strong>Want to talk to someone first?</strong><br />
              Call our payments experts on <Message pointer='phone_local' /><br />
              We're available 9am - 6pm Monday to Friday
            </p>
          </div>
        </div>
      </Page>
    );
  }
}
