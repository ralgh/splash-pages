import React from 'react';
import Page from '../../components/page/page';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';

import AllStories from './stories-data';

var EnStories = AllStories['en'];
var SmallBlurbStories = Object.keys(EnStories).filter(function(key) {
  return EnStories[key].blurb;
});

export default class Stories extends React.Component {
  displayName = 'Stories'

  render() {
    return (
      <Page isInverted={true}>
        <div className='page-hero page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner stories-hero-heading'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  Thousands of happy customers
                </h1>
                <div className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                  From individuals to multi-national corporations, GoCardless<br />helps thousands of businesses with their payments everyday
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl u-margin-Bxxl'>
          <div className='u-padding-Vxxl u-relative u-margin-Bxxl'>
            <div className='u-padding-Bl'>
              <div className='stories-spotlight grid u-margin-Hn u-size-full'>
                <a href='/stories/has-bean-coffee' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
                  <div className='stories-spotlight__item stories-spotlight__item--has-bean-coffee
                  u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “GoCardless gives us control over when<br />we get paid and takes away<br />the uncomfortable conversations<br />about money.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Steve Leighton, Has Bean Coffee
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Read the case study</div>
                </a>
                <a href='/stories/momentum' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Lxs u-padding-Rn'>
                  <div className='stories-spotlight__item stories-spotlight__item--crossfit-hackney u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “Taking payments with GoCardless costs us less than half the price of using PayPal and the integration with TeamUp has definitely reduced our admin.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Geoff Stewart, Momentum Training
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Read the case study</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            {SmallBlurbStories.map(function(storyKey) {
              return (
                <a key={storyKey} href={'/stories/' + storyKey} className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
                  <div className='product-grid__container u-text-center u-padding-Vl'>
                    <i role='img' aria-label={storyKey} className={EnStories[storyKey].blurb.img}></i>
                    <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                       {EnStories[storyKey].blurb.text}
                    </p>
                  </div>
                  <div className='stories-item__btn btn u-size-full'>Read the case study</div>
                </a>
              );
            })}
          </div>
        </div>
        <hr className='u-margin-An' />
        <StartTakingPaymentsCTA />
      </Page>
    );
  }
}
