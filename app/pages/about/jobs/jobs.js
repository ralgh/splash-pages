import React from 'react';
import { filterRouteByCategory } from '../../../router/route-helpers';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class Jobs extends React.Component {
  displayName = 'Jobs'

  static contextTypes = {
    currentLocale: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { currentLocale, availableLocales } = this.context;
    const pages = filterRouteByCategory('jobs', currentLocale, availableLocales);
    // Render the first job by default (we need an overview page this is weird)
    const Handler = pages[0].handler;

    return (
      <div>
        <Handler />
      </div>
    );
  }
}
