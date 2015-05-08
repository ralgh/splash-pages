import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsHowItWorksEn extends React.Component {
  displayName = 'FaqMerchantsHowItWorksEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>How it works</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          When do I receive my payment?
        </h3>
        <p className='para'>
          We automatically pay out funds to your specified bank account <strong>3 working days</strong> after they're
          collected from your customer. You can see more details <a href='https://help.gocardless.com/customer/portal/articles/1563666'
          className='u-link-color-p u-text-underline'>here</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What types of payments can I collect?
        </h3>
        <p className='para'>
          You can collect one-off, regular or variable Direct Debit payments with our simple online tool or the API.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How does the payment process work?
        </h3>
        <ul className='list'>
          <li>
            Using our online tool you can issue a request for authorisation to take Direct Debit payments from a customer in 2 clicks.
          </li>
          <li>
            We email your customer a link to our payment authorisation page. To authorise
            they click the link and complete our secure checkout.
          </li>
          <li>
            Once authorised, you can take payments from your customers automatically by adding them to a payment plan.
          </li>
          <li>
            We will notify your customers every time a new payment is taken.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How does my customer authorise a payment?
        </h3>
        <p className='para'>
          You can trigger a request for authorisation from GoCardless by adding a customer, or send them a link to a plan yourself.
        </p>
        <p className='para'>
          Your customer just needs to click the link and enter their details on our secure online
          payment page to set up a Direct Debit and authorise you to take future payments automatically.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can customers sign up on my website?
        </h3>
        <p className='para'>
          Yes - you can either do this by integrating with our <a href='https://developer.gocardless.com/'
          className='u-link-color-p u-text-underline'>API</a> or by generating a link for a payment
          plan and embedding this as a button on your website.
        </p>
        <p className='para'>
          On clicking the button the customer will be sent to our secure online payment page where they can authorise the payment(s).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I set payments to start and end on a particular date?
        </h3>
        <p className='para'>
          Yes - you can easily customise the day, date, frequency and duration of payments.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I change a payment or payment plan once it has been created?
        </h3>
        <p className='para'>
          Provided your payment hasn't been submitted to the banks yet, you can easily cancel an existing payment
          or remove your customer from the plan and add them to a new one. All this can be done from within your dashboard in seconds.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How do I know if I've been paid?
        </h3>
        <p className='para'>
          Our online dashboard gives you real-time info on all your payments and
          customers, allowing you to check the status of a payment at any time.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Will you ever place limits on my account?
        </h3>
        <p className='para'>
          There are certain situations where it may be necessary to place restrictions on your account:
        </p>
        <ul className='list'>
          <li>Where we believe that there may be a breach in the security of your account details;</li>
          <li>Where we suspect the unauthorised or fraudulent use of your account;</li>
          <li>Where we are required to by law.</li>
        </ul>
        <p className='para'>
          If we ever do have to do this, rest assured we will notify you as soon as possible and make sure
          that there is always someone you can talk to to help resolve the situation as quickly as possible.
        </p>
      </Translation>
    );
  }
}
