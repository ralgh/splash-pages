import React from 'react';
import Translation from '../../components/translation/translation';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import MobileIcon from '../../icons/svg/mobile';
import WhiteLabelIcon from '../../icons/svg/white-label';
import CheckListIcon from '../../icons/svg/checklist';
import PaymentPageIcon from '../../icons/svg/payment-page';
import ControlIcon from '../../icons/svg/control';
import Link from '../../components/link/link';

export default class ProFr extends React.Component {
  displayName = 'ProFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  Prenez le contrôle de vos prélèvements bancaires
                </h1>
                <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                  La meilleure technologie pour vos paiements<br />récurrents en ligne
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky-nav'>
          <div ng-gc-sticky-nav
          className='sticky-nav__inner u-background-light-gray u-text-heading u-text-xxs u-text-light u-text-no-smoothing'>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#en-bref' du-scrollspy ng-gc-smooth-scroll className='sticky-nav__link'>
                    En bref
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#tarifs' du-scrollspy ng-gc-smooth-scroll className='sticky-nav__link'>
                    Tarifs
                  </a>
                </li>
              </ul>
              <Link to='contact_sales' query={{ s: 'pro' }}
                className={
                  'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                  'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                }>
                Contactez-nous
              </Link>
              <a href='https://developer.gocardless.com/pro/' className='u-pull-end u-margin-Txxs u-margin-Rm'>
                Documentation API
              </a>
            </div>
            <hr className='u-margin-An' />
          </div>
        </div>
        <div className='section-scroll-target' id='en-bref'>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='u-size-3of4 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                  Découvrez GoCardless
                </h2>
                <p className='u-text-s u-color-p u-margin-Txs'>
                  GoCardless combine simplicité d'utilisation et contrôle complet du paiement
                  et de l'expérience client. Il vous permet d'encaisser des paiements par
                  compte bancaire dans toute la zone Euro <br />et au Royaume-Uni en une simple intégration.
                </p>
              </div>
              <div className='grid u-margin-Tl u-padding-Tm'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <PaymentPageIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <PaymentPageIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Gestion des mandats
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Dématérialisez automatiquement tous vos mandats de façon sécurisée
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ControlIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <ControlIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Encaissement des paiements
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Acceptez les paiements par compte bancaire, sur votre site, par téléphone ou par courrier
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Réconciliation automatique
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Visualisez le statut de vos paiements directement dans <br /> vos systèmes d'information
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='grid u-padding-Vxl'>
              <div className='grid__cell u-size-1of2 u-text-center'>
                <figure className='svg-icon svg-icon--small u-center'>
                  <WhiteLabelIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                  <WhiteLabelIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Vos paiements, votre marque
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Vos utilisateurs ne voient que votre marque. Vous avez un contrôle
                  total sur le design de vos pages de paiement et votre communication client.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-center'>
                <figure className='svg-icon svg-icon--small u-center'>
                  <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                  <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Une API simple et moderne
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Intégrez très simplement GoCardless dans votre site web et vos systèmes
                  d'information. Tout ce qu'il y a à savoir est dans
                  notre <a href='https://developer.gocardless.com/pro'>documentation</a>.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon svg-icon--small u-center'>
                  <MobileIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                  <MobileIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Compatibilité tout terrain
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  GoCardless s'intégre facilement dans n'importe quel site et application mobile,
                  quel que soit la technologie que vous utilisez.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon svg-icon--small u-center'>
                  <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                  <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Sécurité de calibre militaire
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Toutes les données bancaires sont chiffrées avec RSA et ne sont transmises
                  que par le biais de serveurs Européens sécurisés.
                </p>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='u-size-1of2 u-center'>
                <i className='europe-icon u-margin-Bs' />
                <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                  Vous avez des clients en Europe ?
                </h2>
                <div className='u-center'>
                  <p className='u-text-s u-color-p u-margin-Ts'>
                    GoCardless est le seul produit qui vous permet de collecter vos prélèvements
                    bancaires auprès de plus de 300 millions de personnes dans la zone
                    SEPA et le Royaume-Uni en une seule intégration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Txl'>
              <div className='u-size-1of2 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Vous êtes en bonne compagnie
                </h2>
                <p className='u-text-s u-color-p u-margin-Txs'>
                  Chaque jour les plus grandes entreprises et start-ups innovantes font confiance à
                  la technologie de GoCardless pour gérer leurs paiements
                </p>
              </div>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                <img src='/images/fr/logos/pro-logos-fr@2x.jpg' />
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
        </div>
        <div className='section-scroll-target' id='tarifs'>
          <div className='u-text-center u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Un prix adapté aux entreprises de toute taille
                </h2>
                <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                  En apprendre plus sur notre prix
                </Link>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
                Prenez contact avec notre équipe
              </h2>
              <Link to='contact_sales' query={{ s: 'pro' }} className='btn u-margin-Rm'>
                Contactez-nous
              </Link>
              <a href='https://manage-sandbox.gocardless.com/registrations/create'
              id='track-cta-try-pro-dash' className='btn btn--hollow'>Essayez gratuitement</a>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
