import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsCustomerExperienceFr extends React.Component {
  displayName = 'FaqMerchantsCustomerExperienceFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Expérience du consommateur</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment est ce que mon client peut me payer?
        </h3>
        <p className='para'>
          Votre client peut vous donner ses coordonnées bancaires par internet via GoCardless, et additionnellement par téléphone ou par courrier via GoCardless Pro.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Est ce que mes clients restent sur mon site?
        </h3>
        <p className='para'>
          Cela dépend du produit. Avec GoCardless, nous hébergeons les pages de paiement. Avec GoCardless Pro, vous avez le choix entre utiliser nos pages de paiements ou héberger vos propres pages de paiement sur votre site internet. Vous êtes alors en contrôle du design de vos pages de paiements.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Autorisez-vous les iFrames?
        </h3>
        <p className='para'>
          GoCardless n’a pas d’iFrame nativement. Certains de nos partenaires, tel que Zuora, peuvent vous fournir
          une iFrame pour vos pages de paiements.
        </p>
        <p className='para'>
          Nous offrons également un flow JS qui vous permet de n’avoir aucune donnée bancaire transitant sur vos serveurs.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Est-il possible de pré-remplir les champs de paiements?
        </h3>
        <p className='para'>
          Vous pouvez pré-remplir tous les champs de paiements via l'API, excepté l’IBAN qui doit être fourni par l’utilisateur.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Mes clients peuvent-ils payer par mobile?
        </h3>
        <p className='para'>
          Les pages de paiement GoCardless sont adaptatives, donc visible confortablement sur mobiles, tablettes et ordinateurs quel que soit le navigateur. Si vous utilisez vos propres pages de paiement, cela dépend de votre site. 
        </p>

      </Translation>
    );
  }
}
