import React from 'react';
import { filterRouteByCategory } from '../../../router/route-helpers';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class Jobs extends React.Component {
  displayName = 'Jobs'

  static contextTypes = {
    locales: PropTypes.locale,
  }

  render() {
    const {locales} = this.context;
    const pages = filterRouteByCategory('jobs', locales);
    // Render the first job by default (we need an overview page this is weird)
    const Handler = pages[0].handler;

    return (
      <div>
        <Handler />
      </div>
    );
  }
}
