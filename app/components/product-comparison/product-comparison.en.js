import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import Translation from '../../components/translation/translation';

export default class ProductComparisonEn extends React.Component {
  displayName = 'ProductComparisonEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <table className='u-size-full'>
          <thead>
            <tr>
              <th />
              <th className='u-background-primary u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                <div className='u-text-l u-margin-Bxxs'>GoCardless</div>
                Super simple online payments
              </th>
              <th className='u-background-dark-gray-darken u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                <div className='u-text-l u-margin-Bxxs'>GoCardless Pro</div>
                Completely control Direct Debit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Who is it for?</td>
              <td className='comparison-table__cell'>Small & medium sized businesses</td>
              <td className='comparison-table__cell'>Organisations that want total control</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Online dashboard</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>REST API</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Automatically transfer existing DDs</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Get your own SUN</td>
              <td className='comparison-table__cell'>
                <XIcon className='u-fill-dark-gray' alt='✘' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Create your own payment pages</td>
              <td className='comparison-table__cell'>
                <XIcon className='u-fill-dark-gray' alt='✘' />
              </td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Instant online set-up and approval</td>
              <td className='comparison-table__cell'>
                <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
              </td>
              <td className='comparison-table__cell'>
                <XIcon className='u-fill-dark-gray' alt='✘' />
              </td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Supports businesses in...</td>
              <td className='comparison-table__cell'>UK</td>
              <td className='comparison-table__cell'>Worldwide</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Accept payments from...</td>
              <td className='comparison-table__cell'>UK (& Eurozone on request)</td>
              <td className='comparison-table__cell'>UK & Eurozone</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Collection methods</td>
              <td className='comparison-table__cell'>Online</td>
              <td className='comparison-table__cell'>Online, paper, phone</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Number of transactions per month</td>
              <td className='comparison-table__cell'>>0</td>
              <td className='comparison-table__cell'>>500</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Monthly cost</td>
              <td className='comparison-table__cell'>£0</td>
              <td className='comparison-table__cell'>£200</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell u-text-end'>Transaction fees</td>
              <td className='comparison-table__cell'>1% up to a maximum of £2</td>
              <td className='comparison-table__cell'>1-60p depending on volume</td>
            </tr>
          </tbody>
        </table>
      </Translation>
    );
  }
}
