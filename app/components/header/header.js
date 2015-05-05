import React from 'react';
import Router from 'react-router';
var { Link } = Router;
import IntlMessage from '../intl-message/intl-message';
import LinkExists from '../link-exists/link-exists';
import Logo from '../../icons/icon/logo';
import classNames from 'classnames';
import Popover from '../popover/popover';

class Header extends React.Component {
  displayName = 'Header'

  static defaultProps = {
    isInverted: true,
  };

  static propTypes = {
    isInverted: React.PropTypes.bool,
  };

  render() {
    const products = (
      <ul className='u-text-xxs u-padding-Vxs'>
        <LinkExists to='features'>
          <li>
            <Link to='features' id='track-nav-features' className='u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block'>
              <span className='u-link-complex-target u-text-semi'><IntlMessage message='features.title' /></span>
              <p className='u-color-invert'><IntlMessage message='features.explainer' /></p>
            </Link>
          </li>
          <hr className='u-margin-Vxs' />
        </LinkExists>
        <LinkExists to='pro'>
          <li>
            <Link to='pro' id='track-nav-pro' className='u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block'>
              <span className='u-link-complex-target u-text-semi'><IntlMessage message='pro.title' /></span>
              <p className='u-color-invert'><IntlMessage message='pro.explainer' /></p>
            </Link>
          </li>
          <hr className='u-margin-Vxs' />
        </LinkExists>
        <LinkExists to='partners'>
          <li>
            <Link to='partners' id='track-nav-partners' className='u-link-complex uLinki-link-clean u-padding-Vxs u-padding-Hm u-block'>
              <span className='u-link-complex-target u-text-semi'><IntlMessage message='Partner.title' /></span>
              <p className='u-color-invert'><IntlMessage message='Partner.explainer' /></p>
            </Link>
          </li>
        </LinkExists>
      </ul>
    );

    const isInverted = this.props.isInverted;
    const linkClasses = classNames('u-padding-Vl', 'u-block', 'u-link-clean', isInverted ? 'u-link-invert' : 'u-link-default');

    return (
      <div className={classNames({'site-header-wrapper': isInverted})}>
        <div className='site-header site-header--invert u-relative u-cf'>
          <div className='u-pull-start'>
            <Link to='home' id='track-nav-home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className={classNames('site-logo__image', isInverted ? 'u-fill-invert' : 'u-fill-primary')} />
            </Link>
          </div>
          <div className='u-pull-end align-btn-small'>
            <nav className='nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
              <div className='nav__item u-relative'>
                <Popover className='popover--large' toggle={
                     (<a href='#' id='track-nav-products' className={`u-padding-Vl u-block u-link-clean ${linkClass}`}>
                        <div className='nav__item-link popover-link popover-link--invert'>
                          <IntlMessage message='header.our_products' />
                        </div>
                      </a>)
                   }>
                   {products}
                 </Popover>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='about'>
                  <Link to='about' id='track-nav-pricing' className={linkClasses}>
                    <div className='nav__item-link'>
                      <IntlMessage message='about.title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
              <div className='nav__item u-relative'>
                <LinkExists to='stories'>
                  <Link to='stories' id='track-nav-stories' className={linkClasses}>
                    <div className='nav__item-link'>
                      <IntlMessage message='stories.title' />
                    </div>
                  </Link>
                </LinkExists>
              </div>
            </nav>
            <ul className='u-cf u-pull-start'>
              <li className='u-pull-start'>
                <a href='/users/sign_in' id='track-nav-sign-in' className={`nav-btn btn btn--small ${isInverted ? 'btn--invert-hollow' : 'btn--hollow'} u-text-light u-text-xxs u-relative u-text-transform-none u-text-no-smoothing`}>
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
