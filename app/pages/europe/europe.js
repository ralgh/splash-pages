import React from 'react';
import Page from '../../components/page/page';
import Link from '../../components/link/link';

export default class Europe extends React.Component {
  displayName = 'Europe'

  render() {
    return (
      <Page>
        <div className='page-hero page-hero--europe page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>Accept Direct Debit across Europe</h1>
                <p className='u-text-heading-light u-size-4of5 u-center u-color-invert u-text-m u-margin-Txxs'>
                  GoCardless lets you take payments in the UK and across<br />the entire Eurozone via a single integration
                </p>
                <div className='u-text-center u-margin-Tl'>
                  <Link to='contact_sales' className='btn btn--invert btn--move'>
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-7of12 u-center'>
              <i className='europe-icon u-margin-Bs' />
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Get paid at home and abroad
              </h2>
              <div className='u-size-11of12 u-center'>
                <p className='u-text-s u-color-p u-margin-Ts'>
                  To help businesses like yours get the benefits of Direct Debit internationally,
                  the European Union has created the Single European Payments Area, known as SEPA.
                </p>
                <p className='u-text-s u-color-p u-margin-Tm'>
                  SEPA makes transferring money between Eurozone countries quick and easy,
                  and GoCardless is one of the first companies to offer access to the
                  system. <Link to='contact_sales' className='u-link-color-p u-text-underline'>
                  Contact sales</Link>, or learn more below.
                </p>
              </div>
            </div>
            <hr className='u-margin-Txxl u-size-2of3 u-center' />
            <div className='grid u-padding-Txl u-margin-Txm'>
              <h3 className='u-text-heading-light u-color-heading u-text-m u-text-center u-margin-Bm'>
                Here's some recommended reading, including our industry leading SEPA user guide:
              </h3>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <a href='https://gocardless.com/blog/sepa-direct-debit-explained'
                className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  An introduction to SEPA
                </a>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <a href='/guides/sepa'
                className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  A SEPA user guide
                </a>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <a href='https://gocardless.com/blog/sepa-direct-debit-details/'
                className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  Under the hood of SEPA
                </a>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
