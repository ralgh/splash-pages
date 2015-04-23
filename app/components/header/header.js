import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {
  render() {
    const products = (
      <ul className="u-text-xxs u-padding-Vxs">
        <li>
          <a href="/features" id="track-nav-features" className="u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block">
            <span className="u-link-complex-target u-text-semi">GoCardless</span>
            <p className="u-color-p">Simple recurring payments</p>
          </a>
        </li>
        <hr className="u-margin-Vxs" />
        <li>
          <a href="/pro" id="track-nav-pro" className="u-link-complex u-link-clean u-padding-Vxs u-padding-Hm u-block">
            <span className="u-link-complex-target u-text-semi">GoCardless Pro</span>
            <p className="u-color-p">Total control over Direct Debit</p>
          </a>
        </li>
        <hr className="u-margin-Vs" />
        <li>
          <a href="/partners" id="track-nav-partners" className="u-link-complex u-padding-Vxs u-padding-Hm u-block">
            <span className="u-link-complex-target u-text-semi">Partner with us</span>
            <p className="u-color-p">Offer GoCardless to your users</p>
          </a>
        </li>
      </ul>
    );

    const isInverted = this.props.isInverted;

    return (
      <div className="site-header site-header--invert u-relative u-cf">
        <div className="u-pull-start">
          <a href="/" id="track-nav-home" className="header-logo u-relative u-block u-padding-Vl">
            <img ng-gc-svg-injector className="site-logo__image u-fill-primary" data-src="/images/logos/site-logo.svg" />
          </a>
        </div>
        <div className="u-pull-end align-btn-small">
          <nav className="nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing">
            <div className="nav__item u-relative">
              <popover-container>
                <a popover-toggle href id="track-nav-products" className="u-padding-Vl u-block u-link-clean">
                  <div className="nav__item-link popover-link">
                    Our products
                  </div>
                </a>
                <popover-content className="popover popover--large">
                  {products}
                </popover-content>
              </popover-container>
            </div>
            <div className="nav__item u-relative">
              <a id="track-nav-pricing" className="u-padding-Vl u-block u-link-clean u-link-primary" href="/pricing">
                <div className="nav__item-link">
                  Pricing
                </div>
              </a>
            </div>
            <div className="nav__item u-relative">
              <a id="track-nav-stories" className="u-padding-Vl u-block u-link-clean u-link-primary" href="/stories">
                <div className="nav__item-link">
                  Customer stories
                </div>
              </a>
            </div>
            <div className="nav__item u-relative">
              <popover-container>
                <a popover-toggle href id="track-nav-more" className="u-padding-Vl u-block u-link-clean">
                  <div className="nav__item-link popover-link">
                    More
                  </div>
                </a>
                <popover-content className="popover">
                  {products}
                </popover-content>
              </popover-container>
            </div>
          </nav>
          <ul className="u-cf u-pull-start">
            <li className="u-pull-start">
              <a href="/users/sign_in" id="track-nav-sign-in" className="nav-btn btn btn--small btn--hollow u-text-light u-text-xxs u-relative u-text-transform-none u-text-no-smoothing">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
