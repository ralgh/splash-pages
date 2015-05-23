import React from 'react';
import Page from '../../components/page/page';
import AboutEn from './about.en';
import AboutFr from './about.fr';
import AboutDe from './about.de';
import AboutHeader from './about-header';

export default class About extends React.Component {
  displayName = 'About'

  render() {
    return (
      <Page>
        <AboutHeader />

        <AboutEn />
        <AboutFr />
        <AboutDe />
      </Page>
    );
  }
}
