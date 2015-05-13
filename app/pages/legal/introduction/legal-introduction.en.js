import React from 'react';
import Translation from '../../../components/translation/translation';
import Message from '../../../components/message/message';
import { getMessage } from '../../../components/intl/intl';
import Link from '../../../components/link/link';

export default class LegalIntroductionEn extends React.Component {
  displayName = 'LegalIntroductionEn'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const { messages } = this.context;

    return (
      <Translation locales='en-GB'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Introduction</h2>
        <p className='para'>
          The following documents outline the terms of service for using GoCardless.
          You should read through these terms before using GoCardless.
        </p>
        <p className='para'>
          If you have any questions about our terms of service, then please get in
          touch by emailing <a href={ `mailto:${getMessage(messages, 'email')}` } className='u-link-color-p u-text-underline'
          itemProp='email'><Message message='email' /></a> or calling <Message message='phone_local' />.

          // FCA requirement. Do not remove.
          Customers can also find more details about our transaction structure
          in our <Link to='faq_customers' className='u-link-color-p u-text-underline'>FAQ</Link>.
        </p>

        <Link to='legal_customers' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s legal-contents__link-heading'>
            Customer agreement
          </h3>
          <p className='para'>
            The terms of use for paying via GoCardless
          </p>
        </Link>

        <Link to='legal_merchants' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s legal-contents__link-heading'>
            Merchant agreement
          </h3>
          <p className='para'>
            The terms of use for collecting payments via GoCardless
          </p>
        </Link>

        <Link to='legal_partners' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s legal-contents__link-heading'>
            Partner agreement
          </h3>
          <p className='para'>
            The terms of use for helping others collect via GoCardless
          </p>
        </Link>

        <Link to='legal_restrictions' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s legal-contents__link-heading'>
            Restricted activities
          </h3>
          <p className='para'>
            Activities you can't collect payments via GoCardless for
          </p>
        </Link>

        <Link to='legal_privacy' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s legal-contents__link-heading'>
            Privacy Policy
          </h3>
          <p className='para'>
            Our practices towards handling your personal information
          </p>
        </Link>
      </Translation>
    );
  }
}
