import React from 'react';
import PartnersPage from '../partners-page';

export default class PartnersPitchero extends React.Component {
  displayName = 'PartnersPitchero'

  render() {
    return (
      <PartnersPage
      title='Pitchero'
      logoClass='pitchero-header-logo'
      blurb={
        'Our integration with Pitchero gives sports clubs the ability to take recurring payments ' +
        'online with no hassle, giving them low failure rates, great fees and zero admin.'
      }
      url='http://pitchero.com/'
      screenshot='/images/partners/pitchero-frame@2x.jpg' />
    );
  }
}
