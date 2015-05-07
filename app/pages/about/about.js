import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import AboutEn from './about.en';
import AboutFr from './about.fr';

export default class About extends React.Component {
  displayName = 'About'

  render() {
    return (
      <Page>
        <div className='page-hero page-hero--about page-hero--medium u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  <Message message='about.header1' />
                  <br />
                  <Message message='about.header2' />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AboutFr />
        <AboutEn />
      </Page>
    );
  }
}
