import React from 'react';
import FaqCustomersPage from '../faq-customers-page';
import Message from '../../../../components/message/message';
import { getMessage } from '../../../../components/intl/intl';

export default class FaqCustomersRefunds extends React.Component {
  displayName = 'FaqCustomersRefunds'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const { messages } = this.context;

    return (
      <FaqCustomersPage>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Refunds</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What do I do if I would like a refund?
        </h3>
        <p className='para'>
          The best thing to do is to contact the merchant and resolve the matter with them
          directly. GoCardless is not authorised to make refunds on behalf of our merchants.
        </p>
        <p className='para'>
          If you are struggling to make contact with the merchant, or the merchant
          refuses to offer you a refund, please contact us so we can assist you.
        </p>
        <p className='para'>
          Your payments are protected by the the&nbsp;
          <a href='https://gocardless.com/direct-debit/guarantee/' className='u-link-color-p u-text-underline'>
            Direct Debit Guarantee
          </a> at all times.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What do I do if I believe I have been a victim of fraud?
        </h3>
        <p className='para'>
          Let us know immediately by emailing&nbsp;
          <a href={ `mailto:${getMessage(messages, 'email')}` }className='u-link-color-p u-text-underline' itemProp='email'>
            <Message message='email' />
          </a> or calling <Message message='phone_local' />.
        </p>
        <p className='para'>
          We can investigate the matter further and arrange for a full refund under the&nbsp;
          <a href='https://gocardless.com/direct-debit/guarantee/' className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How can I cancel my Direct Debit?
        </h3>
        <p className='para'>
          Email us at <a href={ `mailto:${getMessage(messages, 'email')}` } className='u-link-color-p u-text-underline' itemProp='email'>
            <Message message='email' />
          </a> or call on <Message message='phone_local' /> and we can cancel your Direct Debit immediately.
        </p>
        <p className='para'>
          You can also cancel your Direct Debit directly with your bank or building society.
        </p>
      </FaqCustomersPage>
    );
  }
}
