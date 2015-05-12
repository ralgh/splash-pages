import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsInternationalPayments extends React.Component {
  displayName = 'FaqMerchantsInternationalPayments'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>International payments</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can only UK businesses use GoCardless?
        </h3>
        <p className='para'>
          No. You just need to have a GBP bank account so we can pay you. You do not need to be a UK registered business or individual.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          When can I collect from Europe?
        </h3>
        <p className='para'>
          With GoCardless, any merchant registered in the U.K. or Ireland can collect from the Single Europe Payments
          Area. You will need to have a Euro account open in the UK or a Eurozone country.
        </p>
        <p className='para'>
          If you take more than 500 payments a month and want to use our Pro solution, you can be registered anywhere in the world.
        </p>


        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Where in Europe can I collect from?
        </h3>
        <p className='para'>
          You can collect from the following countries: Austria, Belgium, Cyprus, Estonia, Finland, France, Germany,
          Greece, Ireland, Italy, Latvia, Luxembourg, Malta, Monaco, the Netherlands, Portugal, San Marino, Slovakia,
          Slovenia and Spain.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What is SEPA Direct Debit?
        </h3>
        <p className='para'>
          SEPA Direct Debit is a new payments scheme which allows you to collect from any bank account in
          the <a href='http://en.wikipedia.org/wiki/Single_Euro_Payments_Area' target='_blank'
          className='u-link-color-p u-text-underline'>Single Euro Payments Area (SEPA)</a>. It works similarly to
          Direct Debit in the UK.
        </p>
        <p className='para'>
          Read more about it in our guide to <a href='https://gocardless.com/guides/sepa/introduction/'
          className='u-link-color-p u-text-underline'>the SEPA Direct Debit scheme</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Which currencies does GoCardless support?
        </h3>
        <p className='para'>
          We support payments in GBP and EUR (with our <a href='/europe'
            className='u-link-color-p u-text-underline'>SEPA Direct Debit</a> product).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Will international payments cost the same as UK?
        </h3>
        <p className='para'>
          International payments will cost 1% per transaction (capped at €2).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          When will GoCardless be available outside Europe?
        </h3>
        <p className='para'>
          GoCardless will not be available outside Europe in 2014. We are working very hard to expand
          to more countries soon.
        </p>
      </Translation>
    );
  }
}
