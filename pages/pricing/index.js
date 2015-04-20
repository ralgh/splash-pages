import React from 'react';
import Page from '../../page';

export default class Pricing extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="Pricing">
        <h1>Pricing</h1>
      </Page>
    );
  }
}
