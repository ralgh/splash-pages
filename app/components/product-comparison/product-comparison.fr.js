import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import Translation from '../../components/translation/translation';

export default class ProductComparisonFr extends React.Component {
  displayName = 'ProductComparisonFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <table className='u-size-full'>
          <thead>
            <tr>
              <th />
              <th className='u-background-primary u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                <div className='u-text-l u-margin-Bxxs'>GoCardless</div>
                Prélèvez vos clients facilement
              </th>
              <th className='u-background-dark-gray-darken u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                <div className='u-text-l u-margin-Bxxs'>GoCardless Pro</div>
                Automatisez vos prélèvements
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Pour qui est-ce ?</td>
              <td className='comparison-table__cell'>PMEs souhaitant un accès rapide et simplifié</td>
              <td className='comparison-table__cell'>Entreprises souhaitant une solution flexible et automatisée</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Tableau de bord</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>API REST</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Transfert de vos clients</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Vos pages de paiement en marque blanche</td>
              <td className='comparison-table__cell'>
                <XIcon className='u-fill-dark-gray' alt='✘' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Chargé de compte et assistance d'implémentation</td>
              <td className='comparison-table__cell'>
                <XIcon className='u-fill-dark-gray' alt='✘' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Accès sous 24h</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <XIcon className='u-fill-dark-gray' alt='✘' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Vous êtes situés...</td>
              <td className='comparison-table__cell'>Dans l'UE</td>
              <td className='comparison-table__cell'>Dans le monde entier</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Collectez vos paiements...</td>
              <td className='comparison-table__cell'>Dans 22 pays (Eurozone et GB)</td>
              <td className='comparison-table__cell'>Dans 22 pays (Eurozone et GB)</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Mandats</td>
              <td className='comparison-table__cell'>Internet</td>
              <td className='comparison-table__cell'>Internet, téléphone et papier</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Nombre de paiements par mois</td>
              <td className='comparison-table__cell'>>0</td>
              <td className='comparison-table__cell'>>500</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Abonnement mensuel</td>
              <td className='comparison-table__cell'>0€</td>
              <td className='comparison-table__cell'>250€</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Frais de transaction</td>
              <td className='comparison-table__cell'>1% plafonné à 2€</td>
              <td className='comparison-table__cell'>Dégressif à partir de 0,60€</td>
            </tr>
          </tbody>
        </table>
      </Translation>
    );
  }
}
