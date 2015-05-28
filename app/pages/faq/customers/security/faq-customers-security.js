import React from 'react';
import FaqCustomersPage from '../faq-customers-page';
import Message from '../../../../components/message/message';
import Href from '../../../../components/href/href';

export default class FaqCustomersSecurity extends React.Component {
  displayName = 'FaqCustomersSecurity'

  render() {
    return (
      <FaqCustomersPage>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Security</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How does GoCardless keep my details safe?
        </h3>
        <p className='para'>
          GoCardless takes a number of steps to ensure our customers' data remains safe at all times:
        </p>
        <ul className='list'>
          <li>All financial details are RSA encrypted</li>
          <li>All sensitive communications use secure channels such as HTTP Secure</li>
          <li>All GoCardless databases are located in the United Kingdom</li>
        </ul>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What do I do if I believe a payment has been taken from my account in error or fraudulently?
        </h3>
        <p className='para'>
          Let us know immediately by emailing&nbsp;
          <Href to='email' className='u-link-color-p u-text-underline' itemProp='email' /> or
          calling <Message pointer='phone_local' />.
        </p>
        <p className='para'>
          We can investigate the matter further and arrange for a full refund under the&nbsp;
          <a href='/direct-debit/guarantee/' className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a>.
        </p>
      </FaqCustomersPage>
    );
  }
}
