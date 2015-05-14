import React from 'react';
import FaqCustomersPage from '../faq-customers-page';
import Message from '../../../../components/message/message';
import Href from '../../../../components/href/href';

export default class FaqCustomers extends React.Component {
  displayName = 'FaqCustomers'

  render() {
    return (
      <FaqCustomersPage>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Overview</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Why is GoCardless on my bank statement?
        </h3>
        <p className='para'>
          GoCardless is an online payments company - we provide online payment services to thousands of Merchants.
          Our name appears on the bank statements of anyone who pays a Merchant using our service.
        </p>
        <p className='para'>
          If you do not recognise the transaction there is normally a reference including the name of
          the Merchant on your bank statement or in the Direct Debit record.
        </p>
        <p className='para'>
          If you cannot find this or do not recognise the name email us at&nbsp;
          <Href to='email' className='u-link-color-p u-text-underline' itemProp='email' />
          &nbsp;or call us on <Message message='phone_local' /> and we will help you identify the transaction.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How do payments through GoCardless work?
        </h3>
        <p className='para'>
          GoCardless acts as a 'master merchant', processing payments on behalf of many companies.
        </p>
        <p className='para'>
          When you pay by GoCardless we collect payment from your account into
          our own. These funds are then remitted on to the merchant you are paying.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Why do I have a Direct Debit with you when this was a one-off payment?
        </h3>
        <p className='para'>
          We collect all payments, whether one-off or recurring, via the Direct Debit network.
          In order to do this a Direct Debit must be put in place on the account.
        </p>
        <p className='para'>
          Don't worry - if you have set-up a one-off payment, we will only take the funds once.
          You can check payments made with GoCardless anytime by&nbsp;
          <a href='/users/sign_in' className='u-link-color-p u-text-underline'>
            logging in
          </a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How do I check transactions made with GoCardless?
        </h3>
        <p className='para'>
          You can check your GoCardless payments anytime by&nbsp;
          <a href='/users/sign_in' className='u-link-color-p u-text-underline'>logging in</a>.
        </p>
        <p className='para'>
          For further assistance you can also email us at&nbsp;
          <Href to='email' className='u-link-color-p u-text-underline' itemProp='email' />
          &nbsp;or call on <Message message='phone_local' />.
        </p>
      </FaqCustomersPage>
    );
  }
}
