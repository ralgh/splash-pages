import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqMerchantsSigningUpEn extends React.Component {
  displayName = 'FaqMerchantsSigningUpEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Signing up</h2>
        
        <Translation locales='en-EU'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            How can I register for GoCardless?
          </h3>
          <p className='para'>
            You can access our sandbox and create an API key <a href="https://manage-sandbox.gocardless.com/registrations/new">here</a>.
            To create a production account and to take actual payments, you'll need to <Link to='contact_sales'>contact our team</Link>.
          </p>
        </Translation>
        <Translation locales='en-GB'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            What do I need to sign up?
          </h3>
          <p className='para'>
            We will need some personal details to help us verify your identity and some basic
            information on the company or organisation you are collecting for.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            How do I test out the product?
          </h3>
          <p className='para'>
            After signing up online, we recommend trying to take a test payment from
            yourself. It takes less than 5 minutes and is completely risk-free.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Can I sign up if I'm not a registered company?
          </h3>
          <p className='para'>
            Yes - GoCardless is available to charities, registered companies and individuals.
          </p>
          <p className='para'>
            If you're a company but you are not registered, you should sign up as an
            individual. This will not affect the operation of your account.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            What do I do if I'm a developer?
          </h3>
          <p className='para'>
            Developers should sign up as normal. Once logged in, you can activate your developer account.
            Our API documentation can be viewed <a href='https://developer.gocardless.com/'
            className='u-link-color-p u-text-underline'>here</a>.
          </p>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Are there any commitments?
        </h3>
        <p className='para'>
          No. There are no commitments. Signing up just means that you create an account from which you
          can try the product; you can stop using it without paying us anything whatsoever.
        </p>
      </Translation>
    );
  }
}
