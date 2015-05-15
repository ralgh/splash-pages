import React from 'react';
import Link from '../link/link';
import Translation from '../translation/translation';

export default class PayOnePercentCTA extends React.Component {
  displayName = 'PayOnePercentCTA'

  render() {
    return (
      <Translation locales='en-GB'>
        <div className='site-container u-padding-Vxxl'>
          <div className='u-text-center u-padding-Vxl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-xl u-text-light'>
                Pay 1%
              </h2>
              <p className='u-color-p u-margin-Txxs'>
                Just 1% per transaction, capped at £2.
              </p>
              <Link to='pricing' id="track-cta-pricing"
              className='btn btn--hollow u-margin-Tm'>
                Learn about our pricing
              </Link>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
