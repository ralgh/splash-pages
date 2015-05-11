import React from 'react';
import Translation from '../../../components/translation/translation';
import Link from '../../../components/link/link';
import { team } from '../../../constants/team';

export default class TeamFr extends React.Component {
  displayName = 'TeamFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-meta u-margin-Bm'>
                Nous sommes une petite équipe formée d'individus talentueux travaillant ensemble pour construire l'avenir des paiements.
              </h2>
              <p className='u-text-heading-light u-text-xs u-color-meta'>
                Interested in joining the team?<br />Take a look at
                our <Link to='jobs' className='u-link-clean ku-link-color-meta u-text-underline'>
                  available positions
                </Link>
              </p>
            </div>
            <div className='grid__cell u-size-2of3'>
              <span className='u-text-heavy u-color-heading'>GoCardless est: </span><span className='u-color-p'>
                {team.join(', ')}
              .</span>
            </div>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Bxl'>
            <div className='grid__cell u-size-1of3'>
              <img src='/images/office/office-picnic-table.jpg' />
            </div>
            <div className='grid__cell u-size-2of3'>
              <img src='/images/office/office-support-booths.jpg' />
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
