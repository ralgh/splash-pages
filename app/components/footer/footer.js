import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="page-footer u-color-invert u-padding-Tl">
        <div className="grid site-container u-padding-Vl u-text-center page-footer__start" id="track-footer-links">
          <div className="grid__cell u-size-1of2">
            <ul className="grid u-text-heading u-text-semi">
              <div className="grid__cell u-size-1of3 u-text-xxs">
                <li>
                  <a href="/features" id="track-footer-features" className="u-link-clean u-link-invert">GoCardless</a>
                </li>
                <li>
                  <a href="/pro" id="track-footer-pro" className="u-link-clean u-link-invert">GoCardless Pro</a>
                </li>
                <li>
                  <a href="/partners" id="track-footer-partners" className="u-link-clean u-link-invert">Partners</a>
                </li>
                <li>
                  <a href="/pricing" id="track-footer-pricing" className="u-link-clean u-link-invert">Pricing</a>
                </li>
                <li>
                  <a href="/guides" id="track-footer-guides" className="u-link-clean u-link-invert">Guides</a>
                </li>
              </div>
              <div className="grid__cell u-size-1of3 u-text-xxs">
                <li>
                  <a href="https://help.gocardless.com" id="track-footer-help" className="u-link-clean u-link-invert">Support</a>
                </li>
                <li>
                  <a href="/faq/merchants" id="track-footer-faq" className="u-link-clean u-link-invert">FAQ</a>
                </li>
                <li>
                  <a href="/features/api" id="track-footer-api" className="u-link-clean u-link-invert">API</a>
                </li>
                <li>
                  <a href="https://developer.gocardless.com/pro" id="track-footer-pro-api" className="u-link-clean u-link-invert">Pro API</a>
                </li>
                <li>
                  <a href="/security" id="track-footer-security" className="u-link-clean u-link-invert">Security</a>
                </li>
              </div>
              <div className="grid__cell u-size-1of3 u-text-xxs">
                <li>
                  <a href="/europe" id="track-footer-europe" className="u-link-clean u-link-invert">SEPA</a>
                </li>
                <li>
                  <a href="/legal" id="track-footer-legal" className="u-link-clean u-link-invert">Legal</a>
                </li>
                <li>
                  <a href="https://blog.gocardless.com" id="track-footer-blog" className="u-link-clean u-link-invert">Blog</a>
                </li>
                <li>
                  <a href="/about" id="track-footer-about" className="u-link-clean u-link-invert">About us</a>
                </li>
                <li>
                  <a href="/about#jobs" id="track-footer-jobs" className="u-link-clean u-link-invert">Jobs</a>
                </li>
              </div>
            </ul>
          </div>
          <div className="grid__cell u-size-1of2">
            <div className="u-size-2of3 u-pull-end">
              <p className="u-text-heading u-text-xxs u-color-invert u-margin-Bm" itemScope itemType="http://schema.org/Organization">
                <span itemProp="name">GoCardless Ltd.</span>
                <meta itemProp="url" content="" />
                <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <span itemProp="streetAddress"></span>,
                  <span itemProp="addressLocality"></span>,
                  <span itemProp="postalCode"></span>,
                  <span itemProp="addressCountry" content=""></span>
                </span>
                <span itemProp="telephone" content=""></span>,
                <a href="mailto:{{ GOCARDLESS.GB.SUPPORT.EMAIL }}" className="u-link-clean u-link-invert" itemProp="email"></a>
              </p>
              <p className="u-text-heading u-text-xxs u-color-invert">
                GoCardless is a Bacs approved bureau and is regulated by the Financial Conduct Authority as an Authorised Payment Institution.
              </p>
            </div>
          </div>
        </div>
        <div className="page-footer__end u-text-center u-text-heading u-text-xxs u-color-invert u-padding-Vl u-margin-Tl" id="track-footer-end-links">
          <div className="u-padding-Vl">
            <span className="u-text-light u-text-no-smoothing">Currently viewing</span>
            <img src="/images/icons/uk-flag-icon@2x.png" className="flag-icon u-margin-Hs" alt />
            <span className="u-relative">
              <popover-container>
                <a popover-toggle href className="u-text-semi u-link-invert">
                  <span className="popover-link popover-link--invert">
                    United Kingdom
                  </span>
                </a>
                <popover-content className="popover popover--above">
                  <ul className="u-text-xxs u-text-start u-padding-Vxs">
                    <li className="u-text-semi">
                      <span className="u-padding-Vxs u-padding-Hm u-block">
                        <img src="/images/icons/uk-flag-icon@2x.png" className="flag-icon--popover u-margin-Rs" alt />
                        <span className="u-color-p">United Kingdom</span>
                        <img ng-gc-svg-injector data-src="/images/icons/checkmark-icon.svg" className="u-fill-dark-green u-margin-Ls u-pull-end u-inline" alt="✓" />
                      </span>
                    </li>
                    <li className="u-text-semi">
                      <a href="{{other_languages.fr if other_languages.fr else '/fr/'}}" className="u-padding-Vxs u-padding-Hm u-block u-link-complex">
                        <img src="/images/icons/fr-flag-icon@2x.png" className="flag-icon--popover u-margin-Rs" alt />
                        <span className="u-link-complex-target">France</span>
                      </a>
                    </li>
                    <hr className="u-margin-Vs" />
                    <div className="u-padding-Vxs u-padding-Hm">
                      <p className="u-color-p">GoCardless is expanding,</p>
                      <p className="u-color-p"><a href="/europe">learn more</a> about upcoming countries</p>
                    </div>
                  </ul>
                </popover-content>
              </popover-container>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
