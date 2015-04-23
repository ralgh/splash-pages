import React from 'react';
import Translation from '../../components/translation/translation';

export default class HomeEn extends React.Component {
  displayName = 'HomeEn'

  render() {
    return (
      <Translation locales="en-gb">
        <h1>Home en-gb</h1>
      </Translation>
    );
  }
}
