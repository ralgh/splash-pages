import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/page/page';
import IntlMessage from '../../components/intl-message/intl-message';
import HomeEn from './home.en';
import HomeFr from './home.fr';
import Translation from '../../components/translation/translation';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      <Page>
        <div className='page-hero page-hero--home page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  <IntlMessage message='hero.header' />
                </h1>
                <div className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'>
                  <IntlMessage message='hero.desc' />
                </div>
                <div className='u-text-center u-margin-Tl'>
                  <Translation locales='en-GB'>
                    <a href='#learn-more' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-2of12'>
                      <IntlMessage message='cta.more' />
                    </a>
                    <a href='/merchants/new' className='btn btn--invert-hollow btn-move u-size-2of12 u-margin-Lm' id='track-hero-merchants-new'>
                      <IntlMessage message='cta.pro_signup' />
                    </a>
                  </Translation>

                  <Translation locales='fr-FR'>
                    <Link to='home' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-3of12'>
                      <IntlMessage message='cta.more' />
                    </Link>
                  </Translation>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeFr />
        <HomeEn />
      </Page>
    );
  }
}
