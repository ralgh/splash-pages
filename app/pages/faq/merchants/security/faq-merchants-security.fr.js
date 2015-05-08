import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqMerchantsSecurityFr extends React.Component {
  displayName = 'FaqMerchantsSecurityFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Securité</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment savoir si mon argent est en sécurité?
        </h3>
        <p className='para'>
          GoCardless est un <a href='http://www.fsa.gov.uk/register/psdFirmBasicDetails.do?sid=315374'
          title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>Etablissement de Paiement
          Agréé</a>, régulé par l’autorité britannique FCA (Financial Conduct Authority) et habilité à collecter des
          paiements à travers l’Union Européenne. Nous servons plus de 5.000 entreprises en Europe.
        </p>
        <p className='para'>
          Votre argent transite dans un compte séquestre sécurisé, dans l’une de nos banques partenaires.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment est-ce que GoCardless protège mes données?
        </h3>
        <p className='para'>
          La sécurité est d’une importance primordiale à GoCardless. Nous prenons plusieurs mesures pour garantir
          que vos données sont sécurisées à chaque instant :
        </p>

        <ul className='list'>
          <li>
            Notre accès au prélèvement SEPA est fourni par les plus grandes banques Européennes,
            qui ont validé l’intégrité de nos systèmes.
          </li>
          <li>
            Notre serveurs sont basés en Europe dans des centres de données sécurisé – vos données ne sortent jamais de l’UE.
          </li>
          <li>
            Notre serveur de données financières est séparé de notre serveur d’application par de multiples pare-feux.
          </li>
          <li>
            Toute communication client-serveur est cryptée par 256 bit SSL. Le standard réglementaire est seulement de 128 bit.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Que faisons-nous de votre argent avant qu’il ne vous soit versé ?
        </h3>
        <p className='para'>
          Votre argent transite par un compte séquestre sécurisé, dans l’une de nos banques partenaires, en conformité avec
          les règles financières.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Mes clients sont-ils protégés ?
        </h3>
        <p className='para'>
          Oui, ils sont protégés par les droits à remboursement du consommateur (voir notre rubrique <Link to='faq_merchants_direct_debit'
          className='u-link-color-p u-text-underline'>Prélèvement bancaire</Link>).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Découverte de vulnérabilité
        </h3>

        <p className='para'>
          Notre priorité est de protéger nos utilisateurs. Si vous avez découvert une vulnérabilité, nous vous demandons
          de nous en faire part de façon responsable. Si la vulnérabilité est exposée publiquement, ceci met en danger tous
          nos utilisateurs. Nous vous recommandons de nous contacter directement pour corriger le problème.
        </p>
        <p className='para'>
          Pour vous remercier de vos efforts pour que GoCardless reste sûr, nous offrons des récompenses pour votre
          collaboration en cas de découverte de vulnérabilité. Ces récompenses sont déterminées à notre gré, mais sont au
          minimum de 300€ (et peuvent être bien plus élevées). Le montant final est déterminé selon la sévérité du problème.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Rapport du problème
        </h3>

        <ul className='list u-margin-Tm'>
          <li>
            Envoyez nous un email à <a href='mailto:security@gocardless.com'
            className='u-link-color-p u-text-underline'>security@gocardless.com</a> dès que vous prenez connaissance du problème.
            Notre clé GPG id est <code>684ED3A3</code>, et l'empreinte est le <code>8A4C 2665 6632 8EC4 1C83 6BB4 D9E1 ADB2
            684E D3A3</code>.
          </li>
          <li>
            Décrivez en détail le problème, y compris les étapes pour le reproduire.
          </li>
          <li>
            N’exploitez pas la vulnérabilité, sauf pour démontrer le problème à nos équipes.
          </li>
          <li>
            Ne révélez pas le problème avant qu’il soit résolu.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Eligibilité pour une récompense
        </h3>

        <p className='para'>
          Nous apprécions les efforts accomplis par les chercheurs en sécurité pour qu'Internet reste sûr, et nous voulons
          les récompenser pour leur travail. Cependant, nous ne récompensons pas les actions malveillantes, ou les actions délibérées
          pour perturber notre service. L‘éligibilité pour une récompense est décidée au cas-par-cas, mais nous ne donnerons jamais de
          récompenses pour :
        </p>
        <ul className='list'>
          <li>
            Les attaques de déni de service
          </li>
          <li>
            L’utilisation d’outils comme les scanneurs et 'fuzzers', car ils impactent négativement notre service, et créent de
          large perturbations coûteuses à nettoyer
          </li>
          <li>
            Les attaques d’ingénierie sociale
          </li>
          <li>
            Les attaques physiques ou menaces envers nos équipes ou nos utilisateurs
          </li>
        </ul>
      </Translation>
    );
  }
}
