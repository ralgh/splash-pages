import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import InlineMessage from '../../components/inline-message/inline-message';
import HomeEn from './home.en';
import HomeFr from './home.fr';
import HomeDe from './home.de';
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
                  <InlineMessage pointer='hero.header' locale="en">Recurring payments made simple</InlineMessage>
                </h1>
                <div className={'u-text-heading u-text-center u-color-invert ' +
                                'u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'}>
                  <Message pointer='hero.desc' />
                </div>
                <div className='u-text-center u-margin-Tl'>
                  <Translation locales={['en','fr','de']} exclude={['en-GB']}>
                    <a href='#learn-more' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-3of12'>
                      <Message pointer='cta.more' />
                    </a>
                  </Translation>
                  <Translation locales='en-GB'>
                    <a href='#learn-more' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-2of12'>
                      <Message message='cta.more' />
                    </a>
                    <a href='/merchants/new'
                      className='btn btn--invert-hollow btn-move u-size-2of12 u-margin-Lm'
                      id='track-hero-merchants-new'>
                      <Message pointer='cta.pro_signup' />
                    </a>
                  </Translation>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeFr />
        <HomeEn />
        <HomeDe />
      </Page>
    );
  }
}
