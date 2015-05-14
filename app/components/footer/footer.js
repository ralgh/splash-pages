import React from 'react';
import sortBy from 'lodash/collection/sortBy';
import merge from 'lodash/object/merge';
import Link from '../link/link';
import Href from '../href/href';
import Message from '../message/message';
import LinkExists from '../link-exists/link-exists';
import SchemaItemProp from '../schema-item-prop/schema-item-prop';
import { homeRoute } from '../../router/routes';
import { getLocalesForRouteName } from '../../router/route-helpers';
import { getMessage } from '../intl/intl';
import Popover from '../popover/popover';
import Flag from '../flag/flag';
import { localeToRegion } from '../../helpers/locale-helper/locale-helper';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import CheckmarkIcon from '../../icons/svg/checkmark';

function buildAvailableLocales(currentLocale, siteLocales, messages) {
  const availableLocales = Object.keys(siteLocales).map(function(locale) {
    const isActive = currentLocale === locale;
    const path = siteLocales[locale].path;
    const name = getMessage(messages, `country_names.${locale}`);
    return {locale, isActive, path, name};
  });

  return sortBy(availableLocales, 'name');
}

class Footer extends React.Component {
  displayName = 'Footer'

  static contextTypes = {
    routeName: React.PropTypes.string.isRequired,
    locales: PropTypes.locale,
    messages: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  render() {
    const { routeName, locales, messages, config } = this.context;

    const siteLocales = merge({}, getLocalesForRouteName(homeRoute), getLocalesForRouteName(routeName));
    const availableLocales = buildAvailableLocales(locales, siteLocales, messages);
    const region = localeToRegion(locales);

    return (
      <div className='page-footer u-color-invert u-padding-Tl'>
        <div className='grid site-container u-padding-Vl u-text-center page-footer__start' id='track-footer-links'>
          <div className='grid__cell u-size-1of2'>
            <ul className='grid u-text-heading u-text-semi'>
              <div className='grid__cell u-size-1of3 u-text-xxs'>
                <LinkExists to='features'>
                  <li>
                    <Link to='features' message='features.nav_title'
                      id='track-footer-features' className='u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='pro'>
                  <li>
                    <Link to='pro' message='pro.nav_title'
                      id='track-footer-pro' className='u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='partners'>
                  <li>
                    <Link to='partners' message='partners.link_title'
                      id='track-footer-partners' className='u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='pricing'>
                  <li>
                    <Link to='pricing' message='pricing.nav_title'
                      id='track-footer-pricing' className='u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='stories'>
                  <li>
                    <Link to='stories' message='stories.title'
                      id='track-footer-stories' className='u-link-invert' />
                  </li>
                </LinkExists>
                <li>
                  <Href to='guides.path' id='track-footer-guides' className='u-link-invert' message='guides.nav_title' />
                </li>
              </div>
              <div className='grid__cell u-size-1of3 u-text-xxs'>
                <li>
                  <a href='https://help.gocardless.com' id='track-footer-help' className='u-link-invert'>
                    <Message message='help.nav_title' />
                  </a>
                </li>
                <LinkExists to='faq_merchants'>
                  <li>
                    <Link to='faq_merchants' message='faq_merchants.link_title'
                      id='track-footer-faq' className='u-link-clean u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='features_api'>
                  <li>
                    <Link to='features_api' message='features_api.nav_title'
                      id='track-footer-api' className='u-link-invert' />
                  </li>
                </LinkExists>
                <li>
                  <a href='https://developer.gocardless.com/pro' id='track-footer-pro-api' className='u-link-invert'>
                    <Message message='pro_docs.nav_title' />
                  </a>
                </li>
                <LinkExists to='security'>
                  <li>
                    <Link to='security' message='security.nav_title'
                      id='track-footer-security' className='u-link-invert' />
                  </li>
                </LinkExists>
              </div>
              <div className='grid__cell u-size-1of3 u-text-xxs'>
                <LinkExists to='europe'>
                  <li>
                    <Link to='europe' message='europe.nav_title'
                      id='track-footer-europe' className='u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='legal'>
                  <li>
                    <Link to='legal' message='legal.nav_title'
                      id='track-footer-legal' className='u-link-invert' />
                  </li>
                </LinkExists>
                <li>
                  <a href='https://blog.gocardless.com' id='track-footer-blog' className='u-link-invert'>
                    <Message message='blog.nav_title' />
                  </a>
                </li>
                <LinkExists to='about'>
                  <li>
                    <Link to='about' message='about.nav_title'
                      id='track-footer-about' className='u-link-invert' />
                  </li>
                </LinkExists>
                <LinkExists to='jobs'>
                  <li>
                    <Link to='jobs' message='jobs.nav_title'
                      id='track-footer-jobs' className='u-link-invert' />
                  </li>
                </LinkExists>
              </div>
            </ul>
          </div>
          <div className='grid__cell u-size-1of2'>
            <div className='u-size-2of3 u-pull-end'>
              <p className='u-text-heading u-text-xxs u-color-invert u-margin-Bm' itemScope itemType='http://schema.org/Organization'>
                <SchemaItemProp itemProp='name' content='GoCardless Ltd.' />&nbsp;
                <SchemaItemProp itemProp='url' tagName='meta' content={config.siteRoot} />
                <SchemaItemProp itemProp='address' itemScope='itemScope' itemType='http://schema.org/PostalAddress'>
                  <SchemaItemProp itemProp='streetAddress' message='postal_address.street_address' />,&nbsp;
                  <SchemaItemProp itemProp='addressLocality' message='postal_address.address_locality' />,&nbsp;
                  <SchemaItemProp itemProp='postalCode' message='postal_address.postal_code' />,&nbsp;
                  <SchemaItemProp itemProp='addressCountry' content={getMessage(messages, 'postal_address.address_country_iso')}>
                    <Message message='postal_address.address_country' />
                  </SchemaItemProp>.
                </SchemaItemProp><br />
                <SchemaItemProp itemProp='telephone' message='phone_full' />,&nbsp;
                <Href to='email' className='u-link-invert' itemProp='email' />
              </p>
              <p className='u-text-heading u-text-xxs u-color-invert u-margin-Bm'>
                <Message message='footer.description' />
              </p>
              <LinkExists to='legal_privacy'>
                <p className='u-text-heading u-text-xxs u-color-invert'>
                  <Message message='footer.cookies_message' />&nbsp;
                  <Link to='legal_privacy' className='u-link-clean u-link-invert u-text-heavy' message='footer.cookies_link_text' />.
                </p>
              </LinkExists>
            </div>
          </div>
        </div>
        <div
          className='page-footer__end u-text-center u-text-heading u-text-xxs u-color-invert u-padding-Vl u-margin-Tl'
          id='track-footer-end-links'>
          <div className='u-padding-Vl'>
            <span className='u-relative'>
              <Message message='footer.currently_viewing'
              className='u-text-light u-text-no-smoothing u-inline-block' />
              <Popover className='popover--country-select' toggle={
                  (<a href='#' className='u-text-semi u-link-invert'>
                    <Flag viewBox="0 0 640 480" width="64" height="48" country={region} className='flag-icon u-margin-Hs' alt={ region } />
                    <span className='popover-link popover-link--invert'>
                      <Message message='country' />
                    </span>
                  </a>)
                }>
                <ul className='u-text-xxs u-text-start u-padding-Vxs'>
                  {
                    availableLocales.map(function(locale) {
                      return (
                        <li className='u-text-semi' key={locale.name}>
                          {
                            locale.isActive && (
                              <span className='u-padding-Vxs u-padding-Hm u-block'>
                                <Flag viewBox="0 0 640 480" country={localeToRegion(locale.locale)}
                                className='flag-icon--popover u-margin-Rs' alt={ locale.name } />
                                <span className='country-select-label u-color-p'>{ locale.name }</span>
                                <CheckmarkIcon className='u-fill-dark-green u-margin-Ls u-pull-end u-inline checkmark-icon' alt='✓' />
                              </span>
                            ) || (
                              <a className='u-padding-Vxs u-padding-Hm u-block' href={ locale.path }>
                                <Flag viewBox="0 0 640 480" country={localeToRegion(locale.locale)}
                                className='flag-icon--popover u-margin-Rs' alt={ locale.name } />
                                <span className='country-select-label'>{ locale.name }</span>
                              </a>
                            )
                          }
                        </li>
                      );
                    })
                  }

                  <LinkExists to='europe'>
                    <hr className='u-margin-Vs' />
                    <div className='u-padding-Vxs u-padding-Hm'>
                      <p className='u-color-p'><Message message='footer.europe_cta' />,&nbsp;</p>
                      <p className='u-color-p'><Link to='europe'><Message message='footer.europe_link' /></Link>&nbsp;
                        <Message message='footer.europe_description' /></p>
                    </div>
                  </LinkExists>
                </ul>
              </Popover>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
