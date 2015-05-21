import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsSecurityEn extends React.Component {
  displayName = 'FaqMerchantsSecurityEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Security</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How do I know my money is safe?
        </h3>
        <Translation locales='en-EU'>
          <p className='para'>
            We are regulated as an <a href='http://www.fsa.gov.uk/register/psdFirmBasicDetails.do?sid=315374'
            title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>Authorised Payment Institution</a> by 
            the Financial Conduct Authority in the United Kingdom. We are authorised to collect payments throughout the European Union and currently serve more 5,000 businesses.
          </p>
          <p className='para'>
            All money collected is held in a secure client monies account with one of our partner banks.
          </p>
        </Translation>
        <Translation locales='en-GB'>
          <p className='para'>
            We are regulated as an <a href='http://www.fsa.gov.uk/register/psdFirmBasicDetails.do?sid=315374'
            title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>Authorised Payment Institution</a> by 
            the Financial Conduct Authority and serve more businesses than any other Direct Debit provider.
          </p>
          <p className='para'>
            All money collected is held in a secure client monies account with the RBS.
          </p>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How does GoCardless protect my data?
        </h3>
        <p className='para'>
          Security is of utmost importance at GoCardless. We take a number of steps to ensure
          our customers' data remains safe at all times:
        </p>

        <ul className='list'>
          <li>Our access to the Direct Debit system is provided by Europe's major banks, who have approved our systems.</li>
          <li>All servers are hosted in secure datacentres located in Europe - data is never transmitted outside the EU.</li>
          <li>Our financial data server is separated from our application server by multiple firewalls.</li>
          <li>All client-server communication is 256-bit SSL encrypted. The banking system requires just 128-bit.</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What do you do with my money before it is paid out?
        </h3>
        <p className='para'>
          All money collected is held in a secure client monies account held with one of our partner banks.
        </p>
        <p className='para'>
          Funds are held fully in accordance with safeguarding provisions.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Is it safe for my customers?
        </h3>
        <Translation locales='en-EU'>
          <p className='para'>
            Yes. Your customers are protected by <a href='/guides/sepa/protection/'
            className='u-link-color-p u-text-underline'>SEPA Direct Debit Customer Protection</a> in the Eurozone and the <a href='/direct-debit/guarantee/'
            className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a> in the UK.
          </p>
        </Translation>
        <Translation locales='en-GB'>
          <p className='para'>
            Yes. Your customers are fully protected by the <a href='/direct-debit/guarantee/'
            className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a>.
          </p>
          <p className='para'>
            This entitles them to a full and immediate refund of any payments taken from their account in error.
          </p>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Vulnerability Disclosure
        </h3>

        <p className='para'>
          We care deeply about keeping our users safe. If you believe you had discovered a vulnerability,
          we ask that you disclose it in a responsible manner. Sharing vulnerabilities publicly puts our
          entire user base at risk, so we urge you to keep issues private until we've had a chance to release a fix.
        </p>
        <p className='para'>
          In recognition of your efforts, and as thanks for working with us to keep GoCardless safe, we
          offer financial rewards for responsible vulnerability disclosures. Rewards are issued at our
          discretion, but are a minimum of £250 (and they may be substantially more). The amount is determined
          by the severity of the issue.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Reporting issues
        </h3>

        <ul className='list'>
          <li>
            Email us at <a href='mailto:security@gocardless.com'
            className='u-link-color-p u-text-underline'>security@gocardless.com</a> as soon as you become aware of
            the issue. Our GPG key id is <code>684ED3A3</code>, and its fingerprint
            is <code>8A4C 2665 6632 8EC4 1C83 6BB4 D9E1 ADB2 684E D3A3</code>
          </li>
          <li>
            Include as much detail as possible, including steps for reproducing the issue
          </li>
          <li>
            Do not exploit the vulnerability, except to demonstrate the issue to GoCardless staff
          </li>
          <li>
            Please do not disclose the issue to anyone else before we've rolled out a fix
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Reward eligibility
        </h3>

        <p className='para'>
          We appreciate the effort security researchers go to in order to keep the web safe,
          and we're keen to reward them for their work. However, we will not reward malicious
          behavior, or actions that deliberately cause a disruption to our service. Reward eligibility
          is decided on a case-by-case basis, but we will never provide rewards for:
        </p>
        <ul className='list'>
          <li>
            Denial of service attacks
          </li>
          <li>
            Using automated tools such as scanners and fuzzers as they can negatively impact our service,
            and create large amounts of noise that costs us time to clear up
          </li>
          <li>
            Social engineering attacks
          </li>
          <li>
            Physical attacks or threats against our staff or users
          </li>
        </ul>
      </Translation>
    );
  }
}
