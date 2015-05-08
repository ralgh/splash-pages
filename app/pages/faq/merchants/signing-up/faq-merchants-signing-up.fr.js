import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsSigningUpFr extends React.Component {
  displayName = 'FaqMerchantsSigningUpFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Inscription</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment m’inscrire sur GoCardless?
        </h3>
        <p className='para'>
          Vous pouvez accéder à notre tableau de bord et créer votre clé d'accès à notre API
          directement <a href='https://manage-sandbox.gocardless.com/registrations/new'
          className='u-link-color-p u-text-underline'>ici</a>. Pour toute question ou démonstration
          du produit, vous pouvez contacter notre <Link to='contact_sales'
          className='u-link-color-p u-text-underline'>équipe</Link>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment essayer le produit?
        </h3>
        <p className='para'>
          Il vous faudra une clé d'accès à notre <a href='https://developer.gocardless.com/pro'
          className='u-link-color-p u-text-underline'>API</a>, afin de permettre à vos développeurs
          de tester GoCardless. Inscrivez-vous <a href='https://manage-sandbox.gocardless.com/registrations/new'
          className='u-link-color-p u-text-underline'>ici</a> afin d'accéder à notre tableau de bord et à votre
          clé d'accès API.
        </p>

        <p className='para'>
          Selon vos besoins, nous pouvons également vous faire la démonstration de notre tableau de bord pour
          gérer les prélèvements ou l’intégration faite par nos partenaires (par exemple Zuora).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Y a-t-il une période d’engagement?
        </h3>
        <p className='para'>
          Non. Vous êtes libre d’essayer le produit sans engagement. Si vous décidez d’utiliser GoCardless,
          vous pouvez résilier à tout moment sans frais.
        </p>
      </Translation>
    );
  }
}
