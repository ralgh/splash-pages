import React from 'react';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';

export default class SecurityFr extends React.Component {
  displayName = 'SecurityFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-center u-padding-Vxm'>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Agréé par la FCA
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                GoCardless est un Etablisement de Paiement Agréé, habilité à collecter des paiements à travers l’Union Européenne.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Des milliers nous font déjà confiance
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                GoCardless donne accès au prélèvement bancaire à des milliers d'entreprises en Europe.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Solidité financière
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Nous sommes financés par des investisseurs prestigieux, tel que Balderton Capital and Accel Partners.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Protection du consommateur
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                En cas de fraude sur un paiement, le consommateur a droit à un remboursement immédiat.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Sécurité de calibre militaire
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Toutes les données confidentielles sont chiffrées avec RSA et stockées sur nos serveurs sécurisés Européens.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Compte bancaire séquestre
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Les paiements collectés par GoCardless sont conservés sur un compte séquestre réservés aux clients.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
              Prenez contact avec notre équipe
            </h2>
            <Link to='contact_sales' query={{ s: 'pro' }} className='btn'>
              Contactez-nous
            </Link>
          </div>
        </div>
      </Translation>
    );
  }
}
