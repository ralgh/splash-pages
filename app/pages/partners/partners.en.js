import React from 'react';
import Translation from '../../components/translation/translation';
import CustomerIcon from '../../icons/svg/customer';
import AddPartnerIcon from '../../icons/svg/add-partner';
import Link from '../../components/link/link';
import PartnersLink from './partners-link';

export default class PartnersEn extends React.Component {
  displayName = 'PartnersEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='page-hero u-padding-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxm'>
            <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Help your customers get paid</h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
              We power payments for software providers large and small.<br />
              If your customers need to collect recurring payments, you should partner with us.
            </p>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light'>
              No complex bureaucracy or special charges, just our usual pricing:<br /> 1% per transaction, capped at £2.
            </h2>
            <div className='site-container u-padding-Txxl'>
              <div className='grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of2'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Delight your customers
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Simplify your customers' lives and make them more loyal by letting them take payments through your software.
                  </p>
                </div>
                <div className='grid__cell u-text-center u-size-1of2'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Grow your business
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    As a GoCardless Partner, you can earn a commission on payments or charge your customers through us, seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light'>
              Leading software providers partner with GoCardless
            </h2>
            <div className='grid integrations-grid u-margin-Txxl u-padding-Tl'>
              <PartnersLink title='FreeAgent' imgClass='freeagent-logo u-margin-Vs' to='partners_freeagent'>
                Award-winning online accounting software for freelancers and small businesses
              </PartnersLink>

              <PartnersLink title='Xero' imgClass='xero-logo' to='partners_xero'>
                Easy to use online accounting software specifically for small businesses
              </PartnersLink>

              <PartnersLink title='Sage' imgClass='sage-logo integrations-grid__sage-logo u-margin-Vxxs'
              to='partners_sage'>
                The UK's leading accounts software for small to medium sized businesses
              </PartnersLink>

              <PartnersLink title='KashFlow' imgClass='kashflow-logo u-margin-Vxxs'
              to='partners_kashflow'>
                Simple, jargon free accounting and invoicing software for small businesses
              </PartnersLink>

              <PartnersLink title='Pitchero' imgClass='pitchero-logo u-margin-Vs'
              to='partners_pitchero'>
                A global network of sports sites, powering over 10,000 websites worldwide
              </PartnersLink>

              <PartnersLink title='Clear Books' imgClass='clearbooks-logo u-margin-Vxxs'
              to='partners_clearbooks'>
                Integrated suite of cloud services for sole practitioners and startup accountants
              </PartnersLink>
            </div>
          </div>
          <p className='u-text-s u-color-p u-margin-Vxs'>
            For a full list of our integrations, <Link to='faq_merchants'>see here</Link>.
          </p>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Become a Partner
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Expand your business by integrating with GoCardless today. <br />
                For more information, email us at <a href='mailto:help@gocardless.com'>help@gocardless.com</a>
              </p>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
