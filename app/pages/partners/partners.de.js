import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import ProIcon from '../../icons/svg/pro';
import CustomerIcon from '../../icons/svg/customer';
import AddPartnerIcon from '../../icons/svg/add-partner';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import PartnersLink from './partners-link';

export default class PartnersDe extends React.Component {
  displayName = 'PartnersDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='page-hero u-padding-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxm'>
            <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Helfen Sie Ihren Kunden Zahlungen zu empfangen</h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
              Wir ermöglichen Zahlungen für große und kleine Software Anbieter.<br />
              Wenn Ihre Kunden wiederkehrende Zahlungen einsammeln, dann sollten Sie mit uns arbeiten. 
            </p>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light'>
              Keine Bürokratie oder extra Gebühren, nur unsere einfachen Preise:<br /> <Message message='pricing.per_transaction_amount_normal' /> pro Zahlung,
              gedeckelt bei <Message message="pricing.cost_cap" />.
            </h2>
            <div className='site-container u-padding-Txxl'>
              <div className='grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <ProIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Unterscheiden Sie sich
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Stechen Sie aus der Konkurrenz heraus und bieten Sie Ihren Kunden ein nahtloses Lastschrift Erlebnis. 
                  </p>
                </div>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Begeistern Sie Ihre Kunden
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Vereinfachen Sie das Leben Ihrer Kunden und erhöhen Sie deren Loyalität, indem Sie Zahlungen über Ihre Software vermehren.
                  </p>
                </div>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Vergrößern Sie Ihr Business
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Als GoCardless Partner verdienen Sie Kommission auf alle Zahlungen oder ziehen Zahlungen nahtlos über uns ein. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Werden Sie Partner
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Vergrößern Sie Ihr Geschäft heute, indem Sie mit GoCardless integrieren. <br />
                Für weitere Informationen, schreiben Sie uns an <Href to='email' />
              </p>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}