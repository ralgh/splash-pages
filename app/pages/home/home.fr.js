import React from 'react';
import Translation from '../../components/translation/translation';

export default class HomeFr extends React.Component {
  displayName = 'HomeFr'

  render() {
    return (
      <Translation locales="fr-FR">
        <h1>Home fr</h1>
      </Translation>
    );
  }
}
