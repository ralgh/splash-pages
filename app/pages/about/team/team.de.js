import React from 'react';
import Translation from '../../../components/translation/translation';
import { team } from '../../../constants/team';

export default class TeamDe extends React.Component {
  displayName = 'TeamDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-meta u-margin-Bm'>
                Wir sind ein junges Team mit der Mission ein neues Zahlungsnetzwerk für das Internet zu bauen.
              </h2>
            </div>
            <div className='grid__cell u-size-2of3'>
              <span className='u-text-heavy u-color-heading'>GoCardless sind: </span><span className='u-color-p'>
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
