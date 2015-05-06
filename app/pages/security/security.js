import React from 'react';
import Page from '../../components/page/page';
import SecurityEn from './security.en';
import SecurityFr from './security.fr';
import IntlMessage from '../../components/intl-message/intl-message';
import SecurityIcon from '../../icons/svg/security';

export default class Security extends React.Component {
  displayName = 'Security'

  render() {
    return (
      <Page>
        <div className='page-hero u-relative u-size-full u-padding-Bl'>
          <div className='site-container u-text-center u-padding-Vxm'>
            <figure className='svg-icon u-center'>
              <SecurityIcon className='svg-icon__image u-fill-invert' />
            </figure>
            <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>
              <IntlMessage message='security.header1' />
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
              <IntlMessage message='security.header2' />
            </p>
          </div>
        </div>

        <SecurityEn />
        <SecurityFr />
      </Page>
    );
  }
}
