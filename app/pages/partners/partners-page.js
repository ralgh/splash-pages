import React from 'react';
import Page from '../../components/page/page';
import Link from '../../components/link/link';
import classNames from 'classnames';
import PayOnePercentCTA from '../../components/pay-one-percent/pay-one-percent';

export default class PartnersPage extends React.Component {
  displayName = 'PartnersPage';

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    logoClass: React.PropTypes.string.isRequired,
    blurb: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    screenshot: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl u-text-center'>
          <h1 className={
            classNames('u-margin-Vxm', this.props.logoClass)
          }>
            <span className='u-is-hidden-visually'>{this.props.title}</span>
          </h1>
        </div>
        <div className='site-container u-padding-Txxl u-text-center'>
          <div className='u-padding-Txl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-size-7of8 u-center u-margin-Bm'>
              {this.props.blurb}
            </h2>
            <a href={this.props.url}
            target='_blank'
            className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
              Go to {this.props.title}'s website
            </a>
            <div className='u-padding-Txxl u-margin-Txxl u-size-5of6 u-center'>
              <img src={this.props.screenshot} />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-center u-text-light'>
              We play well with others
            </h2>
            <p className='u-color-heading u-margin-Ts u-size-7of12 u-center'>GoCardless works with all of your favourite software</p>
            <div className='u-margin-Vm u-padding-Vl u-size-5of6 u-center'>
              <img src='/images/partners/software-logo-group@2x.jpg' alt='FreeAgent, Xero, Sage, KashFlow, Pitchero and ClearBooks' />
            </div>
            <Link to='partners' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-margin-Bxl'>
              View all our partners
            </Link>
          </div>
        </div>
        <hr className='u-margin-An' />
        <PayOnePercentCTA />
      </Page>
    );
  }
}
