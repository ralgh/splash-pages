import React from 'react';
import Page from '../../components/page/page';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import TickXsmall from '../../icons/svg/tick-xsmall';

import AllStories from './stories-data';


export default class Story extends React.Component {
  displayName = 'Story'

  static propTypes = {
    params: React.PropTypes.object,
  };

  render() {
    var storyId = this.props.params.storyId;
    var story = AllStories['en'][storyId];
    var tips = story.tips;
    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl'>
          <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light u-margin-Vxm'>
            {story.name}
          </h1>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light
            u-size-4of6 u-center u-text-center'>
              {story.tagline}
            </h2>
            <div className='grid u-margin-Txxl u-padding-Txm'>
              {tips.map(function(tip, indx) {
                return (
                  <div key={indx} className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon svg-icon--xsmall u-center'>
                      <TickXsmall className='svg-icon__image svg-icon__image--xsmall svg-icon__image--small-shadow u-fill-green' />
                      <TickXsmall className='svg-icon__image svg-icon__image--xsmall u-fill-dark-gray' />
                    </figure>
                    <p className='u-color-heading u-margin-Txs u-size-5of6 u-center'>
                      {tip}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        {story.quotes.map(function(quote) {
          return (
            <div>
              <div className='site-container u-padding-Vxxl'>
                <div className='grid u-padding-Vxl'>
                  <div className='grid__cell u-size-1of2'>
                    <h2 className='u-text-heading u-center u-color-heading u-text-l u-text-light u-size-3of4'>
                      {quote.tag}
                    </h2>
                  </div>
                  <div className='grid__cell u-size-1of2'>
                    {quote.quote.map(function(quotePara) {
                      return <p className='u-color-p u-margin-Bm'>{quotePara}</p>;
                    })}
                  </div>
                </div>
              </div>
              <hr className='u-margin-An' />
            </div>
          );
        })}
        <StartTakingPaymentsCTA />
      </Page>
    );
  }
}
