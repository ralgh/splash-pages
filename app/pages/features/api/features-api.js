import React from 'react';
import Page from '../../../components/page/page';
import Tabs from '../../../components/tabs/tabs';
import CheckListIcon from '../../../icons/svg/checklist';
import SecurityIcon from '../../../icons/svg/security';
import AddPartnerIcon from '../../../icons/svg/add-partner';
import Link from '../../../components/link/link';

export default class FeaturesAPI extends React.Component {
  displayName = 'FeaturesAPI'

  render() {
    return (
      <Page>
        <div className='page-hero'>
          <div className='u-text-center u-padding-Vl'>
            <h1 className='u-text-heading u-text-xl u-text-light u-color-invert u-padding-Bs'>
              GoCardless API
            </h1>
            <div className={
              'u-text-heading u-margin-Bm u-text-center u-color-invert u-text-m ' +
              'u-text-light u-margin-Txxs u-text-no-smoothing u-text-center'
            }>
              Automate payment collection and reconciliation with our simple, RESTful API
            </div>
            <div className='u-padding-Vl'>
              <iframe src='https://player.vimeo.com/video/101498927' className='videos-container__iframe'>
              </iframe>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
              Integrating with GoCardless is easy and secure
            </h2>
            <p className='u-text-s u-color-p u-margin-Txs'>
              We maintain official libraries for&nbsp;
              <a href='https://github.com/gocardless/gocardless-ruby'>Ruby</a>,&nbsp;
              <a href='https://github.com/gocardless/gocardless-php'>PHP</a>,&nbsp;
              <a href='https://github.com/gocardless/gocardless-java'>Java</a> &amp;&nbsp;
              <a href='https://developer.gocardless.com/#official-libraries'>more</a>
            </p>
            <div className='grid u-margin-Vl u-padding-Vl'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automate your payments
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Customers set up Direct Debit through our secure online payment pages.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <SecurityIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <SecurityIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className={
                  'u-text-heading u-color-heading u-text-light ' +
                  'u-text-no-smoothing u-text-m u-margin-Tm'
                }>
                  Military grade security
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  RSA encryption and secure communication channels to keep your customers' data safe.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className={
                  'u-text-heading u-color-heading u-text-light ' +
                  'u-text-no-smoothing u-text-m u-margin-Tm'
                }>
                  Simple to integrate
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Add GoCardless to your site in minutes with our easy to use API libraries.
                </p>
              </div>
            </div>
            <a href='https://developer.gocardless.com'
            className={
              'u-color-primary u-text-upcase u-text-xxs ' +
              'u-text-heading u-text-semi u-block u-margin-Tm'
            }>
              Read our API documentation
            </a>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-xl u-text-light u-margin-Bs'>
                How it works
              </h2>
            </div>
            <div className='u-text-center u-text-heading u-text-xxs u-text-semi u-padding-Bxl u-padding-Txxl'>
              <Tabs triggers={[(
                <a href='#setup-new-direct-debit'
                className='tab-link u-text-upcase u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                  Setup a new Direct Debit
                </a>
              ), (
                <a href='#take-payment'
                className='tab-link u-text-upcase u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                  Take payment
                </a>
              ), (
                <a href='#create-subscription'
                className='tab-link u-text-upcase u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                  Create a subscription
                </a>
              ),]}>
                <div>
                  <article className='u-text-start sage-screenshot u-padding-Al u-margin-Tl u-size-3of5 u-center'>
                    <pre className='highlight ruby'>
                      <span className='c1'># A pre-authorization for up to £100.00 every month</span><br /><br />
                      <span className='no'>GoCardless</span><span className='p'>.</span>
                      <span className='nf'>new_pre_authorization_url</span><span className='p'>(</span><br />
                      <span className='ss'>  :max_amount</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'100.00'</span><span className='p'>,</span><br />
                      <span className='ss'>  :name</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'Stock Photos'</span><span className='p'>,</span><br />
                      <span className='ss'>  :interval_unit</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'month'</span><span className='p'>,</span><br />
                      <span className='ss'>  :interval_length</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='mi'>1</span><br />
                      <span className='p'>)</span><br />
                    </pre>
                  </article>
                </div>
                <div>
                  <article className='u-text-start sage-screenshot u-padding-Al u-margin-Tl u-size-3of5 u-center'>
                    <pre className='highlight ruby'><span className='c1'># A Direct Debit payment of £15.00</span><br /><br />
                      <span className='n'>pre_auth</span> <span className='o'>=&nbsp;</span>
                      <span className='no'>GoCardless</span><span className='o'>::</span>
                      <span className='no'>PreAuthorization</span><span className='p'>.</span><span className='nf'>find</span>
                      <span className='p'>(</span><span className='s2'>'0540QD22SKND'</span><span className='p'>)</span><br />
                      <span className='n'>pre_auth</span><span className='p'>.</span>
                      <span className='nf'>create_bill</span><span className='p'>(</span><br />
                      <span className='ss'>  :name</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'150 credits'</span><span className='p'>,</span><br />
                      <span className='ss'>  :amount</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'15.00'</span><span className='p'>,</span><br />
                      <span className='ss'>  :charge_customer_at</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'2014-08-27'</span><br />
                      <span className='p'>)</span>
                    </pre>
                  </article>
                </div>
                <div>
                  <article className='u-text-start sage-screenshot u-padding-Al u-margin-Tl u-size-3of5 u-center'>
                    <pre className='highlight ruby'><span className='c1'># A subscription for £15.00 every month</span><br /><br />
                      <span className='no'>GoCardless</span><span className='p'>.</span>
                      <span className='nf'>new_subscription_url</span><span className='p'>(</span><br />
                      <span className='ss'>  :amount</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'15.00'</span><span className='p'>,</span><br />
                      <span className='ss'>  :name</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'Premium Account'</span><span className='p'>,</span><br />
                      <span className='ss'>  :interval_unit</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='s2'>'month'</span><span className='p'>,</span><br />
                      <span className='ss'>  :interval_length</span> <span className='o'>=&gt;&nbsp;</span>
                      <span className='mi'>1</span><span className='p' /><br />
                      <span className='p'>)</span>
                    </pre>
                  </article>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>Simple hosted payment pages</h2>
                <p className='u-color-p u-margin-Bm'>
                  GoCardless handles all the Direct Debit compliance requirements so you can get started instantly. Our secure,
                  online payment pages are optimised based on experience with millions of customers.
                  <br />
                  <a href='/example-checkout' className='u-text-underline u-link-color-p'>
                    View an example
                  </a>
                </p>
                <p className='u-color-p'>
                  Looking for complete control over the payment experience?
                  <br />
                  <Link to='pro' className='u-link-color-p u-text-underline'>Learn about GoCardless Pro</Link>.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-end'>
                <img alt='Api step 1' className='u-size-11of12' src='/images/features/api-step-1@2x.png' />
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <img alt='Api step 2' className='u-size-11of12' src='/images/features/api-step-2@2x.png' />
              </div>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>Payments in just two lines of code</h2>
                <p className='u-color-p'>
                  Trigger one-off, variable or recurring payments in just a few lines of code. GoCardless
                  will handle all the Direct Debit notification requirements for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>Realtime reporting</h2>
                <p className='u-color-p'>
                  View all your payments in our ready-made online dashboard, including export functionality. We'll
                  also notify you programmatically whenever the status of a payment or mandate changes.
                  <br />
                  <Link to='features' className='u-text-underline u-link-color-p'>
                    More about our dashboards
                  </Link>
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-end'>
                <img alt='Api step 3' className='u-size-11of12' src='/images/features/api-step-3@2x.png' />
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Get started today
              </h2>
              <a href='https://developer.gocardless.com' target='_blank' className='btn btn--hollow u-margin-Tm'>
                Read our API documentation
              </a>
              <hr className='u-margin-Vxl horizontal-rule u-size-3of4 u-center' />
              <p className='u-color-heading u-margin-Bxxs'>
                <strong>Looking complete control, like custom payment pages?</strong>
              </p>
              <Link to='pro' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Learn about GoCardless Pro
              </Link>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
