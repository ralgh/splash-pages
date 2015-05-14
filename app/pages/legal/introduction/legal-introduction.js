import React from 'react';
import LegalPage from '../legal-page';
import LegalIntroductionEn from './legal-introduction.en';
import LegalIntroductionFr from './legal-introduction.fr';

export default class LegalIntroduction extends React.Component {
  displayName = 'LegalIntroduction'

  render() {
    return (
      <LegalPage>
        <LegalIntroductionEn />
        <LegalIntroductionFr />
      </LegalPage>
    );
  }
}
