import React from 'react';
import Page from '../../components/page/page';

export default class ExampleCheckout extends React.Component {
  displayName = 'ExampleCheckout'

  render() {
    return (
      <Page>
        <div className='page-hero'>
          <div className='site-container'>
            <h1 className='u-text-heading u-margin-Txxl u-color-invert u-text-center u-text-xl u-text-light' id='ab-test-page-title'>
              Super simple payment experience
            </h1>
            <div className={
              'u-text-heading u-margin-Bxxl u-text-center u-color-invert u-text-m '+
              'u-text-light u-margin-Txxs u-text-no-smoothing u-text-center'
            }
            id='ab-test-subtitle'>
              We’ve designed our online checkout with your customers in mind,<br />so it's optimised for web, mobile and success.
            </div>
            <img src='/images/example-checkout/example-checkout-iphone@2x.png'
            className='example-checkout-hero__image u-center' alt='GoCardless example checkout on iPhone' />
          </div>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='u-text-center u-padding-Vxl'>
            <div className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bxxs'>
              See what it's like to pay using GoCardless
            </div>
            <p className='u-text-center u-color-p u-margin-Bxl'>
              Watch a short video to see the whole journey from the perspective of your customers
            </p>
            <iframe src='https://player.vimeo.com/video/114865766'
            className='u-text-center videos-container__iframe videos-container__iframe--light-bg'>
            </iframe>
          </div>
        </div>
        <hr className='u-padding-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='u-text-heading u-text-center u-color-heading u-text-l u-text-light u-margin-Bxxl'>
              View an example checkout
            </div>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <div className='u-text-heading u-color-heading u-text-center u-text-m u-text-light u-text-no-smoothing'>
                One off example
              </div>
              <p className='u-text-center u-color-p u-margin-Txxs u-size-3of5 u-center'>
                Demo of a single, one-off payment of £2.99
              </p>
              <form acceptCharset='UTF-8' action='/api/v1/example_checkout/one_off' method='post' className='ng-pristine ng-valid'>
                <input className='btn btn--hollow u-margin-Tm' name='commit' type='submit' defaultValue='View Example' />
              </form>
            </div>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <div className='u-text-heading u-color-heading u-text-center u-text-m u-text-light u-text-no-smoothing'>
                Recurring example
              </div>
              <p className='u-text-center u-color-p u-margin-Txxs u-size-3of5 u-center'>
                Demo of £99 each month, with no end date
              </p>
              <form acceptCharset='UTF-8' action='/api/v1/example_checkout/subscription' method='post' className='ng-pristine ng-valid'>
                <input className='btn btn--hollow u-margin-Tm' name='commit' type='submit' defaultValue='View Example' />
              </form>
            </div>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <div className='u-text-heading u-color-heading u-text-center u-text-m u-text-light u-text-no-smoothing'>
                Variable example
              </div>
              <p className='u-text-center u-color-p u-margin-Txxs u-size-3of5 u-center'>
                Pre-authorise future payments of any amount
              </p>
              <form acceptCharset='UTF-8' action='/api/v1/example_checkout/pre_auth' method='post' className='ng-pristine ng-valid'>
                <input className='btn btn--hollow u-margin-Tm' name='commit' type='submit' defaultValue='View Example' />
              </form>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Your brand</div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Customise our hosted payment pages with your company's logo
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Optimised for all devices</div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Our payment pages are designed to work beautifully all devices from mobile to desktop
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Super secure</div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  We use military grade security to protect bank account details transmitted online
                </p>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
