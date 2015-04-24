import React from 'react';
import Translation from '../../components/translation/translation';

import MobileIcon from '../../icons/icon/mobile';
import CheckmarkIcon from '../../icons/icon/checkmark';
import MoneyFlowerIcon from '../../icons/icon/money-flower';


export default class HomeEn extends React.Component {
  displayName = 'HomeEn'

  render() {
    return (
      <Translation locales='en-gb'>
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
                  <CheckmarkIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
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
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ultra-low fees
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Less than half the cost of Paypal, with easy-to-understand pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
