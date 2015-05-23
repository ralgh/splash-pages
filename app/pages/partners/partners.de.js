import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import ProIcon from '../../icons/svg/pro';
import CustomerIcon from '../../icons/svg/customer';
import AddPartnerIcon from '../../icons/svg/add-partner';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import PartnersLink from './partners-link';

export default class PartnersDe extends React.Component {
  displayName = 'PartnersDe'

  render() {
    return (
      <Translation locales='de'>
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
              No complex bureaucracy or special charges, just our usual
              pricing:<br /> <Message message='pricing.per_transaction_amount_normal' /> per transaction,
              capped at <Message message="pricing.cost_cap" />.
            </h2>
            <div className='site-container u-padding-Txxl'>
              <div className='grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <ProIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Differentiate yourself
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Stay ahead of the competition by offering a white-label Direct Debit experience to your customers.
                  </p>
                </div>
                <div className='grid__cell u-text-center u-size-1of3'>
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
                <div className='grid__cell u-text-center u-size-1of3'>
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
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Become a Partner
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Expand your business by integrating with GoCardless today. <br />
                For more information, email us at <Href to='email' />
              </p>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}