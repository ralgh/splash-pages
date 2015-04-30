import React from 'react';
import Translation from '../../components/translation/translation';

import MobileIcon from '../../icons/svg/mobile';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';

import ProIcon from '../../icons/svg/pro';
import ShopIcon from '../../icons/svg/shop';
import IntegrationsIcon from '../../icons/svg/integrations';

import Router from 'react-router';
var { Link } = Router;

export default class HomeEn extends React.Component {
  displayName = 'HomeEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Bringing Direct Debit into the 21st century
              </h2>
              <p className='u-text-s u-color-p u-margin-Txs'>
                GoCardless allows you to benefit from the great fees and low failure rates of Direct Debit, without the operational complexity associated with traditional providers.
              </p>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Built for online
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Whether it's our simple dashboard or our API, you're in control
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Fully automated
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Save time, stop human errors and avoid failed payments
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ultra-low fees
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Less than half the cost of Paypal, with easy-to-understand pricing
                </p>
              </div>
            </div>
            <p className='u-color-p u-margin-Txxl u-padding-Tm'>
              Want to learn more about Direct Debit?
              <a data-ng-click='modal.isShown = true; modal.slide = 1'> Find out the basics</a>
            </p>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <h2 className='u-text-l u-text-heading u-colo-heading u-text-light u-margin-Tl'>
            What are you looking for?
          </h2>
          <div className='product-grid grid u-margin-Vxxl'>
            <a href='/features' id='track-cta-features' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='product-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <ShopIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <ShopIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Super simple<br />online payments
                </p>
              </div>
              <div className='product-grid__btn btn u-size-full'>Discover GoCardless</div>
            </a>
            <a href='/pro' id='track-cta-pro' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='product-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ProIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Complete control<br />over Direct Debit
                </p>
              </div>
              <div className='product-grid__btn btn u-size-full'>Discover GoCardless Pro</div>
            </a>
            <a href='/partners' id='track-cta-partners' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='product-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <IntegrationsIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <IntegrationsIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Help your customers<br />collect payments
                </p>
              </div>
              <div className='product-grid__btn btn u-size-full'>Discover our partners</div>
            </a>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Txl'>
              <div className='u-size-1of2 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Trusted by thousands of businesses
                </h2>
                <p className='u-text-s u-color-p u-margin-Txs'>
                  We’re a Bacs approved bureau that collects millions of pounds for our merchants every day. Whatever your scale, GoCardless works for you.
                </p>
              </div>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                <img src='/images/logos/pro-logos@2x.png' />
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Simple, transparent pricing for everyone
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Competitive rates for everyone from individuals through to large corporations
              </p>
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>Learn about our pricing</Link>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <a href='/merchants/new' id='track-cta-sign-up' className='btn'>Start taking payments</a>
            <p className='u-color-p u-margin-Ts'>No set up costs, no hidden charges, no commitments</p>
          </div>
        </div>
      </Translation>
    );
  }
}
