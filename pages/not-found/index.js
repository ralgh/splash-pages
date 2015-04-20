import React from 'react';
import Page from '../../page';

export default class NotFound extends React.Component {
  render() {
    return (
      <Page params={this.props.params} title="Not Found">
        <h1>Not found</h1>
      </Page>
    );
  }
}
