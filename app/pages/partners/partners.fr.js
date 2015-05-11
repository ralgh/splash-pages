import React from 'react';
import Translation from '../../components/translation/translation';
import CustomerIcon from '../../icons/svg/customer';
import ProIcon from '../../icons/svg/pro';
import AddPartnerIcon from '../../icons/svg/add-partner';

export default class PartnersFr extends React.Component {
  displayName = 'PartnersFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <div className='page-hero u-padding-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxm'>
            <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Aidez vos clients à être payés</h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
              Nous gérons les paiements pour les plateformes de facturation, de comptabilité et bien d'autres. <br />
              Si vos clients ont besoin de collecter des paiements réguliers, devenez notre partenaire.
            </p>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light'>
              Pas de frais spéciaux ou de paperasse, juste notre prix standard :<br /> 1% par transaction, plafonné à 2€.
            </h2>
            <div className='site-container u-padding-Txxl'>
              <div className='grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <ProIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Différenciez-vous
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Restez en avance de la compétition en proposant le prélèvement SEPA en marque blanche à tous vos clients.
                  </p>
                </div>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Ravissez vos clients
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    Simplifiez la vie de vos clients et rendez-les plus loyaux en les
                    laissant collecter leurs paiements via votre plateforme.
                  </p>
                </div>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Développez votre business
                  </h2>
                  <p className='u-size-2of3 u-center u-color-p u-margin-Vxs'>
                    En tant que partenaire GoCardless, vous pouvez toucher une commission ou facturer vos clients via notre solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light'>
              Les plateformes leaders sont partenaires de GoCardless
            </h2>
            <div className='grid integrations-grid u-margin-Txxl u-padding-Tl'>
              <div imgClass='zuora-logo u-margin-Vs'>
                Zuora propulse les entreprises fonctionnant par abonnement
              </div>

              <div imgClass='xero-logo'>
                Logiciel simple de comptabilité en ligne conçu pour les PME
              </div>

              <div imgClass='teamup-logo u-margin-Vxxs'>
                Le leader anglais des logiciels pour salles de sports
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
               Devenez un Partenaire
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Développez votre business en intégrant GoCardless. <br />
                Pour plus d'informations, contactez-nous à <a href='mailto:france@gocardless.com'>france@gocardless.com</a>
              </p>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
