import React from 'react';
import rest from 'lodash/array/rest';
import { filterRouteByCategory } from '../../../router/route-helpers';
import Message from '../../../components/message/message';
import Link from '../../../components/link/link';
import AboutHeader from '../about-header';
import Page from '../../../components/page/page';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class JobsPage extends React.Component {
  displayName = 'JobsPage'

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static contextTypes = {
    locales: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { locales, availableLocales } = this.context;
    const pages = filterRouteByCategory('jobs', locales, availableLocales);

    const categories = pages.reduce(function(memo, job) {
      const category = rest(job.routeConfig.category.split('.')).join('.');
      memo[category] = memo[category] || [];
      memo[category].push(job);
      return memo;
    }, {});

    const jobsNav = Object.keys(categories).map(function(category) {
      return [
        (<li key={category} className='u-text-heading u-text-xs u-text-upcase u-color-p u-padding-Tm u-padding-Bs'>
          <Message message={`jobs.${category}`} />
        </li>),
        categories[category].map(function(job) {
          return (<li key={job.routeConfig.name}>
            <Link to={job.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
              <Message message={`${job.routeConfig.name}.title`} />
            </Link>
          </li>);
        }),
      ];
    });

    return (
      <Page>
        <AboutHeader />

        <div className='site-container u-padding-Vxxl u-relative'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
              <Message message='jobs.open_positions' />
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-1of3'>
                <ul className='nav nav-tabs u-margin-Ts'>
                  { jobsNav }
                </ul>
              </div>
              <div className='grid__cell u-size-2of3 u-padding-Tl u-padding-Ll'>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
