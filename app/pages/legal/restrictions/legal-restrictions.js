import React from 'react';
import LegalPage from '../legal-page';
import LegalRestrictionsEn from './legal-restrictions.en';
import LegalRestrictionsFr from './legal-restrictions.fr';

export default class LegalRestrictions extends React.Component {
  displayName = 'LegalRestrictions'

  render() {
    return (
      <LegalPage>
        <LegalRestrictionsEn />
        <LegalRestrictionsFr />
      </LegalPage>
    );
  }
}
