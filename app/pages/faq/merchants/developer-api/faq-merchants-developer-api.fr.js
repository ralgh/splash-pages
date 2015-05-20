import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsDeveloperApiFr extends React.Component {
  displayName = 'FaqMerchantsDeveloperApiFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>API pour développeur</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          À quoi sert l'API?
        </h3>
        <p className='para'>
          Notre API REST donne la possibilité aux développeurs de facilement intégrer GoCardless. Apprenez en
          plus sur notre <a href='https://developer.gocardless.com/pro' className='u-link-color-p u-text-underline'>documentation</a>.
        </p>
        <p className='para'>
          Vous pouvez intégrer GoCardless pour prendre des paiements via prélèvement bancaire
          à partir de vos systèmes informatique et votre site web.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Avec quels langages de programmation êtes-vous compatible?
        </h3>
        <p className='para'>
          Nous sommes compatible avec tous les langages existants grâce à l’adoption du standard REST.
          Nous avons également plusieurs librairies comme Ruby, PHP et Java. Nous en développons régulièrement de nouvelles.
        </p>
        <p className='para'>
          Si vous avez des questions pour nos développeurs, vous pouvez aller sur
          notre <a href='http://webchat.freenode.net/?channels=gocardless&uio=OT10cnVlJjExPTIzNiYxMj10cnVl51' target='_blank'
          className='u-link-color-p u-text-underline'>chat IRC</a> (#gocardless sur irc.freenode.net) en Anglais.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Puis-je héberger directement les pages de paiements ?
        </h3>
        <p className='para'>
          Oui avec GoCardless Pro. Vous êtes en contrôle de vos pages de paiement.
          Vous êtes libre du design de ces pages. Il y a cependant
          certaines règles à respecter, que nous vous aiderons à implémenter via notre guide des règles SEPA.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Autorisez-vous les iFrames ?
        </h3>
        <p className='para'>
          GoCardless n’a pas d’iFrame nativement. Certains de nos partenaires, tel que Zuora, peuvent vous fournir une
          iFrame pour vos pages de paiements.
        </p>
        <p className='para'>
          Nous offrons également un flow JS qui vous permet de n’avoir aucune donnée bancaire transitant sur vos serveurs.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quelles informations sont disponibles sur votre API ?
        </h3>
        <p className='para'>
          GoCardless vous fournit des webhooks qui permettent d’être notifié vers votre serveur de tout changement de statut pour chaque
          objet. Par exemple, vous êtes informé en temps réel sur le statut de tous vos paiements et mandats.
        </p>
        <p className='para'>
          Vous pouvez en apprendre plus sur nos webhooks dans notre API <a href='https://developer.gocardless.com/pro/#webhooks-overview'
          className='u-link-color-p u-text-underline'>ici</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment recevoir de l’aide technique ?
        </h3>
        <p className='para'>
          Vous pouvez nous envoyer un email à <Href to='email' />. Nous avons aussi une salle de chat qui est
          accessible à <a href='http://webchat.freenode.net/?channels=gocardless&uio=OT10cnVlJjExPTIzNiYxMj10cnVl51' target='_blank'
          className='u-link-color-p u-text-underline'>#gocardless sur irc.freenode.net</a>. Nos développeurs sont disponible de
          10h-19h du Lundi au Vendredi pour vous assister.
        </p>
      </Translation>
    );
  }
}
