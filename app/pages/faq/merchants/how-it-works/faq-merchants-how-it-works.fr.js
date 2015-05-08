import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsHowItWorksFr extends React.Component {
  displayName = 'FaqMerchantsHowItWorksFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Fonctionnement</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quand vais-je recevoir mes paiements?
        </h3>
        <p className='para'>
          Tous les paiements SEPA sont payés <strong>3 jours ouvrables</strong> après le prélèvement des fonds
          sur le compte de votre client.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quels types de paiement sont acceptés?
        </h3>
        <p className='para'>
          Vous pouvez collecter des paiements par compte bancaire dans la zone Euro ('prélèvement SEPA') et en
          Grande-Bretagne ('prélèvement BACS' en livre sterling). Ces derniers peuvent être ponctuels,
          récurrents ou variables.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quel est le processus de paiement?
        </h3>
        <ul className='list u-margin-Tm'>
          <li>
            Vos clients fournissent leur information bancaire sur une page de paiement sécurisé sur votre site web,
            par téléphone ou par courrier.
          </li>
          <li>
            Les informations nécessaires pour créer le prélèvement sont automatiquement alimentées par votre site web via
            notre API. Elles peuvent également être alimentées à partir de vos systèmes de facturation ou de gestion
            clients, ou votre intranet.
          </li>
          <li>
            Nous créons un mandate de prélèvement auprès des banques, contre lequel vous pouvez prélevez les fonds nécessaires.
            Nous stockons le mandat dématérialisé de façon sécurisée.
          </li>
          <li>
            Vous envoyez un email pour notifier votre client des prochaines échéances de paiements.
          </li>
          <li>
            Vous gérez vos paiements directement dans vos systèmes ou avec notre tableau de bord.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment mes clients autorisent-ils les paiements?
        </h3>
        <p className='para'>
          Vos clients fournissent leur information bancaire sur une page de paiement sécurisée et hébergée sur votre site,
          ce qui crée une autorisation de prélèvement. Vos clients ne voient que votre marque et vous avez le contrôle total
          du design de vos pages de paiements.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Est il possible de planifier mes paiements pour des dates précises?
        </h3>
        <p className='para'>
          Oui – vous pouvez facilement adapter le jour, la date, la fréquence et la durée de tous vos paiements via notre API.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Est il possible de modifier un paiement une fois créé?
        </h3>
        <p className='para'>
          Oui, vous pouvez soit annuler un paiement s’il n’a pas déjà été prélevé, soit faire  un remboursement. Vous
          connaissez le statut de votre paiement et de votre remboursement à chaque instant, en temps réel. Le tout se
          fait facilement via notre API.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment savoir quand j’ai été payé?
        </h3>
        <p className='para'>
          Vous pouvez voir le statut de tous vos paiements via une simple requête à notre API ou les visualiser sur notre
          tableau de bord en ligne.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Est-il possible que vous mettiez des limites sur mon compte?
        </h3>
        <p className='para'>
          Il se peut que nous limitions les paiements dans certains cas, par exemple:
        </p>
        <ul className='list'>
          <li>Quand nous pensons qu’il y a eu une faille de sécurité sur votre compte;</li>
          <li>Si nous soupçonnons un usage frauduleux ou non-autorisé de votre compte;</li>
          <li>Si cela est requis par la loi</li>
        </ul>
        <p className='para'>
          Si nous devons prendre cette mesure, nous vous notifierons au plus tôt possible et nous mettrons une personne
          dédiée pour résoudre votre
          situation au plus vite.
        </p>
      </Translation>
    );
  }
}
