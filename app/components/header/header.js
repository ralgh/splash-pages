import React from 'react';
import { Link } from 'react-router';
import IntlMessage from '../intl-message/intl-message';
import LinkExists from '../link-exists/link-exists';
import Logo from '../../icons/logo/logo';
import Popover from '../popover/popover';
import classNames from 'classnames';

class Header extends React.Component {
  displayName = 'Header'

  static defaultProps = {
    isInverted: true,
  };

  static propTypes = {
    isInverted: React.PropTypes.bool,
  };

  render() {
    const isInverted = this.props.isInverted;
    const linkClass = classNames('u-padding-Vl u-block u-link-clean', {
      'u-link-invert': isInverted,
      'u-link-default': !isInverted,
    });

    const products = (
      <ul className='u-text-xxs u-padding-Vxs'>
        <LinkExists to='features'>
          <li>
            <Link to='features' id='track-nav-features' className='u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block'>
              <span className='u-link-complex-target u-text-semi'><IntlMessage message='features.nav_title' /></span>
              <p className='u-color-p'><IntlMessage message='features.explainer' /></p>
            </Link>
          </li>
        </LinkExists>
        <LinkExists to='pro'>
          <hr className='u-margin-Vxs' />
          <li>
            <Link to='pro' id='track-nav-pro' className='u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block'>
              <span className='u-link-complex-target u-text-semi'><IntlMessage message='pro.nav_title' /></span>
              <p className='u-color-p'><IntlMessage message='pro.explainer' /></p>
            </Link>
          </li>
        </LinkExists>
        <LinkExists to='partners'>
          <hr className='u-margin-Vxs' />
          <li>
            <Link to='partners' id='track-nav-partners' className='u-link-complex uLinki-link-clean u-padding-Vxs u-padding-Hm u-block'>
              <span className='u-link-complex-target u-text-semi'><IntlMessage message='partner.nav_title' /></span>
              <p className='u-color-p'><IntlMessage message='partner.explainer' /></p>
            </Link>
          </li>
        </LinkExists>
      </ul>
    );

    return (
      <div className='site-header-wrapper'>
        <div className='site-header site-header--invert u-relative u-cf'>
          <div className='u-pull-start'>
            <Link to='home' id='track-nav-home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className='site-logo__image u-fill-invert' />
            </Link>
          </div>
          <div className='u-pull-end align-btn-small'>
            <nav className='nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
              <div className='nav__item u-relative'>
                <Popover className='popover--large' toggle={
                     (<a href='#' id='track-nav-products' className={linkClass}>
                        <div className='nav__item-link popover-link popover-link--invert'>
                          <IntlMessage message='header.our_products' />
                        </div>
                      </a>)
                   }>
                   {products}
                 </Popover>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='pricing'>
                  <Link to='pricing' id='track-nav-pricing' className={linkClass}>
                    <div className='nav__item-link'>
                      <IntlMessage message='pricing.nav_title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='about'>
                  <Link to='about' id='track-nav-pricing' className={linkClass}>
                    <div className='nav__item-link'>
                      <IntlMessage message='about.nav_title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='stories'>
                  <Link to='stories' id='track-nav-stories' className={linkClass}>
                    <div className='nav__item-link'>
                      <IntlMessage message='stories.nav_title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
            </nav>
            <ul className='u-cf u-pull-start'>
              <li className='u-pull-start'>
                <a href='/users/sign_in' id='track-nav-sign-in'
                className={classNames('nav-btn btn btn--small u-text-light u-text-xxs u-relative' +
                  'u-text-transform-none u-text-no-smoothing', {
                  'btn--invert-hollow': isInverted,
                  'btn--hollow': !isInverted,
                })}>
                  <IntlMessage message='header.login_btn' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
