import React from 'react';
import LegalPage from '../../legal-page';
import Link from '../../../../components/link/link';

export default class LegalOldRestrictionsIndex extends React.Component {
  displayName = 'LegalOldRestrictionsIndex'

  render() {
    return (
      <LegalPage>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Old restricted activity lists</h2>
        <p className='para'>
          These are outdated lists of restricted activities for which you may not use the
          services GoCardless offers. You can read an up-to-date list of our Restricted
          Activities <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>here</Link>.
        </p>
        <ul className='list'>
          <li>
            <Link to='legal_old_restrictions_2014_07_31' className='u-link-color-p u-text-underline'>
              Restricted activities [prior to 31st July 2014]
            </Link>
          </li>
          <li>
            <Link to='legal_old_restrictions_2014_09_19' className='u-link-color-p u-text-underline'>
              Restricted activities [prior to 19th September 2014]
            </Link>
          </li>
        </ul>
      </LegalPage>
    );
  }
}
