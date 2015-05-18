import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqMerchantsFr extends React.Component {
  displayName = 'FaqMerchantsFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>En bref</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment utiliser GoCardless?
        </h3>
        <p className='para'>
          Il y a trois façons d'utiliser GoCardless :
        </p>
        <ul className='list'>
          <li>
            <strong>GoCardless</strong> - Mettez en place et gérez vos prélèvements avec vos clients directement
            dans notre tableau de bord en ligne.
          </li>
          <li>
            <strong>GoCardless Pro</strong> - Automatisez vos prélèvements en intégrant notre <a href='https://developer.gocardless.com/pro' className='u-link-color-p u-text-underline'>REST API</a> dans votre site internet et vos systèmes informatiques.
          </li>
          <li>
            <strong>Nos partenaires</strong> - Nous travaillons avec de multiples <Link to='partners'
            className='u-link-color-p u-text-underline'>partenaires</Link>, afin que vous puissiez prendre des paiements
            dans les logiciels que vous utilisez déjà.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          À qui s'adresse GoCardless?
        </h3>
        <p className='para'>
          GoCardless s'adresse à toute entreprise désirant prendre des paiements directement à partir du compte
          bancaire de leurs clients dans la zone Euro et en Grande-Bretagne.
        </p>
        <p className='para'>
          Le prélèvement bancaire est particulièrement adapté aux paiements récurrents, par exemple les offres
          d'abonnements, la facturation de compte clients ou les achats fréquents.
        </p>
        <p className='para'>
          La simplicité d'utilisation de notre tableau de bord et la facilité d'implémentation de notre API 
          font de GoCardless une platforme puissante pour tous, des start-ups innovantes aux grandes enterprises.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quels sont les avantages de GoCardless vis-à-vis d'autres prestataires?
        </h3>
        <p className='para'>
          Voici quelques-uns de nos avantages vis-à-vis d'autres prestataires:
        </p>

        <ul className='list'>
          <li>
            <strong>Moins d'administration</strong> - Inscrivez-vous en 24h et commencez à encaisser des paiments 
            récurrents ou ponctuels automatiquement en un clic. Le suivi des paiements et la réconciliation bancaire
            se font automatiquement. Fini les démarches et la gestion lourde requises par les banques.
          </li>
          <li>
             <strong>Un prix simple et transparent </strong> - Nos tarifs sont <Link to='pricing'
             className='u-link-color-p u-text-underline'>simples et dégressifs</Link>. Les
             incidents de paiements, ainsi que l'implémentation, sont gratuits.
          </li>
          <li>
            <strong>Évoluez facilement</strong> - Notre tableau de bord est propulsé par 
            notre <a href='https://developer.gocardless.com/' className='u-link-color-p u-text-underline'>API REST</a>. 
            Ceci vous permet de facilement évoluer vers l'API afin d'automatiser plus en profondeur au fur et 
            à mesure.
          </li>
          <li>
             <strong>La technologie est notre métier</strong> - Nous recruitons les meilleurs développeurs, et notre
             équipe de support client est en permanence à votre écoute.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Pour quels usages GoCardless n'est-il pas adapté?
        </h3>
        <p className='para'>
          GoCardless n'est pas adapté à tous les usages. Par exemple, nous ne pouvons pas:
        </p>
        <ul className='list'>
          <li>
            <strong>Réaliser des paiements par carte bancaire</strong> - mais vous <strong>pouvez</strong> toujours utiliser
            un prestataire à cette fin au côté de GoCardless.
          </li>
          <li>
            <strong>Prélever des paiements instantanément</strong> - Le prélèvement SEPA prend 3-6 jours ouvrables pour être
            confirmé par les banques, ce qui n'est pas idéal pour les livraisons rapides d'objets physiques.
          </li>
        </ul>
        <p className='para'>
          Nous sommes capables d'accepter la grande majorité des clients, à quelques exceptions près - pour plus de détails,
          voir nos <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>activités restreintes</Link>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Y a-t-il des limites sur les montants d'encaissement?
        </h3>
        <p className='para'>
          Il n'y a pas de limites sur le nombre de transactions que vous pouvez effectuer.
        </p>
        <p className='para'>
          Pour une transaction unitaire, le montant maximum est de 5.000€.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment vais-je recevoir les fonds collectés?
        </h3>
        <p className='para'>
          Les fonds collectés sont directement versés sur le(s) compte(s) en banque de votre choix. Avec GoCardless, 
          nos <Link to='pricing' title='Tarifs' className='u-link-color-p u-text-underline'>tarifs</Link> sont déduits 
          automatiquement. Avec GoCardless Pro, nous pouvons facturer les frais transactionnels séparément.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Quand vais-je recevoir mes paiements?
        </h3>
        <p className='para'>
          Tous les paiements SEPA sont payés 3 jours ouvrables après le prélèvement des fonds sur le compte de votre client.
        </p>
        <p className='para'>
          Nous ne conservons aucun paiement en réserve.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Acceptez-vous les cartes bancaires ou cartes bleues?
        </h3>
        <p className='para'>
          Non, GoCardless est uniquement un prestataire de prélèvement bancaire.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment est régulé GoCardless ?
        </h3>
        <p className='para'>
          GoCardless est un Etablissement de Paiement Agréé, régulé par l’autorité britannique FCA (Financial Conduct Authority) et
          habilité à collecter des paiements à travers l’Union Européenne.
        </p>
      </Translation>
    );
  }
}
