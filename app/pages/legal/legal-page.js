import React from 'react';
import Page from '../../components/page/page';
import { filterRouteByCategory } from '../../router/route-helpers';
import Link from '../../components/link/link';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import Message from '../../components/message/message';

export default class LegalPage extends React.Component {
  displayName = 'LegalPage';

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  };

  static contextTypes = {
    locales: PropTypes.locale,
  }

  render() {
    const {locales} = this.context;
    const pages = filterRouteByCategory('legal', locales);


    const legalNav = pages.map(function(page) {
      return (<li key={page.routeConfig.name}>
        <Link to={page.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
          <Message message={`${page.routeConfig.name}.nav_title`} />
        </Link>
      </li>);
    });

    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl'>
          <h1 className='u-text-heading u-text-center u-color-invert u-text-xl u-text-light u-margin-Vxm'>
            <Message message='legal.title' />
          </h1>
        </div>
        <div className='site-container u-padding-Vxxl grid'>
          <div className='u-padding-Vxl'>
            <div className='grid__cell u-size-4of12'>
              <div className='u-size-5of6'>
                <ul className='nav nav-tabs'>
                  { legalNav }
                </ul>
                <hr className='u-size-11of12' />
                <p className='para u-padding-Txs'>
                  <Message message='legal.sidebar_text'/>&nbsp;
                  <Message message='phone_local' />
                </p>
              </div>
            </div>

            <div className='grid__cell u-size-8of12'>
              {this.props.children}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
