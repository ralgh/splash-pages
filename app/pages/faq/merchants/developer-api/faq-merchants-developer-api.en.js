import React from 'react';
import Message from '../../../../components/message/message';
import Translation from '../../../../components/translation/translation';
import { getMessage } from '../../../../components/intl/intl';

export default class FaqMerchantsDeveloperApiEn extends React.Component {
  displayName = 'FaqMerchantsDeveloperApiEn'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const { messages } = this.context;

    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Developer API</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What can I use the API for?
        </h3>
        <p className='para'>
          Our REST API allows developers to easily create powerful integrations with GoCardless. See
          our <a href='https://developer.gocardless.com/' className='u-link-color-p u-text-underline'>documentation</a> to find out more.
        </p>
        <p className='para'>
          You can integrate as a Merchant to take payments on your own behalf, or integrate as a Partner to create and manage
          multiple merchants.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          How does the Partner API work?
        </h3>
        <p className='para'>
          A Partner integration allows your customers to quickly and easily create a GoCardless account without copying and
          pasting API keys.
        </p>
        <p className='para'>
          This account will be linked to your Master Merchant account so that you can manage these accounts and process payment
          requests on their behalf.
        </p>
        <p className='para'>
          For further information see the 'Partner' section of this FAQ or our <a href='https://developer.gocardless.com/#partner-guide'
          className='u-link-color-p u-text-underline'>partner API guide</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What programming languages can I use?
        </h3>
        <p className='para'>
          We have client libraries for
          <a href='https://github.com/gocardless/gocardless-ruby' target='_blank' className='u-link-color-p u-text-underline'>
            Ruby
          </a>,
          <a href='https://github.com/gocardless/gocardless-php' target='_blank' className='u-link-color-p u-text-underline'>
            PHP
          </a>,
          <a href='https://github.com/gocardless/gocardless-java' target='_blank' className='u-link-color-p u-text-underline'>
            Java
          </a>,
          <a href='https://github.com/gocardless/gocardless-python' target='_blank' className='u-link-color-p u-text-underline'>
            Python
          </a>,
          <a href='https://github.com/gocardless/gocardless-dotnet' target='_blank' className='u-link-color-p u-text-underline'>
            .NET
          </a>.
          If you need any help with these, just drop by our&nbsp;
          <a href='http://webchat.freenode.net/?channels=gocardless&uio=OT10cnVlJjExPTIzNiYxMj10cnVl51'target='_blank'
          className='u-link-color-p u-text-underline'>IRC chat</a> (#gocardless on irc.freenode.net) for details.
        </p>
        <p className='para'>
          <i>Using a different language?</i> No problem - our standards-compliant
          REST API can be used with just about any programming language
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can I host the payment pages on my site?
        </h3>
        <p className='para'>
          No - in order to comply with the Direct Debit scheme rules the payment pages are securely hosted on our site.
        </p>
        <p className='para'>
          You can redirect the customer to our payment page and we will redirect them back to your site. Alternatively
          you can allow them to access them via a pop-out from your site.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Do you offer iFrames?
        </h3>
        <p className='para'>
          No - we do not offer iFraming of our payment pages as we are not sufficiently comfortable with the reliability
          and security of iFrames.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Can payments be made directly via the API?
        </h3>
        <p className='para'>
          Only once authorisation is in place. Customers must be sent to our secure payment pages to give initial
          authorisation of the Direct Debit.
        </p>
        <p className='para'>
          To make this as easy as possible for your clients, you can pass their personal information to us via the API
          to prepopulate the form.
        </p>
        <p className='para'>
          Once authorisation is in place payment can be requested via the API.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What information do you make available via the API?
        </h3>
        <p className='para'>
          GoCardless provides webhooks to notify Merchants of any changes in the status of its resources. One extremely
          useful example is determining when a bill has been paid.
        </p>
        <p className='para'>
          You can find out more about available webhooks and how to use them in our <a href='https://developer.gocardless.com/#webhooks'
          className='u-link-color-p u-text-underline'>webhook guide</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Where can I get technical support?
        </h3>
        <p className='para'>
          You can email us at <a href={ `mailto:${getMessage(messages, 'email')}` } className='u-link-color-p u-text-underline'
          itemProp='email'><Message message='email' /></a>. We also have a live chat room which can be found
          in <a href='http://webchat.freenode.net/?channels=gocardless&uio=OT10cnVlJjExPTIzNiYxMj10cnVl51' target='_blank'
          className='u-link-color-p u-text-underline'>#gocardless on irc.freenode.net</a>. Our developers are on hand 9am-6pm,
          Mon-Fri to help with your technical queries.
        </p>
        <p className='para'>
          A number of detailed product guides are also available in our <a href='https://help.gocardless.com/'
          className='u-link-color-p u-text-underline'>Help Centre</a>.
        </p>
      </Translation>
    );
  }
}
