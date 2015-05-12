import React from 'react';
import Page from '../../../components/page/page';
import CalendarIcon from '../../../icons/svg/checklist';
import TickSquareIcon from '../../../icons/svg/tick-square';
import RealtimeIcon from '../../../icons/svg/realtime';
import CustomerSetupIcon from '../../../icons/svg/customer-setup';
import MoneyFlowerIcon from '../../../icons/svg/money-flower';
import ClockIcon from '../../../icons/svg/clock';
import Link from '../../../components/link/link';

export default class PartnersSage extends React.Component {
  displayName = 'PartnersSage'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl u-text-center'>
          <h1 className='sage-header-logo u-margin-Tl u-margin-Bm'>
            <span className='u-is-hidden-visually'>Sage</span>
          </h1>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center'>
            <h2 className='u-text-heading u-color-heading u-text-light'>
              Improve cash flow with GoCardless for Sage
            </h2>
            <p className='u-color-heading u-margin-Txxs u-padding-Bxxl'>
              Collect one-off or recurring invoices via Direct Debit from directly within Sage 50 using our GoCardless for Sage add-on.
            </p>
            <iframe
            src='https://player.vimeo.com/video/72433004'
            className='videos-container__iframe u-margin-Tl'>
            </iframe>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-text-center u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-xl u-text-light'>
              Free, for a limited time only
            </h2>
            <p className='u-color-p u-margin-Txxs u-size-1of2 u-center'>
              For a limited time only, the GoCardless Sage 50 add-on is completely
              free. Get in touch now to be sure not to miss out.
            </p>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'>Contact us</Link>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <CalendarIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                  <CalendarIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Always get paid on time
                </h2>
                <p className='u-color-p u-margin-Txs'>
                  Direct Debit lets you take control of when you’re paid – improving your cash-flow, and reducing bad debt.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <TickSquareIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Collect with two clicks
                </h2>
                <p className='u-color-p u-margin-Txs'>
                  It's unbelievably simple: just select the invoices you want to collect, and click a button to collect. Done.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <RealtimeIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                  <RealtimeIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Automatic reconciliation
                </h2>
                <p className='u-color-p u-margin-Txs'>
                  See the status of your payments within Sage. Best of all, reconcile your payments with a single click.
                </p>
              </div>
            </div>
            <div className='grid u-margin-Txxl u-padding-Tl'>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <CustomerSetupIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                  <CustomerSetupIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Simple customer setup
                </h2>
                <p className='u-color-p u-margin-Txs'>
                  Ask your customers for a Direct Debit in two clicks, or integrate with your website.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Unbelievably low pricing
                </h2>
                <p className='u-color-p u-margin-Txs'>
                  No signup fee, no monthly fees, no hidden extras. Just 1%, capped at £2.&nbsp;
                  <Link to='pricing' className='u-text-underline u-link-color-p'>Find out more</Link>
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <ClockIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                  <ClockIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Get started immediately
                </h2>
                <p className='u-color-p u-margin-Txs'>
                  Signup and start collecting payment in 60 seconds. No SUN required.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                  Request Direct Debits from your customers via email
                </h2>
                <p className='u-color-p u-margin-Bm'>
                  Use the add-on to send your customers email requests to set up a Direct Debit with you.
                </p>
                <p className='u-color-p'>
                  Choose whether to send branded email requests from our servers or customised requests from your own email address.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-end'>
                <img alt='Sage setup' className='sage-screenshot u-size-5of6' src='/images/products/sage-setup.png' />
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <img alt='Sage payment page example' className='sage-screenshot u-size-5of6'
                src='/images/products/sage-payment-page-example.png' />
              </div>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                  Your customers authorise Direct Debits on our secure online form
                </h2>
                <p className='u-color-p u-margin-Bm'>
                  Your customers follow a link in your email request to authorise a Direct Debit on our brandable online payment pages.
                </p>
                <p className='u-color-p'>
                  We use military grade encryption to keep all our communications secure, so your customers can pay with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                  Collect invoice payments in just a couple of clicks
                </h2>
                <p className='u-color-p u-margin-Bm'>
                  It's unbelievably simple: just select the invoices you want to collect, and click a button to collect. Done.
                </p>
                <p className='u-color-p'>
                  Choose to collect the entire amount of an invoice, or schedule payments to collect an invoice in installments.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-end'>
                <img alt='Sage installments' className='sage-screenshot u-size-5of6' src='/images/products/sage-installments.png' />
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <img alt='Sage reconcile' className='sage-screenshot u-size-5of6' src='/images/products/sage-reconcile.png' />
              </div>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                  Automatically reconcile payments with your accounts
                </h2>
                <p className='u-color-p u-margin-Bm'>
                  The add-on automatically creates sales receipts for each payment and allocates it to the right invoice in Sage.
                </p>
                <p className='u-color-p'>
                  The add-on also handles reconciliation against your bank statements. It even accounts for our fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-8of12 u-center u-text-center u-margin-Tl u-margin-Bl'>
              <img alt='Sage and Windows logos' className='u-size-5of12 u-margin-Bm' src='/images/products/sage-logos@2x.png' />
              <p className='u-color-p'>
                Compatible with:<br/> Windows XP, Windows Vista, Windows 7, Windows 8.<br/>
                Sage 50 Accounts 2010 onwards. Multi-user licence required.
                <a href='https://s3.amazonaws.com/gc-misc/sage/GoCardless_Sage_User_Guide.pdf'
                className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Tm'>
                  Download user guide
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light'>Want to learn more? Get started now</h2>
            <Link to='contact_sales' className='btn u-margin-Tm'>Contact sales</Link>
          </div>
        </div>
      </Page>
    );
  }
}
