import React from 'react';
import Translation from '../../components/translation/translation';
import { Link } from 'react-router';

export default class PricingEn extends React.Component {
  displayName = 'PricingEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <div className='page-hero--pricing page-hero'>
          <div className='site-container'>
            <div className='grid pricing-options u-center u-padding-Bxl'>
              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless</h1>
                <div className='u-relative u-background-primary u-padding-Vxl'>
                  <div className='pricing-options__badge'>
                    <img src='/images/pricing/most-popular-badge@2x.png' alt='most popular' />
                  </div>
                  <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>1%</h2>
                  <p className='u-text-heading-light u-text-center u-color-invert u-text-s u-margin-Txxs'>
                    Per transaction, capped at £2
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-heading'>
                    <b>Perfect for small to medium sized businesses</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    No setup costs, hidden fees, or commitments</li>
                  <li className='pricing-options__list-item'>
                    Scale pricing available (<a href='#scale-pricing-container'>?</a>)
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='features'>Find out more about GoCardless</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <a href='/merchants/new' className='btn u-size-full'>Sign up today</a>
                  </li>
                </ul>
              </div>
              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>Pro</h1>
                <div className='u-background-dark-gray-darken u-padding-Vxl'>
                  <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>1p - 60p</h2>
                  <p className='u-text-heading-light u-text-center u-color-invert u-text-s u-margin-Txxs'>
                    Per transaction
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-heading'>
                    <b>For organisations that want total control</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b>£200 monthly fee</b>, no hidden charges
                  </li>
                  <li className='pricing-options__list-item'>
                    For businesses taking <b>&gt;500 payments</b> per month
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Find out more about Pro</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contact sales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-heading'>About our pricing</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <b>
                  Are there really no other fees?
                </b>
              </div>
              <p className='u-color-p'>
                No, there are no monthly charges or hidden fees of any kind. We never charge for chargebacks or payment failures. All you'll ever pay is 1% of the transaction amount, up to a maximum of £2.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Do you offer discounts for large volume?</b>
              </div>
              <p className='u-color-p'>
                Yes. Discounts for high volume are built into the pricing of GoCardless Pro, and scale pricing is available on request for users of regular GoCardless that take over 250 payments per month. To find out more,
                please <Link to='contact_sales'className='u-link-color-p u-text-underline'>contact sales</Link>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-heading'>
                <b>What does ‘capped at £2’ mean?</b>
              </div>
              <p className='u-color-p'>
                You'll never pay more than £2 per transaction even if the transaction value is greater than £200.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Will I still be charged if a payment fails?</b>
              </div>
              <p className='u-color-p'>
                No. We only take fees for successful payments.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>Got any questions?</h2>
            <p className='u-color-p u-margin-Ts'>Contact support on +44 (0) 20 7183 8674</p>
            <a href='/merchants/new/' className='btn btn--hollow u-margin-Tm'>Sign up today</a>
          </div>
        </div>
      </Translation>
    );
  }
}
