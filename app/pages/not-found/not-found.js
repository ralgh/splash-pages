import React from 'react';
import Message from '../../components/message/message';

export default class NotFound extends React.Component {
  displayName = 'NotFound'

  render() {
    return (
      <div className='not-found'>
        <div className='not-found__container'>
          <div className='not-found__container__center'>
            <div className='not-found__container__center__inner'>
              <div className='not-found__container__center__inner__container'>
                <h1 className='not-found-header'><Message message='not_found.header' /></h1>
                <p><Message message='not_found.explainer' /></p>
              </div>
            </div>
          </div>
        </div>
        <div className='not-found__footer'>
          <div className='not-found-footer'>
            <a href='https://gocardless.com' className='not-found-footer__link not-found-logo'>GoCardless</a>
            <a href='https://twitter.com/gocardless' className='not-found-footer__link'>@gocardless</a>
          </div>
        </div>
      </div>
    );
  }
}
