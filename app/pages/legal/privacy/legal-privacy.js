import React from 'react';
import LegalPage from '../legal-page';
import LegalPrivacyEn from './legal-privacy.en';
import LegalPrivacyFr from './legal-privacy.fr';

export default class LegalPrivacy extends React.Component {
  displayName = 'LegalPrivacy'

  render() {
    return (
      <LegalPage>
        <LegalPrivacyEn />
        <LegalPrivacyFr />
      </LegalPage>
    );
  }
}
