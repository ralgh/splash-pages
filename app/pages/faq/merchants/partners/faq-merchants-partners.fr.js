import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsPartnersFr extends React.Component {
  displayName = 'FaqMerchantsPartnersFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Partenaires</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Qu’est ce qu’un partenaire?
        </h3>
        <p className='para'>
          Un partenaire est une application ou logiciel qui a intégré notre API pour vous. Vous n’avez
          alors pas besoin d’intégrer notre API, et vous pouvez directement prendre les paiements via
          prélèvement automatique via cette application ou logiciel.
        </p>
        <p className='para'>
          Le système de facturation récurrent Zuora est un exemple de partenaire. <Link to='contact_sales'
          className='u-link-color-p u-text-underline'>Contactez-nous</Link> pour en apprendre plus.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Partagez vous une part des recettes pour le partenaire ?
        </h3>
        <p className='para'>
          Oui – nous partageons 10% des frais transactionnels.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment devenir un partenaire ?
        </h3>
        <p className='para'>
          Contactez nous à <a href='mailto:france@gocardless.com'
          className='u-link-color-p u-text-underline'>france@gocardless.com</a> avec une brève description
          de votre service, et nous vous répondrons au plus tôt.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment montrer les données de paiements dans mon application ?
        </h3>
        <p className='para'>
          GoCardless vous fournit des 'webhooks' qui permettent d’être notifié de tout changement de
          statut pour chaque object. Par exemple, vous êtes informé en temps réel sur le statut de tous
          vos paiements et mandats.
        </p>
        <p className='para'>
          Vous pouvez en apprendre plus sur nos webhooks dans notre API <a href='https://developer.gocardless.com/pro/#webhooks-overview'
          className='u-link-color-p u-text-underline'>ici</a>.
        </p>

       <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Puis-je héberger directement les pages de paiements ?
        </h3>
        <p className='para'>
          Oui. Un partenaire peut créer les pages de paiement pour ses utilisateurs. Il y a cependant certaines
          règles à respecter que nous vous aiderons à implémenter via notre guide des règles SEPA.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Autorisez-vous les iFrames ?
        </h3>
        <p className='para'>
          GoCardless n’a pas d’iFrame nativement. Nos partenaires peuvent construire une iFrame pour leur utilisateurs,
          qui intéragit avec notre API.
        </p>
      </Translation>
    );
  }
}
