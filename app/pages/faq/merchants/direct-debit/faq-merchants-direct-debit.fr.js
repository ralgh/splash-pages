import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsDirectDebitFr extends React.Component {
  displayName = 'FaqMerchantsDirectDebitFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Prélèvement bancaire</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Qu'est ce que le prélèvement SEPA?
        </h3>
        <p className='para'>
          Le prélèvement SEPA est un nouvel instrument de paiement introduit par l’Union Européenne en
          août 2014, qui remplace le prélèvement national. Il permet de collecter des fonds sur les comptes
          bancaires en Euro dans toute <a href='http://fr.wikipedia.org/wiki/Single_Euro_Payments_Area'
          target='_blank' className='u-link-color-p u-text-underline'>la zone SEPA</a>.
        </p>
        <p className='para'>
          Vous pouvez en apprendre plus grâce à <a href='/fr/guides/sepa'
          className='u-link-color-p u-text-underline'>notre guide SEPA.</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quelles sont les protections des consommateurs?
        </h3>
        <p className='para'>
          Votre consommateur bénéficie d’un droit  à remboursement d’un prélèvement SEPA autorisé. Toute
          demande de remboursement doit être présentée à leur banque dans les 8 semaines suivant la date
          de débit de leur compte.
        </p>
        <p className='para'>
          Le consommateur peut également demander le remboursement immédiat d’un prélèvement SEPA non
          autorisé ou frauduleux. Le cas échéant, il doit le faire sans tarder et au plus tard dans les
          13 mois à compter de la date de débit de son compte. Le compte est alors remis dans l’état où
          il se serait trouvé si l’opération de paiement non autorisée n’avait pas eu lieu.
        </p>
        <p className='para'>
          Le remboursement par la banque ne signifie en aucune manière que la contestation de la créance
          sous-jacente soit justifiée. Ainsi, le remboursement est sans effet sur la réalité (ou non) de
          cette créance sous-jacente, et il vous appartient de régler le différend entre vous et votre client.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Y a-t-il des frais pour le consommateur?
        </h3>
        <p className='para'>
          Non. Avec l’entrée de SEPA, les banques sont obligées de ne pas facturer les prélèvements bancaires.
          C’est donc gratuit pour vos clients.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Ai-je besoin d’un Identifiant Créancier SEPA (ICS)?
        </h3>
        <p className='para'>
          Nous pouvons vous fournir un ICS. Vous pouvez également utiliser le vôtre.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quelles sont les opérations les mieux adaptées aux prélèvements bancaires?
        </h3>

        <p className='para'>
          Le prélèvement bancaire est particulièrement adapté aux:
        </p>
        <ul className='list'>
          <li>Paiements réguliers (par exemple, abonnements ou forfaits)</li>
          <li>Clients avec une relation de long-terme (par exemple, compte client)</li>
          <li>Facturation de services (par exemple, facture téléphonique)</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quelles sont les opérations qui ne sont pas adaptées aux prélèvements bancaires?
        </h3>
        <ul className='list u-margin-Tm'>
          <li>Les opérations nécessitant un paiement immédiat (par exemple, e-commerce)</li>
          <li>Les objets de très haute valeur achetés ponctuellement (par exemple, achat d’or)</li>
          <li>Les opérations à haut risque de fraude au remboursement (par exemple, jeux d’argent)</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quels sont les délais de paiements?
        </h3>
        <p className='para'>
          Tous les paiements SEPA sont payés 3 jours ouvrables après le prélèvement du compte bancaire
          de votre client.
        </p>
        <p className='para'>
          Pour un nouveau client, il nous faut créer un nouveau mandat auprès des banques, ce qui doit être fait
          6 jours ouvrables avant le prélèvement du compte bancaire de votre client.
        </p>
        <p className='para'>
          Les délais de paiement sont entièrement automatisés par GoCardless, les délais présentés ici sont pour
          votre information.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Puis-je collecter des paiements ponctuels avec le prélèvement bancaire?
        </h3>
        <p className='para'>
          Oui, c’est possible, même si le prélèvement bancaire est surtout avantageux pour les paiements récurrents.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Est-il facile de changer de prestataire de prélèvement bancaire?
        </h3>
        <p className='para'>
          Oui – il suffit d’amender le mandat SEPA pour y mettre le nom et Identifiant Créancier SEPA du nouveau
          prestataire. Vos clients doivent être notifiés du changement, mais sans nécessiter d’action de leur part.
        </p>
        <p className='para'>
          GoCardless gère entièrement ce changement pour vous. Vous n’avez rien à faire, et ce service est entièrement
          gratuit.
        </p>

      </Translation>
    );
  }
}
