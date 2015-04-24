import React from 'react';

import Router from 'react-router';
var { Link } = Router;
import IntlLink from '../intl-link/intl-link';
import IntlMessage from '../intl-message/intl-message';
import LinkExists from '../link-exists/link-exists';
import CheckmarkIcon from '../../icons/icon/checkmark';

class Footer extends React.Component {
  displayName = 'Footer'

  render() {
    return (
      <div className='page-footer u-color-invert u-padding-Tl'>
        <div className='grid site-container u-padding-Vl u-text-center page-footer__start' id='track-footer-links'>
          <div className='grid__cell u-size-1of2'>
            <ul className='grid u-text-heading u-text-semi'>
              <div className='grid__cell u-size-1of3 u-text-xxs'>
                <LinkExists to='Features'>
                  <li>
                    <IntlLink to='Features' message='Features.title'
                      id='track-footer-features' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='Pro'>
                  <li>
                    <IntlLink to='Pro' message='Pro.title'
                      id='track-footer-pro' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='Partners'>
                  <li>
                    <IntlLink to='Partners' message='Partners.title'
                      id='track-footer-partners' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='Pricing'>
                  <li>
                    <IntlLink to='Pricing' message='Pricing.title'
                      id='track-footer-pricing' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <li>
                  <a href='/guides' id='track-footer-guides' className='u-link-clean u-link-invert'>
                    <IntlMessage message='Guides.title' />
                  </a>
                </li>
              </div>
              <div className='grid__cell u-size-1of3 u-text-xxs'>
                <li>
                  <a href='https://help.gocardless.com' id='track-footer-help' className='u-link-clean u-link-invert'>
                    <IntlMessage message='Help.title' />
                  </a>
                </li>
                <LinkExists to='FaqMerchants'>
                  <li>
                    <IntlLink to='FaqMerchants' message='FaqMerchants.title'
                      id='track-footer-faq' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='FeaturesApi'>
                  <li>
                    <IntlLink to='FeaturesApi' message='FeaturesApi.title'
                      id='track-footer-api' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <li>
                  <a href='https://developer.gocardless.com/pro' id='track-footer-pro-api' className='u-link-clean u-link-invert'>
                    <IntlMessage message='ProDocs.title' />
                  </a>
                </li>
                <LinkExists to='Security'>
                  <li>
                    <IntlLink to='Security' message='Security.title'
                      id='track-footer-security' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
              </div>
              <div className='grid__cell u-size-1of3 u-text-xxs'>
                <LinkExists to='Europe'>
                  <li>
                    <IntlLink to='Europe' message='Europe.title'
                      id='track-footer-europe' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='Legal'>
                  <li>
                    <IntlLink to='Legal' message='Legal.title'
                      id='track-footer-legal' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <li>
                  <a href='https://blog.gocardless.com' id='track-footer-blog' className='u-link-clean u-link-invert'>
                    <IntlMessage message='Blog.title' />
                  </a>
                </li>
                <LinkExists to='About'>
                  <li>
                    <IntlLink to='About' message='About.title'
                      id='track-footer-about' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='About'>
                  <li>
                    <IntlLink to='About' message='Jobs.title'
                      id='track-footer-jobs' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
              </div>
            </ul>
          </div>
          <div className='grid__cell u-size-1of2'>
            <div className='u-size-2of3 u-pull-end'>
              <p className='u-text-heading u-text-xxs u-color-invert u-margin-Bm' itemScope itemType='http://schema.org/Organization'>
                <span itemProp='name'>GoCardless Ltd.</span>
                <meta itemProp='url' content='' />
                <span itemProp='address' itemScope itemType='http://schema.org/PostalAddress'>
                  <span itemProp='streetAddress'><IntlMessage message='postal_address.street_address' /></span><span>{','} </span>
                  <span itemProp='addressLocality'><IntlMessage message='postal_address.address_locality' /></span><span>{','} </span>
                  <span itemProp='postalCode'><IntlMessage message='postal_address.postal_code' /></span><span>{','} </span>
                  <span itemProp='addressCountry' content=''><IntlMessage message='postal_address.address_country_iso' /></span>
                </span>
                <span itemProp='telephone' content=''><IntlMessage message='phone_full' /></span><span>{','} </span>
                <a href='mailto:' className='u-link-clean u-link-invert' itemProp='email'><IntlMessage message='email' /></a>
              </p>
              <p className='u-text-heading u-text-xxs u-color-invert'>
                <IntlMessage message='footer.description' />
              </p>
            </div>
          </div>
        </div>
        <div className='page-footer__end u-text-center u-text-heading u-text-xxs u-color-invert u-padding-Vl u-margin-Tl' id='track-footer-end-links'>
          <div className='u-padding-Vl'>
            <span className='u-text-light u-text-no-smoothing'><IntlMessage message='footer.currently_viewing' /></span>
            <img src='/images/icons/uk-flag-icon@2x.png' className='flag-icon u-margin-Hs' alt />
            <span className='u-relative'>
              <popover-container>
                <a popover-toggle href className='u-text-semi u-link-invert'>
                  <span className='popover-link popover-link--invert'>
                    United Kingdom
                  </span>
                </a>
                <popover-content className='popover popover--above'>
                  <ul className='u-text-xxs u-text-start u-padding-Vxs'>
                    <li className='u-text-semi'>
                      <span className='u-padding-Vxs u-padding-Hm u-block'>
                        <img src='/images/icons/uk-flag-icon@2x.png' className='flag-icon--popover u-margin-Rs' alt='United Kingdom Flag' />
                        <span className='u-color-p'>United Kingdom</span>
                        <CheckmarkIcon className='u-fill-dark-green u-margin-Ls u-pull-end u-inline' />
                      </span>
                    </li>
                    <li className='u-text-semi'>
                      <a className='u-padding-Vxs u-padding-Hm u-block u-link-complex'>
                        <img src='/images/icons/fr-flag-icon@2x.png' className='flag-icon--popover u-margin-Rs' alt='France Flag' />
                        <span className='u-link-complex-target'>France</span>
                      </a>
                    </li>
                    <LinkExists to='Europe'>
                      <hr className='u-margin-Vs' />
                      <div className='u-padding-Vxs u-padding-Hm'>
                        <p className='u-color-p'><IntlMessage message='footer.eruope_cta' />{','}</p>
                        <p className='u-color-p'><Link to='Europe'><IntlMessage message='footer.europe_link' /></Link>
                          <IntlMessage message='footer.europe_description' /></p>
                      </div>
                    </LinkExists>
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
