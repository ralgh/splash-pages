import React from 'react';
import Link from '../../components/link/link';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
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
                  <Message message='hero.header' />
                </h1>
                <div className={'u-text-heading u-text-center u-color-invert ' +
                                'u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'}>
                  <Message message='hero.desc' />
                </div>
                <div className='u-text-center u-margin-Tl'>
                  <Translation locales='en'>
                    <a href='#learn-more' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-2of12'>
                      <Message message='cta.more' />
                    </a>
                    <Translation locales='en-GB'>
                      <a href='/merchants/new'
                        className='btn btn--invert-hollow btn-move u-size-2of12 u-margin-Lm'
                        id='track-hero-merchants-new'>
                        <Message message='cta.pro_signup' />
                      </a>
                    </Translation>
                  </Translation>

                  <Translation locales='fr'>
                    <Link to='pro' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-3of12'>
                      <Message message='cta.more' />
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
