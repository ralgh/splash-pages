import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';
import Href from '../../../../components/href/href';

export default class FaqMerchantsPartnersEn extends React.Component {
  displayName = 'FaqMerchantsPartnersEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Partners</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What is a partner?
        </h3>
        <p className='para'>
          A partner is someone who uses the GoCardless API to create and manage multiple merchants. Partnering
          with GoCardless allows your customers to take payment from within your application.
        </p>
        <p className='para'>
          For further information check out our <a href='https://developer.gocardless.com/#partner-guide'
          className='u-link-color-p u-text-underline'>partner API guide</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Who are existing partners?
        </h3>
        <p className='para'>
          GoCardless is integrated into a variety of accounting packages and popular services. View a list of
          these <Link to='partners' className='u-link-color-p u-text-underline'>here</Link>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I take a revenue share?
        </h3>
        <p className='para'>
          Yes - we offer partners a revenue share of 10% of transaction fees.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How can I become a partner?
        </h3>
        <p className='para'>
          Just email us at <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' /> with a short description of your application, and we'll get
          right back to you.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How does it work for my users?
        </h3>
        <p className='para'>
          A Partner integration allows your customers to quickly and easily create a GoCardless account without
          copying and pasting API keys.
        </p>
        <p className='para'>
          This account will be linked to your Master Merchant account so that you can manage these accounts and
          process payment requests on their behalf.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I display payment information in my application?
        </h3>
        <p className='para'>
          Yes - GoCardless provides webhooks to notify Merchants of any changes in the status of its resources.
          One extremely useful example is determining when a bill has been paid.
        </p>
        <p className='para'>
          You can find out more about available webhooks and how to use them in our <a href='https://developer.gocardless.com/#webhooks'
          className='u-link-color-p u-text-underline'>webhook guide</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I host the payment pages on my site?
        </h3>
        <p className='para'>
          No - in order to comply with the Direct Debit scheme rules the payment pages are securely hosted on our site.
        </p>
        <p className='para'>
          You can redirect the customer to our payment page and we will redirect them back to your site. Alternatively you
          can allow them to access them via a pop-out from your site.
        </p>
        <p className='para'>
          To make this as easy as possible for your customers, you can pass information to us via the API to pre-populate
          the form.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Do you offer iFrames?
        </h3>
        <p className='para'>
          No - we do not offer iFraming of our payment pages as we are not sufficiently comfortable with the reliability and
          security of iFrames.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Do you work with crowd-funding sites?
        </h3>
        <p className='para'>
          Yes - we are pleased to work with some of the UK's leading crowd-funding sites, including <a href='http://www.crowdcube.com/'
          target='_blank' className='u-link-color-p u-text-underline'>Crowdcube</a> and <a href='http://www.peoplefund.it/'
          target='_blank' className='u-link-color-p u-text-underline'>Peoplefund.it</a>.
        </p>
        <p className='para'>
          Because of the risk profile of crowd-funding payments we charge a different fee: 0.5% of the transaction, with no cap.
        </p>
      </Translation>
    );
  }
}
