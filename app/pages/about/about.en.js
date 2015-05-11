import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutEn extends React.Component {
  displayName = 'AboutEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            About GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                GoCardless makes it easy to accept recurring payments online.
                We unify the world’s Direct Debit networks, simplify them, and open up access to everyone.
                By doing so, we are creating an entirely new type of payment network.
              </p>
              <p className='para'>
                Founded in 2011, we have quickly grown into one of Europe’s leading Direct Debit providers,
                processing over half a billion pounds a year for over ten thousand businesses.
              </p>
              <p className='para'>
                We work with a huge range of organisations: small gyms and scout groups use us to reduce admin, fast growing companies
                like Funding Circle use us to power their growth,
                and established institutions like the Financial Times use us to dramatically reduce failure rates.
              </p>
              <p className='para'>
                We are a small London based team, and we're backed by some of the world’s leading
                investors including Balderton Capital, Accel Partners, and Y&nbsp;Combinator.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
                  For any press enquiries, please contact <a href='mailto:press@gocardless.com'>the GoCardless PR team</a>,
                  or view our comprehensive <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>
                    press pack
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
