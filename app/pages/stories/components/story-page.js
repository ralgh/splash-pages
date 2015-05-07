import React from 'react';
import Page from '../../../components/page/page';
import StartTakingPaymentsCTA from '../../../components/start-taking-payments/start-taking-payments';
import TickXsmall from '../../../icons/svg/tick-xsmall';

export default class StoryPage extends React.Component {
  displayName = 'StoryPage';

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    tagline: React.PropTypes.string.isRequired,
    bgimg: React.PropTypes.string,
    blurb: React.PropTypes.string,
    tips: React.PropTypes.array.isRequired,
    children: React.PropTypes.node.isRequired,
  };

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl'>
          <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light u-margin-Vxm'>
            {this.props.title}
          </h1>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light
            u-size-4of6 u-center u-text-center'>
              {this.props.tagline}
            </h2>
            <div className='grid u-margin-Txxl u-padding-Txm'>
              {this.props.tips.map(function(tip, indx) {
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
        {this.props.children}
        <StartTakingPaymentsCTA />
      </Page>
  );
  }
}
