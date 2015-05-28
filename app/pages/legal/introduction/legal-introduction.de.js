import React from 'react';
import Translation from '../../../components/translation/translation';
import Message from '../../../components/message/message';
import Href from '../../../components/href/href';


export default class LegalIntroductionDe extends React.Component {
  displayName = 'LegalIntroductionDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Impressum</h2>
          <p className='para'>
            Betreiber der Webseite gocardless.com:
          </p>
          <p className='para'>
            GoCardless Ltd <br/>
            338-346 Goswell Road < br/>
            London, EC1V 7LQ <br/>
            Vereinigtes Königreich
          </p>
          <p className='para'>
            Telefon: <Message pointer='phone_full' /> <br/>
            E-Mail : <Href to='email' className='u-link-color-p u-text-underline' />
          </p>
          <p className='para'>
            Geschäftsführer: Hiroki Takeuchi
          </p>
          <p className='para'>
            GoCardless ist registriert im britischen Handelsregister Companies House mit der Nummer 07495895.
            GoCardless ist eingetragen im Register der britischen Finanzaufsicht FCA unter der Registrierungsnummer 597190,
            und authorisiert als Zahlungsdienst innerhalb der Europäischen Union.
            GoCardless ist in der britischen Steuerbehörde HMRC mit der Registrierungsnummer 12642480 eingetragen.
          </p>
      </Translation>
    );
  }
}
