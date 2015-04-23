import React from 'react';
import Router from 'react-router';
var { Link } = Router;
import IntlMessage from '../intl-message/intl-message';
import LinkExists from '../link-exists/link-exists';

class Header extends React.Component {
  render() {
    const products = (
      <ul className="u-text-xxs u-padding-Vxs">
        <LinkExists to="Features">
          <li>
            <Link to="Features" id="track-nav-features" className="u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block">
              <span className="u-link-complex-target u-text-semi"><IntlMessage message="Features.title" /></span>
              <p className="u-color-p"><IntlMessage message="Features.explainer" /></p>
            </Link>
          </li>
          <hr className="u-margin-Vxs" />
        </LinkExists>
        <LinkExists to="Pro">
          <li>
            <Link to="Pro" id="track-nav-pro" className="u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block">
              <span className="u-link-complex-target u-text-semi"><IntlMessage message="Pro.title" /></span>
              <p className="u-color-p"><IntlMessage message="Pro.explainer" /></p>
            </Link>
          </li>
          <hr className="u-margin-Vxs" />
        </LinkExists>
        <LinkExists to="Partners">
          <li>
            <Link to="Partners" id="track-nav-partners" className="u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block">
              <span className="u-link-complex-target u-text-semi"><IntlMessage message="Partner.title" /></span>
              <p className="u-color-p"><IntlMessage message="Partner.explainer" /></p>
            </Link>
          </li>
        </LinkExists>
      </ul>
    );

    const isInverted = this.props.isInverted;

    return (
      <div className="site-header site-header--invert u-relative u-cf">
        <div className="u-pull-start">
          <Link to="Home" id="track-nav-home" className="header-logo u-relative u-block u-padding-Vl">
            <img className="site-logo__image u-fill-primary" src="/images/logos/site-logo.svg" />
          </Link>
        </div>
        <div className="u-pull-end align-btn-small">
          <nav className="nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing">
            <div className="nav__item u-relative">
              <popover-container>
                <span popover-toggle id="track-nav-products" className="u-padding-Vl u-block u-link-clean">
                  <div className="nav__item-link popover-link">
                    <IntlMessage message="header.our_products" />
                  </div>
                </span>
                <popover-content className="popover popover--large">
                  {products}
                </popover-content>
              </popover-container>
            </div>
            <div className="nav__item u-relative">
              <LinkExists to="About">
                <Link to="About" id="track-nav-pricing" className="u-padding-Vl u-block u-link-clean u-link-primary">
                  <div className="nav__item-link">
                    <IntlMessage message="About.title" />
                  </div>
                </Link>
              </LinkExists>
            </div>
            <div className="nav__item u-relative">
              <LinkExists to="Stories">
                <Link to="Stories" id="track-nav-stories" className="u-padding-Vl u-block u-link-clean u-link-primary">
                  <div className="nav__item-link">
                    <IntlMessage message="Stories.title" />
                  </div>
                </Link>
              </LinkExists>
            </div>
          </nav>
          <ul className="u-cf u-pull-start">
            <li className="u-pull-start">
              <a href="/users/sign_in" id="track-nav-sign-in" className="nav-btn btn btn--small btn--hollow u-text-light u-text-xxs u-relative u-text-transform-none u-text-no-smoothing">
                <IntlMessage message="header.login_btn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
