import React from 'react';
import LegalPage from '../legal-page';
import LegalIntroductionEn from './legal-introduction.en';
import LegalIntroductionFr from './legal-introduction.fr';
import LegalIntroductionDe from './legal-introduction.de';

export default class LegalIntroduction extends React.Component {
  displayName = 'LegalIntroduction'

  render() {
    return (
      <LegalPage>
        <LegalIntroductionEn />
        <LegalIntroductionFr />
        <LegalIntroductionDe />
      </LegalPage>
    );
  }
}
