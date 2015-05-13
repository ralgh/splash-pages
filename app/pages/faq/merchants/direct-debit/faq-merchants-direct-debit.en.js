import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsDirectDebitEn extends React.Component {
  displayName = 'FaqMerchantsDirectDebitEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Direct Debit</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What is the Direct Debit Guarantee?
        </h3>
        <p className='para'>
          <a href='/direct-debit/guarantee/'
          className='u-link-color-p u-text-underline'>The Direct Debit Guarantee</a> offers protection to customers paying by
          Direct Debit in the rare event that there is an error in a payment.
        </p>
        <p className='para'>
          If a customer receives a refund they are not entitled to, they must pay it back at the organisation's
          request. Dispute resolution takes place outside of the Direct Debit scheme.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Do I need a Service User Number (SUN) or permission from my bank?
        </h3>
        <p className='para'>
          There is no need to talk to your bank either. We provide you with everything you need to sign up online and start taking payments.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What kind of payments is it good for?
        </h3>

        <p className='para'>
          They are particularly good for:
        </p>
        <ul className='list'>
          <li>Regular payments (e.g., subscriptions or regular donations)</li>
          <li>Customers with an ongoing relationship (e.g., account customers)</li>
          <li>Invoicing for services (e.g., accountancy, tax advice, etc.)</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What kind of payments isn't it good for?
        </h3>
        <ul className='list'>
          <li>Transactions which need an instant clearing (e.g., e-commerce)</li>
          <li>High-value, one-off payments for liquid goods (e.g., gold bullion)</li>
          <li>Transactions likely to experience chargebacks (e.g., gambling)</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What are the payment timings for Direct Debit?
        </h3>
        <p className='para'>
          Unlike card payments, Direct Debits don't clear instantly. Instead, it takes 3 days to set up
          each new payer, and to collect from payers who you currently have a Direct Debit relationship with.
        </p>
        <p className='para'>
          Once GoCardless has collected payment from your customer we hold the money for 3 working days
          before sending it directly to your bank account.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I collect one-off payments using Direct Debit?
        </h3>
        <p className='para'>
          Yes - although Direct Debit is most well-known for recurring payments, it can also be used to
          collect one-off payments.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I easily change Direct Debit provider?
        </h3>
        <p className='para'>
          Yes - the <a href='/direct-debit/transferring/'
          className='u-link-color-p u-text-underline'>Direct Debit bulk change</a> process allows you to
          move Direct Debits between providers easily.
        </p>
        <p className='para'>
          GoCardless has experience managing the entire transfer process for several large merchants,
          including Greater Anglia Railways. Your existing customers won't need to take any action
          whatsoever, and we offer this service free of charge.
        </p>
      </Translation>
    );
  }
}
