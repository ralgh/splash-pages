import React from 'react';
import Page from '../../../components/page/page';
import TeamEn from './team.en';
import TeamFr from './team.fr';
import AboutHeader from '../about-header';

export default class Team extends React.Component {
  displayName = 'Team'

  render() {
    return (
      <Page>
        <AboutHeader />

        <TeamFr />
        <TeamEn />
      </Page>
    );
  }
}
