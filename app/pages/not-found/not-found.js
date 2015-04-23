import React from 'react';
import Page from '../../components/page/page';

export default class NotFound extends React.Component {
  displayName = 'NotFound'

  render() {
    return (
      <Page>
        <h1>Not found</h1>
      </Page>
    );
  }
}
