import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';

import MobileIcon from '../../icons/svg/mobile';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import TickSquareIcon from '../../icons/svg/tick-square';
import ProIcon from '../../icons/svg/pro';
import ShopIcon from '../../icons/svg/shop';
import IntegrationsIcon from '../../icons/svg/integrations';

export default class HomeDe extends React.Component {
  displayName = 'HomeDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Bringing Direct Debit into the 21st century
              </h2>
              <p className='u-text-s u-color-p u-margin-Txs'>
                GoCardless allows you to benefit from the great fees and low failure rates of Direct Debit,
                without the operational complexity associated with traditional providers.
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
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  UK &amp; Eurozone
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Accept payments with Bacs Direct Debit and SEPA Direct Debit
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Trusted by thousands of businesses
              </h2>
              <p className='u-text-s u-color-p u-margin-Txs'>
                <Message message="home.trusted_message_scale" />
                <br />
                Whatever your scale, GoCardless works for you.
              </p>
            </div>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
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
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                Learn about our pricing
              </Link>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
