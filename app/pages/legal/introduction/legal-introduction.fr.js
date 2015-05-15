import React from 'react';
import Translation from '../../../components/translation/translation';
import Href from '../../../components/href/href';
import Message from '../../../components/message/message';

export default class LegalIntroductionFr extends React.Component {
  displayName = 'LegalIntroductionFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Mentions Légales</h2>
          <p className='para'>
            Le présent site internet est édité par :
          </p>
          <p className='para'>
            GoCardless Ltd, société à responsabilité limitée par actions, au capital de
            $11.903.334,53 enregistrée au registre du commerce et des sociétés de Cardiff,
            Grande-Bretagne, sous le numéro 07495895.
          </p>
          <p className='para'>
            Siège social : 338-346 Goswell Road, Londres, EC1V 7LQ, Grande-Bretagne.
          </p>
          <p className='para'>
            TVA non applicable.
          </p>
          <p className='para'>
            Téléphone : <Message message='phone_full' /> et email : <Href to='email' className='u-link-color-p u-text-underline' />
          </p>
          <p className='para'>
            Les directeurs de la publication sont : Matt Robinson et Hiroki Takeuchi.
          </p>
          <p className='para'>
            GoCardless Ltd est un Etablissement de Paiement Agréé, régulé par l’autorité
            britannique FCA (Financial Conduct Authority), domiciliée au 25 The North Colonnade
            Londres E14 5HS Grande-Bretagne, et dont le numéro d’agrément est 597190.
          </p>
          <p className='para'>
            GoCardless Ltd est habilité à collecter des paiements à travers l’Union Européenne.
          </p>
          <p className='para'>
            Le présent site internet est hébergé par :
          </p>
          <p className='para'>
            <ul className='u-color-p'>
              <li>SoftLayer</li>
              <li>Siège social : 4849 Alpha Road, Dallas, TX 75244, Etats-Unis</li>
              <li>Téléphone : 00 1 214 442 0600</li>
            </ul>
          </p>
      </Translation>
    );
  }
}
