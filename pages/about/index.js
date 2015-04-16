import React from 'react';
import Page from '../../page';

export default class About extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="About">
        <h1>About</h1>
      </Page>
    );
  }
}
