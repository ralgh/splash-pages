import React from 'react';
import Link from '../link/link';
import Message from '../message/message';

export default class PayOnePercentCTA extends React.Component {
  displayName = 'PayOnePercentCTA'

  render() {
    return (
      <div className='site-container u-padding-Vxxl'>
        <div className='u-text-center u-padding-Vxl'>
          <div className='u-size-1of2 u-center'>
            <h2 className='u-text-heading u-color-heading u-text-xl u-text-light'>
              <Message pointer='signup_cta.main' />
            </h2>
            <p className='u-color-p u-margin-Txxs'>
              <Message pointer='signup_cta.description' />
            </p>
            <Link to='pricing' id="track-cta-pricing"
            className='btn btn--hollow u-margin-Tm'>
              <Message pointer='signup_cta.learn_more' />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
